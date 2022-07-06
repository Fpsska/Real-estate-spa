import React from 'react';

// /. imports

interface NavLinkPropTypes {
    text: string,
    link: string
}

const NavLink: React.FC<NavLinkPropTypes> = (props) => {

    const {
        text,
        link
    } = props;
    // 
    return (
        <li className="nav__item">
            <a className="nav__link" onClick={e => e.preventDefault()} href={link}>{text}</a>
        </li>
    );
};

export default NavLink;