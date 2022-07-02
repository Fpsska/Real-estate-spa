import React, { useRef } from 'react';

import { useAppDispatch } from '../../app/hooks';

import {
    setFilteredQuartalData
} from '../../app/slices/filterSlice';

// /. imports

interface CheckboxTemplatePropTypes {
    id: number,
    labelText: string,
    isSelected: boolean,
    isDataLoading: boolean,
    data: any
}

const CheckboxTemplate: React.FC<CheckboxTemplatePropTypes> = (props) => {

    const {
        id,
        labelText,
        isSelected,
        isDataLoading,
        data
    } = props;
    // 
    const input = useRef<HTMLLabelElement>(null!);
    const dispatch = useAppDispatch();
    //
    const dataFilter = (e: any): void => {
        dispatch(setFilteredQuartalData(
            {
                data: data,
                id: id,
                status: !isSelected,
                attribute: e.target.attributes['data-quartal'].value
            }
        ));
    };
    //   
    return (
        <label className="filter__label" ref={input}>
            <input
                type="checkbox"
                className="filter__input filter__input--checkbox"
                data-quartal={labelText}
                name="quarter"
                onChange={dataFilter}
                checked={isSelected}
                disabled={isDataLoading}
            />
            <span className="filter__checkbox"></span>
            <span className="filter__text">{labelText}</span>
        </label>
    );

};

export default CheckboxTemplate;
