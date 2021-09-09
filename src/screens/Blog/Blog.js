import React from "react";
import styles from "./Blog.module.css";

function Blog() {
  return (
    <div className={styles.Blog}>
      <div className={styles.BlogImage}>
        <img src="./img/linkedin-sales-navigator-402831.png" alt="linkedin" />
      </div>
      <div className={styles.BlogContent}>
        <p>YOU SHOULD ALSO KNOW</p>
        <p>
          MDD affects more than 16.1 million American adults, or about 6.7%of
          the U.S. population age 18 and older in a given year. We at{" "}
          <span>ThriveTalk</span> can help you.
        </p>
        <p>GET HELP NOW</p>
      </div>
    </div>
  );
}

export default Blog;
