import React from 'react';

// /. imports

interface propTypes {
    text: string;
    link: string;
}

// /. interfaces

const NavLink: React.FC<propTypes> = (props) => {

    const { text, link } = props;

    return (
        <li className="nav__item">
            <a className="nav__link" onClick={e => e.preventDefault()} href={link}>{text}</a>
        </li>
    );
};

export default NavLink;