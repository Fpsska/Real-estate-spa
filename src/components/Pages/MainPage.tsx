import React, { useEffect, useRef, useState } from 'react';

import { useAppSelector, useAppDispatch } from '../../app/hooks';

import { switchCardActiveStatus } from '../../app/slices/filterSlice';

import { useFilter } from '../../hooks/useFilter';

import { useGetCardTemplatesQuery } from '../../app/api/card-templatesAPI';

import Filter from '../Filter/Filter';
import CardList from '../CardList/CardList';
import Banner from '../Banner/Banner';
import Preloader from '../Common/Preloader/Preloader';

// /. imports

const MainPage: React.FC = () => {
    const { isProjectsUndefined, isDataLoading } = useAppSelector(state => state.mainSlice);
    const { cards, projectText, projectCount } = useAppSelector(state => state.filterSlice);

    const [currentProjectCount, setProjectCount] = useState<number>(0);
    const [isCardsEmpty, setCardsEmptyStatus] = useState<boolean>(true);

    const { isError } = useGetCardTemplatesQuery('');

    const {
        enteredSearchValue,
        setEnteredSearchValue,
        sortedItems
    } = useFilter({ items: cards, filterProp: 'subwayName' });

    // 
    const pageListRef = useRef<any>(null!);
    const dispatch = useAppDispatch();
    // 

    useEffect(() => { // check cards array length
        !isError &&
            cards.length === 0 ? setCardsEmptyStatus(true) : setCardsEmptyStatus(false);
    }, [cards, isError]);

    useEffect(() => {   // set active class for 1st sorted item HTML-el
        if (!isDataLoading && projectCount === 1) {
            dispatch(switchCardActiveStatus(
                {
                    index: cards.findIndex(el => el.id === pageListRef.current.childNodes[0].id), status: true
                }
            ));
        } else if (!isDataLoading && projectCount > 0) {
            dispatch(switchCardActiveStatus(
                {
                    index: cards.findIndex(el => el.id === pageListRef.current.childNodes[0].id),
                    status: false
                }
            ));
        }
    }, [isDataLoading, projectCount]);

    useEffect(() => {  // set project count
        isDataLoading || isProjectsUndefined ? setProjectCount(0) : setProjectCount(projectCount);
    }, [isDataLoading, isProjectsUndefined, projectCount]);

    return (
        <div className="page">
            <h1 className="page__title">{`найдено ${currentProjectCount} ${projectText}`}</h1>
            <div className="page__wrapper">

                <div className="page__content">
                    <div className="page__list" ref={pageListRef}>
                        {isDataLoading
                            ? <Preloader />
                            : isError ? <h2 className="page__title page__title--error">Response Error</h2>
                            : isCardsEmpty ? <h2 className="page__title page__title--result">Каталог проектов пуст</h2>
                            : isProjectsUndefined ? <h2 className="page__title page__title--result">Совпадений не найдено</h2>
                            : <CardList sortedItems={sortedItems} cards={cards} />
                        }
                    </div>
                    <Banner />
                </div>
                <div className="page__aside">
                    <Filter
                        enteredSearchValue={enteredSearchValue}
                        setEnteredSearchValue={setEnteredSearchValue}
                        isError={isError}
                        isCardsEmpty={isCardsEmpty}
                    />
                </div>
            </div>
        </div>
    );
};

export default MainPage;