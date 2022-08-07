import React from 'react';
import H1Post from '../H1Post';
import AboutUs from '../AboutUs';
import { ABOUT_US_DATA } from '../AboutUs/constants';
import { H1_POST } from '../H1Post/constants';

const PostPage = () => {
    return (
      <>
        {H1_POST.map((item) => (
          <H1Post
            title={item.title}
            subtitle={item.subtitle}
          />
        ))}
        {ABOUT_US_DATA.map((item) => (
            <AboutUs
            image={item.image}
            title={item.title}
            subtitle={item.subtitle}
            />
        ))}
      </>
    );
  };
  
  export default PostPage;