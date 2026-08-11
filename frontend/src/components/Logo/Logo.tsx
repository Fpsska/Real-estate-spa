import React from 'react';

import './logo.scss';

const LOGO_IMG = `${__BASE_URL__}assets/icons/logo_main-icon.svg`;

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
                src={LOGO_IMG}
                alt="logo"
            />
        </a>
    );
};

export default Logo;
