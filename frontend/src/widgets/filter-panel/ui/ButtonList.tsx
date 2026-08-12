import React from 'react';

import { useAppSelector } from '../../../app/store/hooks';
import { buttonTemplates } from '../../../features/room-filter';

import { ButtonTemplate } from './ButtonTemplate';

import './button.scss';

// /. imports

interface propTypes {
    isError: boolean;
    isCardsEmpty: boolean;
}

// /. interfaces

const ButtonList: React.FC<propTypes> = ({ isError, isCardsEmpty }) => {
    const { isDataLoading } = useAppSelector((state) => state.card);
    const { selectedButtonId } = useAppSelector((state) => state.roomFilter);

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
