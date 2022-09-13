import React from 'react';

import { useAppSelector } from '../../app/hooks';

import ButtonTemplate from './ButtonTemplate';

import './button.scss';

// /. imports

interface propTypes {
    isError: boolean
}

// /. interfaces

const ButtonList: React.FC<propTypes> = ({ isError }) => {
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
                        isError={isError}
                    />
                );
            })}
        </>
    );
};

export default ButtonList;