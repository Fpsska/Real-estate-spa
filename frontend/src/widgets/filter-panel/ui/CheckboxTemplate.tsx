import React, { useRef } from 'react';

import { useFilterActions } from '../../../store/actions';

// /. imports

interface propTypes {
    id: number;
    labelText: string;
    isSelected: boolean;

    isDataLoading: boolean;
    isError: any;

    isCardsEmpty: boolean;
    selectTemplates: any[];
    currentSortOpt: string;
}

const CheckboxTemplate: React.FC<propTypes> = (props) => {
    const {
        id,
        labelText,
        isSelected,

        isDataLoading,
        isError,
        isCardsEmpty
    } = props;

    const labelRef = useRef<HTMLLabelElement>(null!);

    const { switchCheckboxStatus, setCurrentSortOpt } = useFilterActions();

    const filterData = (): void => {
        switchCheckboxStatus({ id: id, status: true });
        setCurrentSortOpt({ sortOpt: labelText });
    };

    return (
        <li className="checkbox-list__item">
            <label
                className="checkbox"
                ref={labelRef}
            >
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
