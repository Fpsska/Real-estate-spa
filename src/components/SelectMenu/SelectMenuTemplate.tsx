import React from 'react';

import { Ivalue } from '../../Types/filterSliceTypes';

// /. imports

interface propTypes {
    id: number;
    ploteName: string;
    housingNumber: string;
    quartalNumber: string;
    value: Ivalue[];
}

// /. interfaces

const SelectMenuTemplate: React.FC<propTypes> = (props) => {

    const {
        id,
        ploteName,
        housingNumber,
        quartalNumber,
        value
    } = props;

    return (
        <div className="zone__section" key={id}>
            <div className="zone__information">
                <span className="zone__plote">{ploteName}</span>
                <span className="zone__description">{`${housingNumber} ${quartalNumber}`}</span>
            </div>
            <div className="zone__select">
                <select name="select">
                    {value.map(item => {
                        return (
                            <option className="select__option" value={item.value} key={item.id}>{`starts at ${item.value} mil. ₽`}</option>
                        );
                    })}
                </select>
            </div>
        </div>
    );
};

export default SelectMenuTemplate;