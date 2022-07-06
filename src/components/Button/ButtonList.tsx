import React from 'react';

import { useAppSelector } from '../../app/hooks';

import ButtonTemplate from './ButtonTemplate';

import './button.scss';

// /. imports

const ButtonList: React.FC = () => {
    const { isDataLoading } = useAppSelector(state => state.mainSlice);
    const { buttons } = useAppSelector(state => state.filterSlice);

    return (
        <>
            {buttons.map(item => {
                return (
                    <ButtonTemplate
                        key={item.id}
                        id={item.id}
                        text={item.text}
                        isButtonSelected={item.isButtonSelected}
                        isDataLoading={isDataLoading}
                    />
                );
            })}
        </>
    );
};

export default ButtonList;