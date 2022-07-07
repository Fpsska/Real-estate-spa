import React, { useEffect } from 'react';

import { Outlet } from 'react-router-dom';

import { useAppDispatch, useAppSelector } from '../../app/hooks';

import { useGetCardTemplatesQuery } from '../../app/api/card-templatesAPI';

import { switchDataLoadingStatus } from '../../app/slices/mainSlice';
import { setCardsData } from '../../app/slices/filterSlice';

import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import Burger from '../Burger/Burger';

// /. imports

const Layout: React.FC = () => {

    const { isDataLoading } = useAppSelector(state => state.mainSlice);

    const { data } = useGetCardTemplatesQuery('');

    const dispatch = useAppDispatch();

    useEffect(() => {
        setTimeout(() => {
            dispatch(switchDataLoadingStatus(false));
        }, 1500);
        if (!isDataLoading) { // set cards
            dispatch(setCardsData(data));
        }
    }, [isDataLoading]);

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