import { useMemo } from 'react';

import {
    type TypedUseSelectorHook,
    useDispatch,
    useSelector
} from 'react-redux';
import {
    bindActionCreators,
    type ActionCreatorsMapObject
} from '@reduxjs/toolkit';

import type { RootState, AppDispatch } from './store';

// /. imports

/**
 * Use throughout your app instead of plain `useDispatch` and `useSelector`
 */
export const useAppDispatch = () => useDispatch<AppDispatch>();
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;

/**
 * Binds a map of action creators to `dispatch`, so you can call them
 * directly instead of writing `dispatch(actionCreator(...))` every time.
 *
 * Pass a stable object (defined at module scope, outside the component)
 * so the bindings aren't recreated on every render.
 */
export function useDispatchedActions<T extends ActionCreatorsMapObject>(
    actions: T
): T {
    const dispatch = useAppDispatch();

    return useMemo(
        () => bindActionCreators(actions, dispatch),
        [dispatch, actions]
    );
}
