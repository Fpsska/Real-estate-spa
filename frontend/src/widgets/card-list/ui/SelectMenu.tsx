import React, { useState, useEffect } from 'react';

import { useAppSelector } from '../../../app/store/hooks';

import { IselectTemplates } from '../../../entities/cards';

import { filterByQuartal } from '../lib/filterByQuartal';
import { filterDataByPrice } from '../lib/filterDataByPrice';

import { SelectMenuTemplate } from './SelectMenuTemplate';

import './select.scss';

// /. imports

interface propTypes {
    selectTemplates: IselectTemplates[];
    // isActive: boolean;
}

// /. interfaces

const SelectMenu: React.FC<propTypes> = (props) => {
    const {
        selectTemplates
        // isActive
    } = props;

    const currentFilterOption = useAppSelector(
        (state) => state.quarterFilter.currentFilterOption
    );
    const inputRangeMinValue = useAppSelector(
        (state) => state.priceRangeFilter.inputRangeMinValue
    );
    const inputRangeMaxValue = useAppSelector(
        (state) => state.priceRangeFilter.inputRangeMaxValue
    );

    const [filteredSDataByQuarter, setFilteredSDataByQuarter] = useState<
        IselectTemplates[]
    >([]);

    const [filteredSDataByPrice, setFilteredSDataByPrice] = useState<
        IselectTemplates[]
    >([]);

    useEffect(() => {
        setFilteredSDataByQuarter(
            filterByQuartal(selectTemplates, currentFilterOption)
        );
    }, [selectTemplates, currentFilterOption]);

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
        <div
            // className={isActive ? 'zone active' : 'zone'}
            className="zone"
        >
            <div className="zone__wrapper">
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

export { SelectMenu };
