import React from 'react';

import { useAppSelector } from '../../app/hooks';

import NavLink from './NavLink';

import './nav.scss';

// /. imports

const Nav: React.FC = () => {

    const { navLinks } = useAppSelector(state => state.mainSlice);

    return (
        <ul className="nav">
            {navLinks.map(link => {
                return (
                    <NavLink
                        key={link.id}
                        {...link}
                    />
                );
            })}
        </ul>
    );
};

export default Nav;