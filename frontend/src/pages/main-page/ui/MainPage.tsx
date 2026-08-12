import React, { useEffect, useState, useRef } from 'react';

import { useAppSelector } from '../../../app/store/hooks';

import {
    useCardsActions,
    useGetCardTemplatesQuery
} from '../../../entities/cards';

import { useFilter, declinateByNum } from '../../../shared/lib';
import { Banner, Preloader, ButtonRefresh } from '../../../shared/ui';

import { Filter } from '../../../widgets/filter-panel';
import { CardList } from '../../../widgets/card-list';

// /. imports

const MainPage: React.FC = () => {
    const [isCardsEmpty, setCardsEmptyStatus] = useState<boolean>(true);
    const [isTransformed, setTransformStatus] = useState<boolean>(true);

    const [isRefetched, setRefetchingStatus] = useState<boolean>(false);

    const { isDataLoading, cards, projectCount, projectText } = useAppSelector(
        (state) => state.card
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
    const {
        switchCardActiveStatus,
        setCurrentProjectCount,
        setCurrentProjectText
    } = useCardsActions();

    // /. hooks

    useEffect(() => {
        if (!isDataLoading) {
            // handle transformed class of pageListRef
            projectCount <= 1
                ? setTransformStatus(true)
                : setTransformStatus(false);

            const itemID = pageListRef.current.childNodes[0].id;

            // set active class for one detected HTML-el after sorting
            switchCardActiveStatus({
                id: itemID,
                quantity: projectCount
            });
        }
    }, [isDataLoading, projectCount, switchCardActiveStatus]);

    useEffect(() => {
        // update projectCount state value
        setCurrentProjectCount(Math.abs(sortedItems.length));

        // check cards[] length
        sortedItems.length === 0
            ? setCardsEmptyStatus(true)
            : setCardsEmptyStatus(false);
    }, [sortedItems, setCurrentProjectCount]);

    useEffect(() => {
        // update projectText state value
        setCurrentProjectText(currentTextValue);
    }, [currentTextValue, setCurrentProjectText]);

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

export { MainPage };
