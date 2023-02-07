import React, { useEffect, useState, useRef } from 'react';

import { useAppSelector, useAppDispatch } from '../../app/hooks';

import {
    switchCardActiveStatus,
    setCurrentProjectCount,
    setCurrentProjectText
} from '../../app/slices/filterSlice';

import { useFilter } from '../../hooks/useFilter';

import { useGetCardTemplatesQuery } from '../../app/api/card-templatesAPI';
import { declinateByNum } from '../../helpers/declinateByNumber';

import Filter from '../Filter/Filter';
import CardList from '../CardList/CardList';
import Banner from '../Banner/Banner';
import Preloader from '../Common/Preloader/Preloader';
import ButtonRefresh from '../ButtonRefresh/ButtonRefresh';

// /. imports

const MainPage: React.FC = () => {
    const [isCardsEmpty, setCardsEmptyStatus] = useState<boolean>(true);
    const [isTransformed, setTransformStatus] = useState<boolean>(true);

    const [isRefetched, setRefetchingStatus] = useState<boolean>(false);

    const { isDataLoading } = useAppSelector(state => state.mainSlice);
    const { cards, projectCount, projectText } = useAppSelector(
        state => state.filterSlice
    );

    const { isError } = useGetCardTemplatesQuery('', {
        skip: isRefetched
    });
    const currentTextValue = declinateByNum(projectCount, [
        'project',
        'projects'
    ]);

    const { enteredSearchValue, setEnteredSearchValue, sortedItems } =
        useFilter({ items: cards, filterProp: 'subwayName' });

    const pageListRef = useRef<any>(null!);
    const dispatch = useAppDispatch();

    // /. hooks

    useEffect(() => {
        if (!isDataLoading) {
            // handle transformed class of pageListRef
            projectCount <= 1
                ? setTransformStatus(true)
                : setTransformStatus(false);

            const itemID = pageListRef.current.childNodes[0].id;

            // set active class for one detected HTML-el after sorting
            dispatch(
                switchCardActiveStatus({
                    id: itemID,
                    quantity: projectCount
                })
            );
        }
    }, [isDataLoading, projectCount]);

    useEffect(() => {
        // update projectCount state value
        dispatch(setCurrentProjectCount(Math.abs(sortedItems.length)));

        // check cards[] length
        sortedItems.length === 0
            ? setCardsEmptyStatus(true)
            : setCardsEmptyStatus(false);
    }, [sortedItems]);

    useEffect(() => {
        // update projectText state value
        dispatch(setCurrentProjectText(currentTextValue));
    }, [currentTextValue]);

    // /. effects

    return (
        <section className="page">
            <h1 className="page__title">{`Found ${projectCount} ${projectText}`}</h1>
            <div className="page__wrapper">
                <div className="page__content">
                    <div
                        className={
                            isTransformed
                                ? 'page__list transformed'
                                : 'page__list'
                        }
                        ref={pageListRef}
                    >
                        <>
                            {isDataLoading ? (
                                <Preloader />
                            ) : isError ? (
                                <>
                                    <h2 className="page__title page__title--error">
                                        Response Error
                                    </h2>
                                    <ButtonRefresh
                                        setRefetchingStatus={
                                            setRefetchingStatus
                                        }
                                    />
                                </>
                            ) : isCardsEmpty ? (
                                <h2 className="page__title page__title--result">
                                    No matches yet
                                </h2>
                            ) : (
                                <CardList sortedItems={sortedItems} />
                            )}
                        </>
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
