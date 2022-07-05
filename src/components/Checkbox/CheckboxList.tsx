import React, { useState, useEffect } from 'react';

import { useAppSelector } from '../../app/hooks';

import { cardsTypes, selectTemplatesTypes } from '../../Types/filterSliceTypes';

import CheckboxTemplate from './CheckboxTemplate';

// /. imports

interface CheckboxListPropTypes {
  isError: any
}

// /. interfaces

const CheckboxList: React.FC<CheckboxListPropTypes> = (props) => {

  const { isError } = props;

  const { isDataLoading } = useAppSelector(state => state.mainSlice);
  const { checkboxInputs, cards } = useAppSelector(state => state.filterSlice);

  const [currentData, setCurrentData] = useState<any>(cards.map(item => item.selectTemplates));

  useEffect(() => {
    setCurrentData(cards);
  }, [cards]);

  return (
    <>
      {checkboxInputs.map(item => {
        return (
          <CheckboxTemplate
            key={item.id}
            id={item.id}
            isSelected={item.isSelected}
            labelText={item.labelText}
            data={currentData}
            isDataLoading={isDataLoading}
            isError={isError}
          />
        );
      })}
    </>
  );
};

export default CheckboxList;
