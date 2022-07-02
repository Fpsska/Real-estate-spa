import React, { useMemo } from 'react';

import { useAppSelector, useAppDispatch } from '../../app/hooks';

import { switchButtonSelectedStatus, setRoomCountValue } from '../../app/slices/filterSlice';

import './button.scss';

// /. imports

const ButtonList: React.FC = () => {
    const { isDataLoading } = useAppSelector(state => state.mainSlice);
    const { buttons } = useAppSelector(state => state.filterSlice);
    const dispatch = useAppDispatch();
    // 
    const list = useMemo(() => buttons.map(item => {
        const buttonHandler = (e: React.SyntheticEvent) => {
            e.preventDefault();
            dispatch(setRoomCountValue(item.text));
            dispatch(switchButtonSelectedStatus({ id: item.id, status: true }));
        };
        return (
            <button className={item.isButtonSelected ? 'filter__button active' : 'filter__button'}
                key={item.id}
                disabled={isDataLoading}
                onClick={buttonHandler}
            >
                {item.text}
            </button>
        );
    }), [buttons, isDataLoading]);

    return <>{list}</>;
};

export default ButtonList;