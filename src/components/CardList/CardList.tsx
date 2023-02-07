import React from 'react';

import { Icards } from '../../types/filterSliceTypes';

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
                                <>
                                    {item.equipment && (
                                        <span className="card__clarification card__clarification--equipment">
                                            {item.equipment}
                                        </span>
                                    )}
                                </>
                                <span className="card__clarification card__clarification--suggestions">
                                    {item.suggestions ||
                                        'count of suggestions check with the builder'}
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
