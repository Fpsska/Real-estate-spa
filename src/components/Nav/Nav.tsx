import React from 'react';

import { useAppSelector } from '../../app/hooks';

import NavLink from './NavLink';

import './nav.scss';

// /. imports

const Nav: React.FC = () => {

    const { navLinks } = useAppSelector(state => state.mainSlice);
    // 
    return (
        <ul className="nav">
            {navLinks.map(item => {
                return (
                    <NavLink
                        key={item.id}
                        text={item.text}
                        link={item.link}
                    />
                );
            })}
        </ul>
    );
};

export default Nav;