import React, { useEffect, useState } from 'react';

import { useAppSelector, useAppDispatch } from '../../app/hooks';

import { selectTemplatesTypes } from '../../Types/filterSliceTypes';

import { switchSelectMenuStatus } from '../../app/slices/mainSlice';

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

    // console.log(selectTemplates)

    const dispatch = useAppDispatch();

    const { currentSortOpt } = useAppSelector(state => state.filterSlice);
    const { priceMaxCounter, priceMinCounter } = useAppSelector(state => state.inputRangeSlice);

    const [currentSelectArray, setSelectArray] = useState<selectTemplatesTypes[]>(selectTemplates);

    const filterDataByQuartal = (array: any, filterProp: string): selectTemplatesTypes[] => {
        switch (filterProp) {
            case '3 квартал 2023':
                return array.filter((item: any) => item.quartalNumber === filterProp);
            case '4 квартал 2023':
                return array.filter((item: any) => item.quartalNumber === filterProp);
            case '1 квартал 2024':
                return array.filter((item: any) => item.quartalNumber === filterProp);
            case 'До конца года':
                return array;
            default:
                return array;
        }
    };

    useEffect(() => { // start filterDataByQuartal func
        setSelectArray(filterDataByQuartal(selectTemplates, currentSortOpt));
    }, [selectTemplates, currentSortOpt]);

    const filterDataByPrice = (array: any, minPrice: number, maxPrice: number): selectTemplatesTypes[] => {
        return array.filter((item: any) => item.value > minPrice && item.value < maxPrice);
    };

    // useEffect(() => { // start filterDataByPrice func - DESTROY FIRST RENDER OF SELECTTEMPLATES
    //     setSelectArray(filterDataByPrice(filterDataByQuartal(selectTemplates, currentSortOpt), priceMinCounter, priceMaxCounter));
    // }, [selectTemplates, priceMinCounter, priceMaxCounter]);

    // useEffect(() => { // handle empty data status
    //     currentSelectArray.length === 0 ? dispatch(switchSelectMenuStatus(true)) : dispatch(switchSelectMenuStatus(false));
    // }, [currentSelectArray]);

    // 
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