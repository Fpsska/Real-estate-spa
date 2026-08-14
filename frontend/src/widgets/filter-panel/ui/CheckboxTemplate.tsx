import React from 'react';

import { useQuarterFilterActions } from '../../../features/quarter-filter';

// /. imports

interface propTypes {
    labelText: string;
    isSelected: boolean;

    isDataLoading: boolean;
    isError: any;

    isCardsEmpty: boolean;
}

const CheckboxTemplate: React.FC<propTypes> = (props) => {
    const { labelText, isSelected, isDataLoading, isError, isCardsEmpty } =
        props;

    const { setCurrentFilterOption } = useQuarterFilterActions();

    const filterData = (): void => {
        setCurrentFilterOption({ filterOption: labelText });
    };

    return (
        <li className="checkbox-list__item">
            <label className="checkbox">
                <input
                    className="checkbox__input"
                    type="checkbox"
                    name="quarter"
                    onChange={filterData}
                    checked={isSelected}
                    disabled={isDataLoading || isError || isCardsEmpty}
                />
                <span className="checkbox__input--fake"></span>
                <span className="checkbox__text">{labelText}</span>
            </label>
        </li>
    );
};

export { CheckboxTemplate };
