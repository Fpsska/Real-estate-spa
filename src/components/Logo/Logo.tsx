import React from 'react';

import logo from '../../assets/icons/logo_main-icon.svg';

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
