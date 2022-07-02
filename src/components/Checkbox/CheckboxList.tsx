import React, { useState } from 'react';

import { useAppSelector } from '../../app/hooks';

import { selectTemplateTypes } from '../../Types/filterSliceTypes';

import CheckboxTemplate from './CheckboxTemplate';

// /. imports

const CheckboxList: React.FC = () => {
  const { isDataLoading } = useAppSelector(state => state.mainSlice);
  const { checkboxInputs, selectTemplate } = useAppSelector(state => state.filterSlice);

  const [currentData] = useState<selectTemplateTypes[]>(selectTemplate);

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
          />
        );
      })}
    </>
  );
};

export default CheckboxList;
