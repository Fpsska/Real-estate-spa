import React from 'react';

import { selectTemplateTypes } from '../../Types/filterSliceTypes';
import './select.scss';

import SelectMenuTemplate from './SelectMenuTemplate';

// /. imports

interface SelectMenuPropTypes {
    selectTemplate: selectTemplateTypes[];
    isActive: boolean;
}

// /. interfaces

const SelectMenu: React.FC<SelectMenuPropTypes> = (props) => {

    const {
        selectTemplate,
        isActive
    } = props;

    return (
        <div className={isActive ? 'zone active' : 'zone'}>
            <div className="zone__wrapper">
                {selectTemplate.map(item => {
                    return (
                        <SelectMenuTemplate
                            key={item.id}
                            id={item.id}
                            plateName={item.plateName}
                            housingNumber={item.housingNumber}
                            quartalNumber={item.quartalNumber}
                            value={item.value}
                        />
                    );
                })}
            </div>
        </div>
    );
};

export default SelectMenu;