import React from 'react';

import { useSelector } from 'react-redux';

import { RootState } from '../../app/store';
import './nav.scss';

import NavLink from './NavLink';

// /. imports

const Nav: React.FC = () => {

    const { navLinks } = useSelector((state: RootState) => state.mainSlice);
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