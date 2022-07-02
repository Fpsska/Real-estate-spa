import React, { useEffect, useRef, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { useFilter } from '../../hooks/useFilter';
import { switchDataLoadingStatus } from '../../app/slices/mainSlice';
import { switchCardActiveStatus } from '../../app/slices/filterSlice';
import Filter from '../Filter/Filter';
import CardList from '../CardList/CardList';
import Banner from '../Banner/Banner';
import Burger from '../Burger/Burger';
import Preloader from '../Common/Preloader/Preloader';
import { RootState } from '../../app/store';

// /. imports

const MainPage: React.FC = () => {
    const { isProjectsUndefined, isDataLoading } = useSelector((state: RootState) => state.mainSlice);
    const { cards, projectText, projectCount } = useSelector((state: RootState) => state.filterSlice);

    const [currentProjectCount, setProjectCount] = useState<number>(0);

    const {
        enteredSearchValue,
        setEnteredSearchValue,
        sortedItems
    } = useFilter({ items: cards, filterProp: 'subwayName' });
    // 
    const pageList = useRef<any>(null!);
    const dispatch = useDispatch();
    // 
    useEffect(() => {
        setTimeout(() => {
            dispatch(switchDataLoadingStatus(false));
        }, 1500);
    }, []);

    useEffect(() => {
        if (!isDataLoading && +projectCount > 0) {
            const idx = cards.findIndex(el => el.id === pageList.current.childNodes[0].id); // find first page__list element
            dispatch(switchCardActiveStatus({ index: idx, status: true }));
        }
    }, [isDataLoading, projectCount]);

    useEffect(() => {
        isDataLoading || isProjectsUndefined ? setProjectCount(0) : setProjectCount(projectCount);
    }, [isDataLoading, isProjectsUndefined, projectCount]);

    return (
        <div className="page">
            <h1 className="page__title">{`найдено ${currentProjectCount} ${projectText}`}</h1>
            <div className="page__wrapper">
                <div className="page__burger">
                    <Burger />
                </div>
                <div className="page__content">
                    <div className="page__list" ref={pageList}>
                        {isDataLoading ?
                            <Preloader />
                            :
                            isProjectsUndefined
                                ?
                                <h2 className="page__title page__title--result">Совпадений не найдено</h2>
                                :
                                <CardList sortedItems={sortedItems} />
                        }
                    </div>
                    <Banner />
                </div>
                <div className="page__aside">
                    <Filter enteredSearchValue={enteredSearchValue} setEnteredSearchValue={setEnteredSearchValue} />
                </div>
            </div>
        </div>
    );
};

export default MainPage;