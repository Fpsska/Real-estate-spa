import React, { useEffect } from 'react';

import { Outlet } from 'react-router-dom';

import { useAppSelector } from '../../../app/store/hooks';

import {
    useCardsActions,
    useGetCardTemplatesQuery
} from '../../../entities/cards';

import { Header } from '../../header';
import { Footer } from '../../footer';
import { Burger } from '../../burger-menu';

// /. imports

const Layout: React.FC = () => {
    const { isDataLoading } = useAppSelector((state) => state.card);

    const { data } = useGetCardTemplatesQuery('');

    const { switchDataLoadingStatus, setCardsData } = useCardsActions();

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

export { Layout };
