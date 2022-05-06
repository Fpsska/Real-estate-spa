import React, { useMemo, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { switchSelectMenuStatus } from '../../app/slices/mainSlice';
import SelectMenu from '../SelectMenu/SelectMenu';
import DistrictInfo from '../DistrictInfo/DistrictInfo';
import { cardsTypes } from '../../Types/filterSliceTypes';
import { RootState } from '../../app/store';
import './card.scss';

// /. imports


interface CardListPropTypes {
    sortedItems: cardsTypes[]
}

// /. interfaces

const CardList: React.FC<CardListPropTypes> = ({ sortedItems }) => {
    const { isSelectMenuEmpty } = useSelector((state: RootState) => state.mainSlice);
    const { filteredQuartalData, isDataFiltered, selectTemplate } = useSelector((state: RootState) => state.filterSlice);
    const dispatch = useDispatch();
    // 
    useEffect(() => {
        if (selectTemplate.length === 0) {
            dispatch(switchSelectMenuStatus(true));
        } else {
            dispatch(switchSelectMenuStatus(false));
        }
    }, [selectTemplate, isSelectMenuEmpty]);
    // 
    const list = useMemo(() => sortedItems.map(item => {
        return (
            <article className={item.isActive ? 'card active' : 'card'} key={item.id} id={item.id}>
                <div className="card__wrapper">
                    <div className="card__preview">
                        <img className="card__image" src={require(`../../assets/images/${item.image}`)} alt="area" />
                        <span className="card__clarification card__clarification--equipment">{item.equipment}</span>
                        <span className="card__clarification card__clarification--suggestions">{item.suggestions}</span>
                        <div className="card__broadcast">
                            <div className="card__icon"></div>
                            <button className="card__button">Live</button>
                        </div>
                    </div>
                    <div className="card__information">
                        <div className="card__location">
                            <DistrictInfo
                                complexName={item.complexName}
                                subwayName={item.subwayName}
                                walkTime={item.walkTime}
                                wayMoving={item.wayMoving}
                                isActive={item.isActive} />
                        </div>
                        <>
                            {
                                isSelectMenuEmpty
                                    ? <h4 className="card__title">Совпадений не найдено</h4>
                                    : <SelectMenu isActive={item.isActive} selectTemplate={selectTemplate} />
                            }
                        </>
                    </div>
                </div>
            </article>
        );
    }), [sortedItems, selectTemplate, filteredQuartalData, isDataFiltered]);

    return <>{list}</>;
};

export default CardList;