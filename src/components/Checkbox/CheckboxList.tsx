import React from 'react';

import { useAppSelector } from '../../app/hooks';

import CheckboxTemplate from './CheckboxTemplate';

import './checkbox.scss';

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
    <ul className="checkbox-list">
      {checkboxInputs.map(input => {
        return (
          <CheckboxTemplate
            key={input.id}
            {...input}

            isDataLoading={isDataLoading}
            isError={isError}
            isCardsEmpty={isCardsEmpty}

            selectTemplates={selectTemplates}
            currentSortOpt={currentSortOpt}
          />
        );
      })}
    </ul>
  );
};

export default CheckboxList;
