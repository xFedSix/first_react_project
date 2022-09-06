import React from "react";

import "./styles.scss";

const BlogComponent = (props) => {
  const { title, subtitle, image, date, devtext } = props;
  return (
    <div className="row flex-nowrap">
      <div className="col-sm-4 col-lg-8 d-flex">
        <img alt="img" src={image}></img>
      </div>
      <div className="description col-sm-4 col-lg-4 d-flex flex-column justify-content-center">
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
