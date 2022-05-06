import React from 'react';

import { Outlet } from 'react-router-dom';

import Header from '../Header/Header';
import Footer from '../Footer/Footer';

// /. imports

const Layout: React.FC = () => {
    return (
        <>
            <Header />
            <main className="main">
                <div className="container">
                    <Outlet />
                </div>
            </main>
            <Footer />
        </>
    );
};

export default Layout;