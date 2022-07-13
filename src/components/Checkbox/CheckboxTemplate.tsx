import React, { useRef } from 'react';

import { useAppDispatch } from '../../app/hooks';

import {
    switchCheckboxStatus
} from '../../app/slices/filterSlice';

// /. imports

interface CheckboxTemplatePropTypes {
    id: number,
    labelText: string,
    isSelected: boolean,
    isDataLoading: boolean,
    isError: any,
    isCardsEmpty: boolean
}

const CheckboxTemplate: React.FC<CheckboxTemplatePropTypes> = (props) => {

    const {
        id,
        labelText,
        isSelected,
        isDataLoading,
        isError,
        isCardsEmpty
    } = props;
    // 
    const input = useRef<HTMLLabelElement>(null!);
    const dispatch = useAppDispatch();
    //
    const dataFilter = (e: any): void => {
        dispatch(switchCheckboxStatus(
            {
                id: id,
                status: true,
                sortOpt: e.target.attributes['data-quartal'].value
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
                disabled={isDataLoading || isError || isCardsEmpty}
            />
            <span className="filter__checkbox"></span>
            <span className="filter__text">{labelText}</span>
        </label>
    );

};

export default CheckboxTemplate;
