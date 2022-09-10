import React from 'react';

import { useAppSelector } from '../../app/hooks';


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
  const { checkboxInputs, selectTemplates, currentSortOpt } = useAppSelector(state => state.filterSlice);

  return (
    <>
      {checkboxInputs.map(item => {
        return (
          <CheckboxTemplate
            key={item.id}
            id={item.id}
            isSelected={item.isSelected}
            labelText={item.labelText}
            isDataLoading={isDataLoading}
            isError={isError}
            isCardsEmpty={isCardsEmpty}

            selectTemplates={selectTemplates}
            currentSortOpt={currentSortOpt}
          />
        );
      })}
    </>
  );
};

export default CheckboxList;
