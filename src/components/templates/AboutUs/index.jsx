import React from 'react';

import './styles.scss';

const PostAboutUs = (props) => {
    const { title, subtitle, image} = props;
    return (
        <div className=''>
        <div className='about_main'>
            <img alt='img' className='about__image' src={image}></img>
            <h2 className='about__title'>{title}</h2>
            <p className='about__subtitle'>{subtitle}</p>
        </div>
        </div>
    );
};


export default PostAboutUs;