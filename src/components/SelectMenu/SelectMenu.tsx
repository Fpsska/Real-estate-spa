import React, { useEffect } from 'react';

import { useAppSelector, useAppDispatch } from '../../app/hooks';

import { selectTemplatesTypes } from '../../Types/filterSliceTypes';

import { switchSelectMenuStatus } from '../../app/slices/mainSlice';

import { setSelectTemplatesData } from '../../app/slices/filterSlice';

import SelectMenuTemplate from './SelectMenuTemplate';

import './select.scss';

// /. imports

interface SelectMenuPropTypes {
    selectTemplates: selectTemplatesTypes[];
    isActive: boolean;
}

// /. interfaces

const SelectMenu: React.FC<SelectMenuPropTypes> = (props) => {

    const {
        selectTemplates,
        isActive
    } = props;


    const { currentSortOpt } = useAppSelector(state => state.filterSlice);

    const dispatch = useAppDispatch();


    // useEffect(() => {
    //     console.log(selectTemplates)
    // }, [selectTemplates]);

    return (
        <div className={isActive ? 'zone active' : 'zone'}>
            <div className="zone__wrapper">
                {selectTemplates.map((select: any) => {
                    return (
                        <SelectMenuTemplate
                            key={select.id}
                            {...select}
                        />
                    );
                })}
            </div>
        </div>
    );
};

export default SelectMenu;