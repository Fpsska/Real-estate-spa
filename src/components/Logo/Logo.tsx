import React from 'react';

import logo from '../../assets/images/logo_main-icon.svg';

const Logo: React.FC = () => {
    return (
        <a
            className="logo"
            href="https://cake.ru/"
            target="_blank"
            rel="noreferrer"
        >
            <img className="logo__image" src={logo} alt="logo" />
        </a>
    );
};

export default Logo;