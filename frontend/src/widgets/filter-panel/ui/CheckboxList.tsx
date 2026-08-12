import React from 'react';

import { useAppSelector } from '../../../store/hooks';

import { checkboxTemplates } from '../model/data';

import { CheckboxTemplate } from './CheckboxTemplate';

import './checkbox.scss';

// /. imports

interface propTypes {
    isError: any;
    isCardsEmpty: boolean;
}

// /. interfaces

const CheckboxList: React.FC<propTypes> = (props) => {
    const { isError, isCardsEmpty } = props;

    const { isDataLoading } = useAppSelector((state) => state.mainSlice);
    const { selectedCheckboxId, selectTemplates, currentSortOpt } =
        useAppSelector((state) => state.filterSlice);

    return (
        <ul className="checkbox-list">
            {checkboxTemplates.map((input) => {
                return (
                    <CheckboxTemplate
                        key={input.id}
                        id={input.id}
                        labelText={input.labelText}
                        isSelected={input.id === selectedCheckboxId}
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

export { CheckboxList };
