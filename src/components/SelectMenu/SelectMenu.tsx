import React, { useState, useEffect, useRef } from 'react';

import { useAppSelector } from '../../app/hooks';

import { IselectTemplates } from '../../types/filterSliceTypes';

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

const SelectMenu: React.FC<propTypes> = props => {
    const { selectTemplates, isActive } = props;

    const { currentSortOpt } = useAppSelector(state => state.filterSlice);
    const { inputRangeMinValue, inputRangeMaxValue } = useAppSelector(
        state => state.inputRangeSlice
    );

    const [filteredSDataByQuarter, setFilteredSDataByQuarter] = useState<
        IselectTemplates[]
    >([]);

    const [filteredSDataByPrice, setFilteredSDataByPrice] = useState<
        IselectTemplates[]
    >([]);

    const zoneWrapperRef = useRef<HTMLDivElement>(null!);

    useEffect(() => {
        setFilteredSDataByQuarter(
            filterByQuartal(selectTemplates, currentSortOpt)
        );
    }, [selectTemplates, currentSortOpt]);

    useEffect(() => {
        setFilteredSDataByPrice(
            filterDataByPrice(
                filteredSDataByQuarter,
                inputRangeMinValue,
                inputRangeMaxValue
            )
        );
    }, [filteredSDataByQuarter, inputRangeMinValue, inputRangeMaxValue]);

    return (
        <div className={isActive ? 'zone active' : 'zone'}>
            <div
                className="zone__wrapper"
                ref={zoneWrapperRef}
            >
                {filteredSDataByPrice.length === 0 ? (
                    <h4 className="card__title">No matches yet</h4>
                ) : (
                    <>
                        {filteredSDataByPrice.map(
                            (select: IselectTemplates) => {
                                return (
                                    <SelectMenuTemplate
                                        key={select.id}
                                        {...select}
                                    />
                                );
                            }
                        )}
                    </>
                )}
            </div>
        </div>
    );
};

export default SelectMenu;
