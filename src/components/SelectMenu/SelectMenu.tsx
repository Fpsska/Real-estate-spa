import React, { useState, useEffect, useRef } from 'react';

import { useAppSelector, useAppDispatch } from '../../app/hooks';

import { IselectTemplates } from '../../Types/filterSliceTypes';

import { switchSelectMenuStatus } from '../../app/slices/mainSlice';

import { setSelectTemplatesData } from '../../app/slices/filterSlice';

import { filterByQuartal } from '../../helpers/filterByQuartal';
import { filterDataByPrice } from '../../helpers/filterDataByPrice';

import SelectMenuTemplate from './SelectMenuTemplate';

import './select.scss';

// /. imports

interface propTypes {
    selectTemplates: IselectTemplates[];
    isActive: boolean;
}

// /. interfaces

const SelectMenu: React.FC<propTypes> = (props) => {

    const {
        selectTemplates,
        isActive
    } = props;

    const { isSelectMenuEmpty } = useAppSelector(state => state.mainSlice);
    const { currentSortOpt } = useAppSelector(state => state.filterSlice);
    const { inputRangeMinValue, inputRangeMaxValue } = useAppSelector(state => state.inputRangeSlice);

    const [filteredSDataByQuarter, setFilteredSDataByQuarter] = useState<IselectTemplates[]>(selectTemplates);
    const [filteredSDataByPrice, setFilteredSDataByPrice] = useState<IselectTemplates[]>(filteredSDataByQuarter);

    const zoneWrapperRef = useRef<HTMLDivElement>(null!);
    const dispatch = useAppDispatch();


    useEffect(() => {
        setFilteredSDataByQuarter(filterByQuartal(selectTemplates, currentSortOpt));
    }, [selectTemplates, currentSortOpt]);

    useEffect(() => {
        setFilteredSDataByPrice(filterDataByPrice(filteredSDataByQuarter, inputRangeMinValue, inputRangeMaxValue));
    }, [filteredSDataByQuarter, inputRangeMinValue, inputRangeMaxValue]);

    return (
        <div className={isActive ? 'zone active' : 'zone'}>
            <div className="zone__wrapper" ref={zoneWrapperRef}>
                {isSelectMenuEmpty ?
                    <h4 className="card__title">No matches yet</h4>
                    :
                    <>
                        {filteredSDataByPrice.map((select: IselectTemplates) => {
                            return (
                                <SelectMenuTemplate
                                    key={select.id}
                                    {...select}
                                />
                            );
                        })}
                    </>
                }
                {/* <>
                    {filteredSDataByPrice.map((select: IselectTemplates) => {
                        return (
                            <SelectMenuTemplate
                                key={select.id}
                                {...select}
                            />
                        );
                    })}
                </> */}
            </div>
        </div>
    );
};

export default SelectMenu;