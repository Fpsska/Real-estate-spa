import React from 'react';

import logo from '../../assets/images/logo_main-icon.svg';

import './logo.scss';

// /. imports

interface propTypes {
    role?: string;
}

// /. interfaces

const Logo: React.FC<propTypes> = ({ role }) => {
    return (
        <a
            className={role ? `logo ${role}` : 'logo'}
            href="https://cake.ru/"
            target="_blank"
            rel="noreferrer"
        >
            <img
                className="logo__image"
                src={logo}
                alt="logo"
            />
        </a>
    );
};

export default Logo;
