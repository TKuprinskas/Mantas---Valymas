import React from "react";
import "./Blog.css";

const Blog = (props) => {
  return (
    <div className="blog">
      <div className="blog__title">
        <h1>{props.title}</h1>
      </div>
      <div className="blog__content">
        <p>{props.content}</p>
      </div>
    </div>
  );
};

export default Blog;
