import React from 'react';

import { useAppSelector, useAppDispatch } from '../../app/hooks';

import { Icards } from '../../Types/filterSliceTypes';

import SelectMenu from '../SelectMenu/SelectMenu';
import DistrictInfo from '../DistrictInfo/DistrictInfo';

import './card.scss';

// /. imports

interface propTypes {
    sortedItems: Icards[];
}

// /. interfaces

const CardList: React.FC<propTypes> = props => {
    const { sortedItems } = props;

    return (
        <>
            {sortedItems.map(item => {
                return (
                    <article
                        className={item.isActive ? 'card active' : 'card'}
                        key={item.id}
                        id={item.id}
                    >
                        <div className="card__wrapper">
                            <div className="card__preview">
                                <img
                                    className="card__image"
                                    src={require(`../../assets/images/${item.image}`)}
                                    alt="project preview"
                                />
                                <span className="card__clarification card__clarification--equipment">
                                    {item.equipment}
                                </span>
                                <span className="card__clarification card__clarification--suggestions">
                                    {item.suggestions}
                                </span>
                                <div className="card__broadcast">
                                    <div className="card__icon"></div>
                                    <a
                                        className="card__button"
                                        href="#"
                                        onClick={e => e.preventDefault()}
                                    >
                                        Live
                                    </a>
                                </div>
                            </div>
                            <div className="card__information">
                                <div className="card__location">
                                    <DistrictInfo
                                        complexName={item.complexName}
                                        subwayName={item.subwayName}
                                        walkTime={item.walkTime}
                                        wayMoving={item.wayMoving}
                                        isActive={item.isActive}
                                    />
                                </div>
                                {/* {
                                    isSelectMenuEmpty
                                        ? <h4 className="card__title">No matches yet</h4>
                                        :
                                        <SelectMenu
                                            isActive={item.isActive}
                                            selectTemplates={item.selectTemplates}
                                        // selectTemplates={filteredSelectData}
                                        />
                                } */}
                                <SelectMenu
                                    isActive={item.isActive}
                                    selectTemplates={item.selectTemplates}
                                />
                            </div>
                        </div>
                    </article>
                );
            })}
        </>
    );
};

export default CardList;
