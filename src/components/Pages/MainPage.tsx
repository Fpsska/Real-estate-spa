import React, { useEffect, useRef, useState } from 'react';

import { useAppSelector, useAppDispatch } from '../../app/hooks';

import { switchCardActiveStatus, setCurrentProjectCount, setCurrentProjectText } from '../../app/slices/filterSlice';

import { useFilter } from '../../hooks/useFilter';

import { useGetCardTemplatesQuery } from '../../app/api/card-templatesAPI';
import { declinateByNum } from '../../helpers/declinateByNumber';

import Filter from '../Filter/Filter';
import CardList from '../CardList/CardList';
import Banner from '../Banner/Banner';
import Preloader from '../Common/Preloader/Preloader';

// /. imports

const MainPage: React.FC = () => {
    const { isDataLoading } = useAppSelector(state => state.mainSlice);
    const { cards, projectCount, projectText } = useAppSelector(state => state.filterSlice);

    const [isCardsEmpty, setCardsEmptyStatus] = useState<boolean>(true);
    const [isTransformed, setTransformStatus] = useState<boolean>(true);

    const { isError } = useGetCardTemplatesQuery('');
    const currentTextValue = declinateByNum(projectCount, ['project', 'projects']);

    const {
        enteredSearchValue,
        setEnteredSearchValue,
        sortedItems
    } = useFilter({ items: cards, filterProp: 'subwayName' });

    const pageListRef = useRef<any>(null!);
    const dispatch = useAppDispatch();


    useEffect(() => { // check cards[] length
        if (!isError) {
            sortedItems.length === 0 ? setCardsEmptyStatus(true) : setCardsEmptyStatus(false);
        }
    }, [sortedItems, isError]);

    useEffect(() => { // handle transformed class of pageListRef
        if (!isDataLoading) {
            sortedItems.length === 1 || sortedItems.length === 0
                ? setTransformStatus(true)
                : setTransformStatus(false);
        }
    }, [sortedItems, isDataLoading]);

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


    useEffect(() => {   // update projectCount state value
        dispatch(setCurrentProjectCount(Math.abs(sortedItems.length)));
    }, [sortedItems]);

    useEffect(() => { // update projectText state value
        dispatch(setCurrentProjectText(currentTextValue));
    }, [currentTextValue]);

    return (
        <section className="page">
            <h1 className="page__title">{`Found ${projectCount} ${projectText}`}</h1>
            <div className="page__wrapper">

                <div className="page__content">
                    <div className={isTransformed ? 'page__list transformed' : 'page__list'} ref={pageListRef}>
                        {isDataLoading
                            ? <Preloader />
                            : isError ? <h2 className="page__title page__title--error">Response Error</h2>
                                : isCardsEmpty ? <h2 className="page__title page__title--result">No matches yet</h2>
                                    : <CardList sortedItems={sortedItems} />
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
        </section>
    );
};

export default MainPage;