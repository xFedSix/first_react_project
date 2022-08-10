import React from 'react';

import './styles.scss';

const H1_post = (props) => {
    const { title, subtitle,} = props;
    return (
        <>
        <div className='h1_main'>
            <h1 className='about__title'>{title}</h1>
            <p className='about__subtitle'>{subtitle}</p>
        </div>
        </>
    );
};

export default H1_post;