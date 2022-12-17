import React, { useEffect, useRef } from 'react';

import { AiOutlineSearch } from 'react-icons/ai';

import { useAppSelector, useAppDispatch } from '../../app/hooks';

import {
    setCurrentMinPrice,
    setCurrentMaxPrice,
    setCurrentInputRangeMinValue,
    setCurrentInputRangeMaxValue
} from '../../app/slices/inputRangeSlice';

import { useStartPrice } from '../../hooks/useStartPrice';
import { useEndPrice } from '../../hooks/useEndPrice';
import { useRoundValue } from '../../hooks/useRoundValue';

import { scrollToElement } from '../../helpers/scrollToElement';
// import { declinateByNum } from '../../helpers/declinateByNumber';

import ButtonList from '../Button/ButtonList';
import CheckboxList from '../Checkbox/CheckboxList';

import './filter.scss';

// /. imports

interface propTypes {
    enteredSearchValue: string;
    setEnteredSearchValue: (arg: string) => void;
    isError: any;
    isCardsEmpty: boolean;
}

// /. interfaces

const Filter: React.FC<propTypes> = props => {
    const { enteredSearchValue, setEnteredSearchValue, isError, isCardsEmpty } =
        props;

    const { isDataLoading } = useAppSelector(state => state.mainSlice);
    const { projectCount, projectText } = useAppSelector(
        state => state.filterSlice
    );
    const {
        inputRangeMinValue,
        inputRangeMaxValue,
        priceGap,
        inputRangeTotal,
        priceMinCounter,
        priceMaxCounter
    } = useAppSelector(state => state.inputRangeSlice);

    const inputRangeMin = useRef<HTMLInputElement>(null!);
    const inputRangeMax = useRef<HTMLInputElement>(null!);
    const progressRef = useRef<HTMLDivElement>(null!);
    const inputPriceMin = useRef<HTMLInputElement>(null!);
    const inputPriceMax = useRef<HTMLInputElement>(null!);
    const filterRef = useRef<HTMLFormElement>(null!);

    const dispatch = useAppDispatch();

    const defineStartPrice = useStartPrice();
    const defineEndPrice = useEndPrice();
    const defineRoundedNumber = useRoundValue();

    const scrollTo = scrollToElement();

    // /. hooks

    const inputRangeMinHandler = (
        e: React.ChangeEvent<HTMLInputElement>
    ): void => {
        const minValue = +e.target.value;
        inputPriceMin.current.value = '';
        dispatch(setCurrentInputRangeMinValue(minValue));
        dispatch(setCurrentMinPrice(minValue));
        if (
            +inputRangeMax.current.value - +inputRangeMin.current.value <
            priceGap
        ) {
            dispatch(
                setCurrentInputRangeMinValue(inputRangeMaxValue - priceGap)
            );
        } else {
            progressRef.current.style.left =
                (minValue / +inputRangeMin.current.max) * 100 + '%';
        }
    };

    const inputRangeMaxHandler = (
        e: React.ChangeEvent<HTMLInputElement>
    ): void => {
        const maxValue = +e.target.value;
        inputPriceMax.current.value = '';
        dispatch(setCurrentInputRangeMaxValue(maxValue));
        dispatch(setCurrentMaxPrice(maxValue));
        if (
            +inputRangeMax.current.value - +inputRangeMin.current.value <
            priceGap
        ) {
            dispatch(
                setCurrentInputRangeMaxValue(inputRangeMinValue + priceGap)
            );
        } else {
            progressRef.current.style.right =
                100 - (maxValue / +inputRangeMax.current.max) * 100 + '%';
        }
    };

    const inputNumMinHandler = (
        e: React.ChangeEvent<HTMLInputElement>
    ): void => {
        // MIN NUMBER INPUT
        const inputMinValue = +e.target.value.replace(/[^0-9]/g, '');
        defineStartPrice({
            inputMinValue,
            inputRangeMaxValue,
            inputRangeTotal,
            priceGap
        });
    };

    const inputNumMaxHandler = (
        e: React.ChangeEvent<HTMLInputElement>
    ): void => {
        // MAX NUMBER INPUT
        const inputMaxValue = +e.target.value.replace(/[^0-9]/g, '');
        defineEndPrice({
            inputMaxValue,
            inputRangeMinValue,
            inputRangeTotal,
            priceGap
        });
    };

    // /. functions

    useEffect(() => {
        progressRef.current.style.left =
            (inputRangeMinValue / parseInt(inputRangeMin.current.max)) * 100 +
            '%';
        progressRef.current.style.right =
            100 -
            (inputRangeMaxValue / parseInt(inputRangeMax.current.max)) * 100 +
            '%';
        defineRoundedNumber({
            inputRangeMinValue,
            inputRangeMaxValue,
            inputRangeTotal
        });
    }, [inputRangeMinValue, inputRangeMaxValue, inputRangeTotal]);

    useEffect(() => {
        // handle animation for in inputRangeMax

        const addClassForInputRangeMax = (): void => {
            inputRangeMax.current.classList.add('active');
        };

        const removeClassForInputRangeMax = (): void => {
            inputRangeMax.current.classList.remove('active');
        };

        inputRangeMax.current.addEventListener(
            'mouseover',
            addClassForInputRangeMax
        );
        inputRangeMax.current.addEventListener(
            'mouseout',
            removeClassForInputRangeMax
        );
        return () => {
            inputRangeMax.current?.removeEventListener(
                'mouseover',
                addClassForInputRangeMax
            );
            inputRangeMax.current?.removeEventListener(
                'mouseout',
                removeClassForInputRangeMax
            );
        };
    }, []);

    // /. effects

    return (
        <form
            ref={filterRef}
            className="filter"
            onSubmit={e => e.preventDefault()}
        >
            <div className="filter__wrapper">
                <fieldset className="filter__group filter__group--layouts">
                    <legend className="filter__legend">Apartment layout</legend>
                    <div className="filter__buttons">
                        <ButtonList
                            isError={isError}
                            isCardsEmpty={isCardsEmpty}
                        />
                    </div>
                </fieldset>

                <fieldset className="filter__group filter__group--price">
                    <legend className="filter__legend">Apartment price</legend>
                    <input
                        className="filter__input filter__input--price"
                        ref={inputPriceMin}
                        onChange={inputNumMinHandler}
                        onKeyDown={e => e.key === 'e' && e.preventDefault()}
                        type="number"
                        placeholder="Starting price 1,45 million rubles"
                        disabled={isDataLoading || isError || isCardsEmpty}
                    />
                    <input
                        className="filter__input filter__input--price"
                        ref={inputPriceMax}
                        onChange={inputNumMaxHandler}
                        onKeyDown={e => e.key === 'e' && e.preventDefault()}
                        type="number"
                        placeholder="Final price 20 million rubles"
                        disabled={isDataLoading || isError || isCardsEmpty}
                    />
                    {/*  */}
                    <div className="filter__slider">
                        <div className="slider">
                            <div
                                className="slider__progress"
                                ref={progressRef}
                            ></div>
                        </div>
                    </div>
                    <div className="filter__range">
                        <div className="price-range">
                            <div className="price-range__controls">
                                <input
                                    className="price-range__input price-range__input--min"
                                    type="range"
                                    ref={inputRangeMin}
                                    onChange={inputRangeMinHandler}
                                    max={inputRangeTotal}
                                    value={inputRangeMinValue}
                                    disabled={
                                        isDataLoading || isError || isCardsEmpty
                                    }
                                    min="0"
                                    step="100"
                                />
                                <input
                                    className="price-range__input price-range__input--max"
                                    type="range"
                                    ref={inputRangeMax}
                                    onChange={inputRangeMaxHandler}
                                    max={inputRangeTotal}
                                    value={inputRangeMaxValue}
                                    disabled={
                                        isDataLoading || isError || isCardsEmpty
                                    }
                                    min="0"
                                    step="100"
                                />
                            </div>
                            <div className="price-range__indicators">
                                <span className="price-range__counter price-range__counter--min">{`${priceMinCounter} mil. ₽`}</span>
                                <span className="price-range__counter price-range__counter--max">{`${priceMaxCounter} mil. ₽`}</span>
                            </div>
                        </div>
                    </div>
                    {/*  */}
                </fieldset>

                <fieldset className="filter__group filter__group--rental">
                    <legend className="filter__legend">
                        Apartment rental period
                    </legend>
                    <div className="filter__checkboxes">
                        <CheckboxList
                            isError={isError}
                            isCardsEmpty={isCardsEmpty}
                        />
                    </div>
                </fieldset>

                <fieldset className="filter__group filter__group--area">
                    <legend className="filter__legend">Subway area</legend>
                    <input
                        className="filter__input filter__input--area"
                        type="text"
                        placeholder="Subway area"
                        value={enteredSearchValue}
                        onChange={e =>
                            setEnteredSearchValue(
                                e.target.value.replace(/[^a-zA-Z\s]/g, '')
                            )
                        }
                        disabled={isDataLoading || isError} //  || isCardsEmpty
                    />
                    <AiOutlineSearch size={18} />
                </fieldset>
            </div>

            <div className="filter__group filter__group--submit">
                <span className="filter__count">{`${projectCount} ${projectText}`}</span>
                <button
                    className="button button--submit"
                    onClick={() =>
                        scrollTo(document.querySelector('.page__list'))
                    }
                    type="submit"
                >
                    Show
                </button>
            </div>
        </form>
    );
};

export default Filter;
