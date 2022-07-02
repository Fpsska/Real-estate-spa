import { useAppDispatch } from '../app/hooks';

import { setCurrentProjectText } from '../app/slices/filterSlice';

// /. imports

interface propTypes {
    projectCount: number,
    isProjectsUndefined: boolean,
    isDataLoading: boolean
}

// /. interfaces

export function useProjectText() {
    const dispatch = useAppDispatch();

    const defineProjectText = (props: propTypes) => {

        const { projectCount, isProjectsUndefined, isDataLoading } = props;

        if (projectCount === 0 || isProjectsUndefined || isDataLoading) {
            dispatch(setCurrentProjectText('проектов'));
        }
        else if (projectCount === 1) {
            dispatch(setCurrentProjectText('проект'));
        }
        else if (projectCount >= 2 || projectCount <= 4) {
            dispatch(setCurrentProjectText('проекта'));
        }
        else if (projectCount >= 5) {
            dispatch(setCurrentProjectText('проектов'));
        }
    };
    return { defineProjectText };
}