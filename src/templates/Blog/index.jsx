import React from "react";

import BlogComponent from "../../components/BlogComponent";
import TitleComponent from "../../components/TitleComponent";
import ButtonComponent from "../../components/ButtonComponent";
import { TITLE, BLOG_DATA } from "./constants.js";

import "./styles.scss";

const Blog = () => {
  return (
    <div className="blog">
      <div className="p-4">
        <TitleComponent title={TITLE.title} subtitle={TITLE.subtitle} />
      </div>
      <div className="data row">
        {BLOG_DATA.map(
          ({ id, image, title, subtitle, date, devtext, className }) => (
            <div key={id}>
              <BlogComponent
                image={image}
                title={title}
                subtitle={subtitle}
                date={date}
                devtext={devtext}
                className={className}
              />
            </div>
          )
        )}
      </div>

      <div className="d-flex justify-content-center p-4">
        <ButtonComponent buttonClass="button--large" label="MORE VIEW" />
      </div>
    </div>
  );
};

export default Blog;
