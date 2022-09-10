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
            {buttons.map(button => {
                return (
                    <ButtonTemplate
                        key={button.id}
                        {...button}

                        isDataLoading={isDataLoading}
                    />
                );
            })}
        </>
    );
};

export default ButtonList;