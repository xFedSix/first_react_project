import React from "react";

import BlogComponent from "../../components/BlogComponent";
import TitleComponent from "../../components/TitleComponent";
import ButtonComponent from "../../components/ButtonComponent";
import { TITLE, BLOG_DATA } from "./constants.js";
import { BUTTON_LABEL } from "../../components/ButtonComponent/constants";

import "./styles.scss";
import { useDispatch, useSelector } from "react-redux";
import { fetchBlogMiddleware } from "../../components/store/middleware";

const Blog = () => {
  const dispatch = useDispatch();
  const getBlogFromAPI = fetchBlogMiddleware();
  const blogs = useSelector((state) => state.fetchBlogReducer.blogs);

  return (
    <div className="blog">
      <div className="p-4">
        <TitleComponent title={TITLE.title} subtitle={TITLE.subtitle} />
      </div>
      <div className="blog__data container ms-0 row ">
        {BLOG_DATA.map(
          ({ id, image, title, subtitle, date, devtext, className }) => (
            <BlogComponent
              key={id}
              image={image}
              title={title}
              subtitle={subtitle}
              date={date}
              devtext={devtext}
              className={className}
            />
          )
        )}
        {blogs.map(({ id, image, title, subtitle, className }) => (
          <BlogComponent
            key={id}
            image={image}
            title={title}
            subtitle={subtitle}
            className={className}
          />
        ))}
      </div>

      <div className="d-flex justify-content-center p-4">
        <ButtonComponent
          buttonClick={() => getBlogFromAPI(dispatch)}
          buttonClass="button__large"
          label={BUTTON_LABEL.showMore}
        />
      </div>
    </div>
  );
};

export default Blog;
