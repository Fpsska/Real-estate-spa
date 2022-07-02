import React, { useEffect, useRef, useState } from 'react';

import { useAppSelector, useAppDispatch } from '../../app/hooks';

import { switchDataLoadingStatus } from '../../app/slices/mainSlice';
import { switchCardActiveStatus } from '../../app/slices/filterSlice';

import { useFilter } from '../../hooks/useFilter';

import Filter from '../Filter/Filter';
import CardList from '../CardList/CardList';
import Banner from '../Banner/Banner';
import Burger from '../Burger/Burger';
import Preloader from '../Common/Preloader/Preloader';

// /. imports

const MainPage: React.FC = () => {
    const { isProjectsUndefined, isDataLoading } = useAppSelector(state => state.mainSlice);
    const { cards, projectText, projectCount } = useAppSelector(state => state.filterSlice);

    const [currentProjectCount, setProjectCount] = useState<number>(0);

    const {
        enteredSearchValue,
        setEnteredSearchValue,
        sortedItems
    } = useFilter({ items: cards, filterProp: 'subwayName' });
    // 
    const pageListRef = useRef<any>(null!);
    const dispatch = useAppDispatch();
    // 

    useEffect(() => {
        setTimeout(() => {
            dispatch(switchDataLoadingStatus(false));
        }, 1500);
    }, []);

    useEffect(() => {
        if (!isDataLoading && +projectCount > 0) {
            const idx = cards.findIndex(el => el.id === pageListRef.current.childNodes[0].id); // find first page__list element
            dispatch(switchCardActiveStatus({ index: idx, status: true }));
        }
    }, [isDataLoading, projectCount]);

    useEffect(() => {  // set project count
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
                    <div className="page__list" ref={pageListRef}>
                        {isDataLoading
                            ? <Preloader />
                            : isProjectsUndefined
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