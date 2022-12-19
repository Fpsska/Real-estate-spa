import React from 'react';

import { useAppSelector } from '../../app/hooks';

import { InavLinkTemplates } from '../../types/mainSliceTypes';

import NavLink from './NavLink';

import './nav.scss';

// /. imports

interface propTypes {
    role?: string;
}

// /. interfaces

const NavList: React.FC<propTypes> = ({ role }) => {
    const { navLinks } = useAppSelector(state => state.mainSlice);

    return (
        <nav className={role ? `nav ${role}` : 'nav'}>
            <ul className="nav__list">
                {navLinks.map((link: InavLinkTemplates) => {
                    return (
                        <NavLink
                            key={link.id}
                            {...link}
                        />
                    );
                })}
            </ul>
        </nav>
    );
};

export default NavList;
