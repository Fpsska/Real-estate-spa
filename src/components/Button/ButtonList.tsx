import React, { useMemo } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { switchButtonSelectedStatus, setRoomCountValue } from '../../app/slices/filterSlice';
import './button.scss';
import { RootState } from '../../app/store';

// /. imports

const ButtonList: React.FC = () => {
    const { isDataLoading } = useSelector((state: RootState) => state.mainSlice);
    const { buttons } = useSelector((state: RootState) => state.filterSlice);
    const dispatch = useDispatch();
    // 
    const list = useMemo(() => buttons.map(item => {
        const buttonHandler = (e: React.SyntheticEvent) => {
            e.preventDefault();
            dispatch(setRoomCountValue(item.text));
            dispatch(switchButtonSelectedStatus({ id: item.id, status: !item.isButtonSelected }));
        };
        return (
            <button className={item.isButtonSelected ? 'filter__button active' : 'filter__button'} disabled={isDataLoading ? true : false} key={item.id} onClick={buttonHandler}>{item.text}</button>
        );
    }), [buttons, isDataLoading]);

    return <>{list}</>;
};

export default ButtonList;