import React, { useState } from 'react';
import { useSelector } from 'react-redux';

import { RootState } from '../../app/store';
import { selectTemplateTypes } from '../../Types/filterSliceTypes';

import CheckboxTemplate from './CheckboxTemplate';

// /. imports

const CheckboxList: React.FC = () => {
  const { isDataLoading } = useSelector((state: RootState) => state.mainSlice);
  const { checkboxInputs, selectTemplate } = useSelector((state: RootState) => state.filterSlice);
  // 
  const [filteredData] = useState<selectTemplateTypes[]>(selectTemplate);
  //
  return (
    <>
      {checkboxInputs.map(item => {
        return (
          <CheckboxTemplate
            key={item.id}
            id={item.id}
            isSelected={item.isSelected}
            labelText={item.labelText}
            filteredData={filteredData}
            isDataLoading={isDataLoading}
          />
        );
      })}
    </>
  );
};

export default CheckboxList;
