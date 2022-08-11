import React from 'react';

import './styles.scss';

const AboutUs = (props) => {
    const { title, subtitle, image} = props;
    return (
        <div className='about'>
            <img alt='img' className='about-image' src={image}></img>
            <h2 className='about-title'>{title}</h2>
            <p className='about-subtitle'>{subtitle}</p>
        </div>
    );
};


export default AboutUs;