import React, { useEffect, useState } from 'react';

import { useAppSelector, useAppDispatch } from '../../app/hooks';

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

    const dispatch = useAppDispatch();

    const { currentSortOpt } = useAppSelector(state => state.filterSlice);

    const [currentSelectArray, setSelectArray] = useState<any[]>(selectTemplates);

    const filterDataByQuartal = (array: any, filterProp: string) => {
        switch (filterProp) {
            case '3 квартал 2023':
                return array.filter((item: any) => item.quartalNumber === filterProp);
            case '4 квартал 2023':
                return array.filter((item: any) => item.quartalNumber === filterProp);
            case '1 квартал 2024':
                return array.filter((item: any) => item.quartalNumber === filterProp);
            case 'До конца года':
                return array.filter((item: any) => item.quartalNumber === filterProp || !isActive);
            default:
                return array;
        }
    };

    useEffect(() => { // start filterDataByQuartal func
        setSelectArray(filterDataByQuartal(selectTemplates, currentSortOpt));
    }, [selectTemplates, currentSortOpt]);

    return (
        <div className={isActive ? 'zone active' : 'zone'}>
            <div className="zone__wrapper">
                {currentSelectArray.map((item: any) => {
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