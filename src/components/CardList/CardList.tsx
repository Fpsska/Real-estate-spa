import React, { useEffect } from 'react';

import { useAppSelector, useAppDispatch } from '../../app/hooks';

import { switchSelectMenuStatus } from '../../app/slices/mainSlice';

import { cardsTypes } from '../../Types/filterSliceTypes';

import SelectMenu from '../SelectMenu/SelectMenu';
import DistrictInfo from '../DistrictInfo/DistrictInfo';

import './card.scss';

// /. imports

interface CardListPropTypes {
    sortedItems: cardsTypes[]
}

// /. interfaces

const CardList: React.FC<CardListPropTypes> = (props) => {

    const { sortedItems } = props;

    const { isSelectMenuEmpty } = useAppSelector(state => state.mainSlice);
    const { selectTemplates } = useAppSelector(state => state.filterSlice);
    

    const dispatch = useAppDispatch();
    //
    useEffect(() => {
        console.log(isSelectMenuEmpty)
    }, [isSelectMenuEmpty]);

    // useEffect(() => {
    //     console.log(selectTemplates.length)
    // }, [selectTemplates]);
    // 
    return (
        <>
            {sortedItems.map(item => {
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
                                {
                                    isSelectMenuEmpty
                                        ? <h4 className="card__title">Совпадений не найдено</h4>
                                        :
                                        <SelectMenu
                                            isActive={item.isActive}
                                            selectTemplates={item.selectTemplates}
                                        />
                                }
                            </div>
                        </div>
                    </article>
                );
            })}
        </>
    );
};

export default CardList;