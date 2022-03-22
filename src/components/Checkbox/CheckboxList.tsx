import React, { useMemo, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  setFilteredQuartalData,
} from "../../app/mainSlice";
import { RootState } from "../../app/store";

const CheckboxList: React.FC = () => {
  const { checkboxInputs, selectTemplate, isDataLoading } = useSelector((state: RootState) => state.mainSlice);
  const [filteredData] = useState(selectTemplate)
  const dispatch = useDispatch();
  const input = useRef<HTMLLabelElement>(null!);
  //
  const list = useMemo(
    () =>
      checkboxInputs.map((item) => {
        // 
        const dataFilter = (e: any): void => {
          dispatch(setFilteredQuartalData({ data: filteredData, id: item.id, status: !item.isSelected, attribute: e.target.attributes["data-quartal"].value }))
        }
        // 
        return (
          <label className="filter__label" key={item.id} ref={input}>
            <input
              type="checkbox"
              className="filter__input filter__input--checkbox"
              data-quartal={item.labelText}
              name="quarter"
              onChange={dataFilter}
              checked={item.isSelected ? true : false}
              disabled={isDataLoading ? true : false}
            />
            <span className="filter__checkbox"></span>
            {item.labelText}
          </label>
        );
      }),
    [checkboxInputs, isDataLoading]
  );

  return <>{list}</>;
};

export default CheckboxList;
