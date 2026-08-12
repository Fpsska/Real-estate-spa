import React, { useEffect } from 'react';

import { Outlet } from 'react-router-dom';

import { useAppSelector } from '../../store/hooks';
import { useMainActions, useFilterActions } from '../../store/actions';

import { useGetCardTemplatesQuery } from '../../store/api/card-templatesAPI';

import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import Burger from '../Burger/Burger';

// /. imports

const Layout: React.FC = () => {
    const { isDataLoading } = useAppSelector((state) => state.mainSlice);

    const { data } = useGetCardTemplatesQuery('');

    const { switchDataLoadingStatus } = useMainActions();
    const { setCardsData } = useFilterActions();

    useEffect(() => {
        setTimeout(() => {
            switchDataLoadingStatus(false);
        }, 1500);
        !isDataLoading && setCardsData(data); // set cards
    }, [isDataLoading, data, switchDataLoadingStatus, setCardsData]);

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

export default Layout;
