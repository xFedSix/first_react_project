import React from "react";
import "./styles.scss";

const BlogComponent = ({
  title,
  subtitle,
  image,
  date,
  devtext,
  className,
}) => {
  return (
    <div className={className} >
      <div>
        <img alt="img" src={image}></img>
      </div>
      <div className="col-sm-12 col-lg-4 d-flex flex-column justify-content-center">
        <h3>{title}</h3>
        <div className="data-dev pt-4 d-flex">
          <span className="material-icons">calendar_month</span>
          <p>{date}</p>
          <i className="bi bi-file-earmark"></i>
          <p>{devtext}</p>
        </div>
        <p>{subtitle}</p>
      </div>
    </div>
  );
};

export default BlogComponent;
