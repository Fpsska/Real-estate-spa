import React from 'react';

import { useAppSelector } from '../../app/hooks';

import { IbuttonTemplates } from '../../Types/filterSliceTypes';

import ButtonTemplate from './ButtonTemplate';

import './button.scss';

// /. imports

interface propTypes {
    isError: boolean;
    isCardsEmpty: boolean;
}

// /. interfaces

const ButtonList: React.FC<propTypes> = ({ isError, isCardsEmpty }) => {
    const { isDataLoading } = useAppSelector(state => state.mainSlice);
    const { filterButtonTemplates } = useAppSelector(
        state => state.filterSlice
    );

    return (
        <div className="button-list">
            {filterButtonTemplates.map((button: IbuttonTemplates) => {
                return (
                    <ButtonTemplate
                        key={button.id}
                        {...button}
                        isDataLoading={isDataLoading}
                        isError={isError}
                        isCardsEmpty={isCardsEmpty}
                    />
                );
            })}
        </div>
    );
};

export default ButtonList;
