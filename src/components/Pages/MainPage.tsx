import React, { useEffect, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useFilter } from "../../hooks/filter";
import { switchDataLoadingStatus } from "../../app/slices/mainSlice";
import { setCurrentProjectText, switchCardActiveStatus } from "../../app/slices/filterSlice";
import Filter from "../Filter/Filter";
import CardList from "../CardList/CardList";
import Banner from "../Banner/Banner";
import Burger from "../Burger/Burger";
import Preloader from "../Common/Preloader/Preloader";
import { RootState } from "../../app/store";

const MainPage: React.FC = () => {
    const { isProjectsUndefined, isDataLoading } = useSelector((state: RootState) => state.mainSlice)
    const { cards, projectText, projectCount } = useSelector((state: RootState) => state.filterSlice)
    const { enteredSearchValue,
        setEnteredSearchValue,
        sortedItems, } = useFilter(cards, "subwayName")
    const dispatch = useDispatch()
    const pageList = useRef<any>(null!)
    // 
    useEffect(() => {
        if (+projectCount >= 5 || +projectCount === 0 || isProjectsUndefined || isDataLoading) {
            dispatch(setCurrentProjectText("проектов"))
        }
        if (+projectCount >= 2 || +projectCount <= 4) {
            dispatch(setCurrentProjectText("проекта"))
        }
        if (+projectCount === 1) {
            dispatch(setCurrentProjectText("проект"))
        }
    }, [projectCount, isProjectsUndefined, isDataLoading])

    useEffect(() => {
        setTimeout(() => {
            dispatch(switchDataLoadingStatus(false))
        }, 1500);
    }, [])

    useEffect(() => {
        if (!isDataLoading && +projectCount > 0) {
            const idx = cards.findIndex(el => el.id === pageList.current.childNodes[0].id)
            dispatch(switchCardActiveStatus({ index: idx, status: true }))
        }
    }, [isDataLoading, projectCount])

    return (
        <div className="page">
            <h1 className="page__title">{`найдено ${isDataLoading ? 0 : isProjectsUndefined ? 0 : projectCount}`} {isDataLoading ? "проектов" : isProjectsUndefined ? "проектов" : projectText}</h1>
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
    )
}

export default MainPage;