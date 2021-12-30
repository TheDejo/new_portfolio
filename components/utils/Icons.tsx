import React from 'react';

const Open = () => (
    <svg width="49" height="23" viewBox="0 0 49 23" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path
            d="M6.56836 11.5947L20.9727 17.0635V22.9961L0.538086 13.8896V9.17773L20.9727 0.0957031V6.02832L6.56836 11.5947ZM42.6523 11.4727L27.5645 5.93066V0.0957031L48.6582 9.17773V13.8896L27.5645 22.9717V17.1367L42.6523 11.4727Z"
            fill="#FED330"
        />
    </svg>
);

const Close = () => (
    <svg width="69" height="40" viewBox="0 0 69 40" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path
            d="M6.56836 20.5947L20.9727 26.0635V31.9961L0.538086 22.8896V18.1777L20.9727 9.0957V15.0283L6.56836 20.5947ZM29.1514 39.0518H24.4883L38.4775 0.453125H43.1406L29.1514 39.0518ZM62.4277 20.4727L47.3398 14.9307V9.0957L68.4336 18.1777V22.8896L47.3398 31.9717V26.1367L62.4277 20.4727Z"
            fill="#FED330"
        />
    </svg>
);

const icons = {
    Close,
    Open,
};

export default icons;
