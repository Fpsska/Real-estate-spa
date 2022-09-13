import React from 'react'

import { useAppDispatch } from '../../app/hooks';

import { setRoomCountValue, switchButtonSelectedStatus } from '../../app/slices/filterSlice';

// /. imports

interface ButtonTemplatePropTypes {
    id: number;
    text: string,
    isButtonSelected: boolean,

    isDataLoading: boolean,
    isError: boolean
}

// /. interfaces

const ButtonTemplate: React.FC<ButtonTemplatePropTypes> = (props) => {

    const {
        id,
        text,
        isButtonSelected,

        isDataLoading,
        isError
    } = props;

    const dispatch = useAppDispatch();

    const buttonHandler = (e: React.SyntheticEvent) => {
        e.preventDefault();
        dispatch(setRoomCountValue(text));
        dispatch(switchButtonSelectedStatus({ id, status: true }));
    };

    return (
        <button className={isButtonSelected ? 'filter__button active' : 'filter__button'}
            disabled={isDataLoading || isError}
            onClick={buttonHandler}
        >
            {text}
        </button>
    );
};

export default ButtonTemplate;