import React from 'react';

import './styles.scss';

const Headline = (props) => {
    const { title, subtitle,} = props;
    return (
        <>
        <div className='headline'>
            <h1 className='headline-title'>{title}</h1>
            <p className='headline-subtitle'>{subtitle}</p>
        </div>
        </>
    );
};

export default Headline;