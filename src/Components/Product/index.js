import React from "react";
import styles from "./product.module.css";
const index = ({ imgSrc, price, color, alt }) => {
  return (
    <div className={styles.productInfo}>
      <img className={styles.imgWrapper} src={imgSrc} alt={alt} />
      <div className={styles.details}>
        <span>Price: {price}</span>
        <span>Color: {color}</span>
      </div>
    </div>
  );
};

export default index;
