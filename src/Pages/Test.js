import React, { useState, useEffect } from "react";
import axios from "axios";

function Test() {
  const client = axios.create({
    baseURL: "https://jsonplaceholder.typicode.com/posts",
  });

  const [data, setData] = useState([{}]);
  useEffect(() => {
    const fetchPost = async () => {
      try {
        let response = await client.get("?_limit=10");
        setData(response.data);
        console.log(response.data);
      } catch (error) {
        console.log(error);
      }
    };
    fetchPost();
  }, []);

  return (
    <div style={{ height: "88vh" }}>
      <h1
        style={{
          fontFamily: "cursive",
          fontSize: "18px",
          textAlign: "center",
          margin: "10px auto 0 auto",
          padding: "10px",
        }}
      >
        Data received from the external api
      </h1>
      <hr
        style={{
          width: "30%",
          margin: "auto",
          height: "2px",
          backgroundColor: "navy",
          border: "none",
          marginBottom: "50px",
        }}
      />
      <ul
        style={{
          border: "none",
          width: "fit-content",
          padding: "30px 60px",
          margin: "10px auto",
          boxShadow: "0 3px 6px navy",
          borderRadius: "10px",
          fontFamily: "monospace",
          fontSize: "16px",
          listStyleType: "circle",
        }}
      >
        {data && data.map((post, index) => <li key={index}>{post.title}</li>)}
      </ul>
    </div>
  );
}

export default Test;
