import React, { useState, useEffect } from 'react';

import { useAppSelector, useAppDispatch } from '../../app/hooks';

import { IselectTemplates} from '../../Types/filterSliceTypes';

import { switchSelectMenuStatus } from '../../app/slices/mainSlice';

import { setSelectTemplatesData } from '../../app/slices/filterSlice';

import { filterByQuartal } from '../../helpers/filterByQuartal';

import SelectMenuTemplate from './SelectMenuTemplate';

import './select.scss';

// /. imports

interface propTypes {
    selectTemplates: IselectTemplates[];
    isActive: boolean;
}

// /. interfaces

const SelectMenu: React.FC<propTypes> = (props) => {

    const {
        selectTemplates,
        isActive
    } = props;


    const { currentSortOpt } = useAppSelector(state => state.filterSlice);

    const [filteredSelectData, setFilteredSelectData] = useState<IselectTemplates[]>(selectTemplates);

    const dispatch = useAppDispatch();

    useEffect(() => {
        setFilteredSelectData(selectTemplates);
        console.log(selectTemplates)
    }, [selectTemplates]);

    useEffect(() => {
        setFilteredSelectData(filterByQuartal(filteredSelectData, currentSortOpt));
    }, [currentSortOpt]);

    return (
        <div className={isActive ? 'zone active' : 'zone'}>
            <div className="zone__wrapper">
                {filteredSelectData.map((select: IselectTemplates) => {
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