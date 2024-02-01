import React, { useState, useEffect } from "react";
import Product from "../Components/Product";
import img1 from "../assets/images/a.jpeg";
import img2 from "../assets/images/b.jpeg";
import img3 from "../assets/images/c.jpeg";
import img4 from "../assets/images/d.jpeg";
import axios from "axios";

const client = axios.create({
  baseURL: "https://jsonplaceholder.typicode.com/posts",
});
const Home = () => {
  const [data, setData] = useState([{}]);
  useEffect(() => {
    const fetchPost = async () => {
      await client.get().then((res) => setData(res.data));
      console.log(data);
    };
    fetchPost();
  }, []);
  const products = [
    { id: 1, imgSrc: img1, price: "16$", color: "green", alt: "img1" },
    { id: 2, imgSrc: img2, price: "10$", color: "red", alt: "img2" },
    { id: 3, imgSrc: img3, price: "12$", color: "blue", alt: "img3" },
    { id: 4, imgSrc: img4, price: "18$", color: "yellow", alt: "img4" },
    { id: 5, imgSrc: img1, price: "16$", color: "green", alt: "img1" },
    { id: 6, imgSrc: img2, price: "10$", color: "red", alt: "img2" },
    { id: 7, imgSrc: img3, price: "12$", color: "blue", alt: "img3" },
    { id: 8, imgSrc: img4, price: "18$", color: "yellow", alt: "img4" },
  ];

  return (
    <div className="homePage">
      <h1 className="text-3xl text-slate-500 hover:text-blue-600">Home Page</h1>
      <div className="productsWrapper">
        {products.map((product) => (
          <Product
            key={product.id}
            imgSrc={product.imgSrc}
            price={product.price}
            color={product.color}
            alt={product.alt}
          />
        ))}
      </div>
    </div>
  );
};

export default Home;
