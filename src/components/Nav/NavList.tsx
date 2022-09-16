import React from 'react';

import { useAppSelector } from '../../app/hooks';

import { InavLinkTemplates } from '../../Types/mainSliceTypes';

import NavLink from './NavLink';

import './nav.scss';

// /. imports

const NavList: React.FC = () => {

    const { navLinks } = useAppSelector(state => state.mainSlice);

    return (
        <ul className="nav">
            {navLinks.map((link: InavLinkTemplates) => {
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

export default NavList;