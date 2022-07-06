import React, { useState, useEffect } from 'react';

import { useAppSelector } from '../../app/hooks';

import { cardsTypes, selectTemplatesTypes } from '../../Types/filterSliceTypes';

import CheckboxTemplate from './CheckboxTemplate';

// /. imports

interface CheckboxListPropTypes {
  isError: any,
  isCardsEmpty: boolean
}

// /. interfaces

const CheckboxList: React.FC<CheckboxListPropTypes> = (props) => {

  const { isError, isCardsEmpty } = props;

  const { isDataLoading } = useAppSelector(state => state.mainSlice);
  const { checkboxInputs, cards } = useAppSelector(state => state.filterSlice);

  const [currentData, setCurrentData] = useState<any>([]);

  // useEffect(() => {
  //   // setCurrentData(cards.map(item => item.selectTemplates.map(item => item)));
  //   cards.map(item => item.selectTemplates.map(item => setCurrentData(item)));
  // }, [cards]);

  return (
    <>
      {checkboxInputs.map(item => {
        return (
          <CheckboxTemplate
            key={item.id}
            id={item.id}
            isSelected={item.isSelected}
            labelText={item.labelText}
            data={cards}
            isDataLoading={isDataLoading}
            isError={isError}
            isCardsEmpty={isCardsEmpty}
          />
        );
      })}
    </>
  );
};

export default CheckboxList;
