import React from 'react';

import { selectTemplatesTypes } from '../../Types/filterSliceTypes';

import SelectMenuTemplate from './SelectMenuTemplate';

import './select.scss';

// /. imports

interface SelectMenuPropTypes {
    selectTemplates: selectTemplatesTypes[];
    isActive: boolean;
}

// /. interfaces

const SelectMenu: React.FC<SelectMenuPropTypes> = (props) => {

    const {
        selectTemplates,
        isActive
    } = props;

    return (
        <div className={isActive ? 'zone active' : 'zone'}>
            <div className="zone__wrapper">
                {selectTemplates.map(item => { // {...}
                    // console.log('select', item)
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