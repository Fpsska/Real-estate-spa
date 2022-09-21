import React from 'react';

import { Iprices } from '../../Types/filterSliceTypes';

// /. imports

interface propTypes {
    id: number;
    ploteName: string;
    housingNumber: string;
    quartalNumber: string;
    prices: Iprices[]
}

// /. interfaces

const SelectMenuTemplate: React.FC<propTypes> = (props) => {

    const {
        id,
        ploteName,
        housingNumber,
        quartalNumber,
        prices
    } = props;

    return (
        <div className="zone__section" key={id}>
            <div className="zone__information">
                <span className="zone__plote">{ploteName}</span>
                <span className="zone__description">{`${housingNumber} ${quartalNumber}`}</span>
            </div>
            <div className="zone__select">
                <select name="select">
                    {prices.map(price => {
                        return (
                            <option className="select__option" value={price.value} key={price.id}
                            >
                                {`starts at ${price.value} mil. ₽`}
                            </option>
                        );
                    })}
                </select>
            </div>
        </div>
    );
};

export default SelectMenuTemplate;