import React from 'react';

import { Outlet } from 'react-router-dom';

import { useGetCardTemplatesQuery } from '../../../entities/cards';

import { Header } from '../../header';
import { Footer } from '../../footer';
import { Burger } from '../../burger-menu';

// /. imports

const Layout: React.FC = () => {
    useGetCardTemplatesQuery(); // warm up the RTK Query cache before MainPage mounts

    return (
        <>
            <Header />
            <main className="main">
                <Burger />
                <div className="container">
                    <Outlet />
                </div>
            </main>
            <Footer />
        </>
    );
};

export { Layout };
