import React, { useMemo } from 'react';

import { selectTemplateTypes } from '../../Types/filterSliceTypes';
import './select.scss';

// /. imports

interface SelectMenuPropTypes {
    selectTemplate: selectTemplateTypes[];
    isActive: boolean;
}

// /. interfaces

const SelectMenu: React.FC<SelectMenuPropTypes> = ({ selectTemplate, isActive }) => {
    const list = useMemo(() => selectTemplate.map(item => {
        return (
            <div className="zone__section" key={item.id}>
                <div className="zone__information">
                    <span className="zone__plate">{item.plateName}</span>
                    <span className="zone__description">{`${item.housingNumber} ${item.quartalNumber}`}</span>
                </div>
                <div className="card__select">
                    <select name="select">
                        <option value="">{`от ${item.value} млн. ₽`}</option>
                    </select>
                </div>
            </div>
        );
    }), [selectTemplate]);
    return (
        <div className={isActive ? 'zone active' : 'zone'}>
            <div className="zone__wrapper">
                {list}
            </div>
        </div>
    );
};

export default SelectMenu;