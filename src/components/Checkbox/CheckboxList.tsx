import React from 'react';

import { useAppSelector } from '../../app/hooks';

import { IcheckboxTemplates } from '../../types/filterSliceTypes';

import CheckboxTemplate from './CheckboxTemplate';

import './checkbox.scss';

// /. imports

interface propTypes {
    isError: any;
    isCardsEmpty: boolean;
}

// /. interfaces

const CheckboxList: React.FC<propTypes> = props => {
    const { isError, isCardsEmpty } = props;

    const { isDataLoading } = useAppSelector(state => state.mainSlice);
    const { checkboxInputs, selectTemplates, currentSortOpt } = useAppSelector(
        state => state.filterSlice
    );

    return (
        <ul className="checkbox-list">
            {checkboxInputs.map((input: IcheckboxTemplates) => {
                return (
                    <CheckboxTemplate
                        key={input.id}
                        {...input}
                        isDataLoading={isDataLoading}
                        isError={isError}
                        isCardsEmpty={isCardsEmpty}
                        selectTemplates={selectTemplates}
                        currentSortOpt={currentSortOpt}
                    />
                );
            })}
        </ul>
    );
};

export default CheckboxList;
