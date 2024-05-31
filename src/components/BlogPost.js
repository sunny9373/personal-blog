import React from "react";
import "./BlogPost.css";

const BlogPost = ({ title, date, author, image, children }) => {
  return (
    <div className="blog-post">
      <h2>{title}</h2>
      <p>
        <small>
          {date} by {author}
        </small>
      </p>
      <div>{children}</div>
      <hr />
    </div>
  );
};

export default BlogPost;
