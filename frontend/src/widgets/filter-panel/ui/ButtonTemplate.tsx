import React from 'react';

import { useFilterActions } from '../../../store/actions';

// /. imports

interface propTypes {
    id: number;
    text: string;
    isButtonSelected: boolean;

    isDataLoading: boolean;
    isError: boolean;
    isCardsEmpty: boolean;
}

// /. interfaces

const ButtonTemplate: React.FC<propTypes> = (props) => {
    const { id, text, isButtonSelected, isDataLoading, isError, isCardsEmpty } =
        props;

    const { setRoomCountValue, switchButtonSelectedStatus } =
        useFilterActions();

    const buttonHandler = (e: React.SyntheticEvent) => {
        e.preventDefault();
        setRoomCountValue(text);
        switchButtonSelectedStatus({ id, status: true });
    };

    return (
        <button
            className={
                isButtonSelected
                    ? 'button-list__item active'
                    : 'button-list__item'
            }
            title={text}
            disabled={isDataLoading || isError || isCardsEmpty}
            onClick={buttonHandler}
        >
            {text}
        </button>
    );
};

export { ButtonTemplate };
