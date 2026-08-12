import React from 'react';

import { useAppSelector } from '../../../store/hooks';

import { buttonTemplates } from '../model/data';

import { ButtonTemplate } from './ButtonTemplate';

import './button.scss';

// /. imports

interface propTypes {
    isError: boolean;
    isCardsEmpty: boolean;
}

// /. interfaces

const ButtonList: React.FC<propTypes> = ({ isError, isCardsEmpty }) => {
    const { isDataLoading } = useAppSelector((state) => state.mainSlice);
    const { selectedButtonId } = useAppSelector((state) => state.filterSlice);

    return (
        <div className="button-list">
            {buttonTemplates.map((button) => {
                return (
                    <ButtonTemplate
                        key={button.id}
                        id={button.id}
                        text={button.text}
                        isButtonSelected={button.id === selectedButtonId}
                        isDataLoading={isDataLoading}
                        isError={isError}
                        isCardsEmpty={isCardsEmpty}
                    />
                );
            })}
        </div>
    );
};

export { ButtonList };
