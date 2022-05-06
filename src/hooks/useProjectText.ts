import { useDispatch } from 'react-redux';

import { setCurrentProjectText } from '../app/slices/filterSlice';

// /. imports

interface propTypes {
    projectCount: number,
    isProjectsUndefined: boolean,
    isDataLoading: boolean
}

// /. interfaces

export function useProjectText() {
    const dispatch = useDispatch();

    const defineProjectText = (props: propTypes) => {

        const { projectCount, isProjectsUndefined, isDataLoading } = props;

        if (projectCount >= 5 || projectCount === 0 || isProjectsUndefined || isDataLoading) {
            dispatch(setCurrentProjectText('проектов'));
        }
        if (projectCount >= 2 || projectCount <= 4) {
            dispatch(setCurrentProjectText('проекта'));
        }
        if (projectCount === 1) {
            dispatch(setCurrentProjectText('проект'));
        }
        
    };
    return { defineProjectText };
}