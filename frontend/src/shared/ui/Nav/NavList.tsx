import React from 'react';

import { InavLinkTemplates } from '../../model';

import { navLinks } from './data';
import NavLink from './NavLink';

import './nav.scss';

// /. imports

interface propTypes {
    role?: string;
}

// /. interfaces

const NavList: React.FC<propTypes> = ({ role }) => {
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

export { NavList };
