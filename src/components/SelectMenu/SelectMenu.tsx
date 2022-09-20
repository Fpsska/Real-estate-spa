import React, { useState, useEffect } from 'react';

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

    const [filteredSelectData, setFilteredSelectData] = useState<IselectTemplates[]>(selectTemplates);

    const dispatch = useAppDispatch();

    useEffect(() => {
        filteredSelectData.length === 0
            ? dispatch(switchSelectMenuStatus(true))
            : dispatch(switchSelectMenuStatus(false));
    }, [filteredSelectData]);

    useEffect(() => {
        setFilteredSelectData(filterDataByPrice(selectTemplates, inputRangeMinValue, inputRangeMaxValue));
    }, [selectTemplates, inputRangeMinValue, inputRangeMaxValue]);

    useEffect(() => {
        setFilteredSelectData(filterByQuartal(selectTemplates, currentSortOpt));
    }, [selectTemplates, currentSortOpt]);

    return (
        <div className={isActive ? 'zone active' : 'zone'}>
            <div className="zone__wrapper">
                {isSelectMenuEmpty ?
                    <h4 className="card__title">No matches yet</h4>
                    :
                    <>
                        {filteredSelectData.map((select: IselectTemplates) => {
                            return (
                                <SelectMenuTemplate
                                    key={select.id}
                                    {...select}
                                />
                            );
                        })}
                    </>
                }
            </div>
        </div>
    );
};

export default SelectMenu;