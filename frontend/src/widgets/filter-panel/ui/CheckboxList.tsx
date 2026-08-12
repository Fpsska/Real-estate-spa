import React from 'react';

import { useAppSelector } from '../../../app/store/hooks';
import { checkboxTemplates } from '../../../features/quarter-filter';

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

    const { isDataLoading, selectTemplates } = useAppSelector(
        (state) => state.card
    );
    const { selectedCheckboxId, currentSortOpt } = useAppSelector(
        (state) => state.quarterFilter
    );

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
