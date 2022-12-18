import React from 'react';

import { useAppDispatch } from '../../app/hooks';

import { switchDataLoadingStatus } from '../../app/slices/mainSlice';

// /. imports

interface propTypes {
    setRefetchingStatus: (arg: boolean) => void;
}

// /. interfaces

const ButtonRefresh: React.FC<propTypes> = props => {
    const { setRefetchingStatus } = props;

    const dispatch = useAppDispatch();

    // /. hooks

    const onButtonRefetchClick = (): void => {
        setRefetchingStatus(true);
        dispatch(switchDataLoadingStatus(true));
        setTimeout(() => {
            dispatch(switchDataLoadingStatus(false));
        }, 1300);
    };

    // /. functions

    return (
        <button
            className="page__button page__button--refresh"
            onClick={onButtonRefetchClick}
        >
            <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
            >
                <path
                    d="M14 15L10 19L14 23"
                    stroke="#33363F"
                    strokeWidth="2"
                />
                <path
                    d="M18.0622 8.5C18.6766 9.56413 19 10.7712 19 12C19 13.2288 18.6766 14.4359 18.0622 15.5C17.4478 16.5641 16.5641 17.4478 15.5 18.0622C14.4359 18.6766 13.2288 19 12 19"
                    stroke="#33363F"
                    strokeWidth="2"
                    strokeLinecap="round"
                />
                <path
                    d="M10 9L14 5L10 1"
                    stroke="#33363F"
                    strokeWidth="2"
                />
                <path
                    d="M5.93782 15.5C5.32344 14.4359 5 13.2288 5 12C5 10.7712 5.32344 9.56413 5.93782 8.5C6.5522 7.43587 7.43587 6.5522 8.5 5.93782C9.56413 5.32344 10.7712 5 12 5"
                    stroke="#33363F"
                    strokeWidth="2"
                    strokeLinecap="round"
                />
            </svg>
        </button>
    );
};

export default ButtonRefresh;
