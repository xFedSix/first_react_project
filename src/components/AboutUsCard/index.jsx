import React from 'react';

const AboutUsCard = (props) => {
    const { title, subtitle, image} = props;
    return (
        <div className='about'>
            <img alt='img' className='about__image' src={image}></img>
            <h3 className='about__title'>{title}</h3>
            <p className='about__subtitle'>{subtitle}</p>
        </div>
    );
};

export default AboutUsCard;