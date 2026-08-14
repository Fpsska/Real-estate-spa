// import { useAppSelector } from '../../../app/store/hooks';

import {
    // useCardsActions,
    useGetCardTemplatesQuery
} from '../../../entities/cards';

import { useFilter, declinateByNum } from '../../../shared/lib';
import { Banner, Preloader, ButtonRefresh } from '../../../shared/ui';

import { Filter } from '../../../widgets/filter-panel';
import { CardList } from '../../../widgets/card-list';

// /. imports

const MainPage = () => {
    // const activeCardId = useAppSelector((state) => state.card.activeCardId);

    const {
        data: cards = [],
        isFetching: isDataLoading,
        isError,
        refetch
    } = useGetCardTemplatesQuery();

    const { enteredSearchValue, setEnteredSearchValue, filteredItems } =
        useFilter({ items: cards, filterProp: 'subwayName' });

    // /. hooks

    const isCardsEmpty = !filteredItems.length;
    const projectCount = filteredItems.length;
    const isTransformed = !isDataLoading && projectCount === 1;
    const projectText = declinateByNum(projectCount, ['project', 'projects']);

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
                    >
                        <>
                            {isDataLoading ? (
                                <Preloader />
                            ) : isError ? (
                                <>
                                    <h2 className="page__title page__title--error">
                                        Response Error
                                    </h2>
                                    <ButtonRefresh onRefetch={refetch} />
                                </>
                            ) : isCardsEmpty ? (
                                <h2 className="page__title page__title--result">
                                    No matches yet
                                </h2>
                            ) : (
                                <CardList
                                    filteredItems={filteredItems}
                                    // activeCardId={activeCardId}
                                />
                            )}
                        </>
                    </div>
                    <Banner
                        projectCount={projectCount}
                        projectText={projectText}
                    />
                </div>
                <div className="page__aside">
                    <Filter
                        enteredSearchValue={enteredSearchValue}
                        setEnteredSearchValue={setEnteredSearchValue}
                        projectCount={projectCount}
                        projectText={projectText}
                        isDataLoading={isDataLoading}
                        isError={isError}
                        isCardsEmpty={isCardsEmpty}
                    />
                </div>
            </div>
        </section>
    );
};

export { MainPage };
