import React from 'react';

import { useAppSelector } from '../../../app/store/hooks';
import { checkboxTemplates } from '../../../features/quarter-filter';

import { CheckboxTemplate } from './CheckboxTemplate';

import './checkbox.scss';

// /. imports

interface propTypes {
    isDataLoading: boolean;
    isError: any;
    isCardsEmpty: boolean;
}

// /. interfaces

const CheckboxList: React.FC<propTypes> = (props) => {
    const { isDataLoading, isError, isCardsEmpty } = props;

    const selectedCheckboxId = useAppSelector(
        (state) => state.quarterFilter.selectedCheckboxId
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
                    />
                );
            })}
        </ul>
    );
};

export { CheckboxList };
