import { useState, useEffect } from 'react';

export function useWidthHandler(breakpoints: { [key: string]: number }): { isAllowableRes: boolean } {

    const [width, setWidth] = useState<number>(window.innerWidth);
    const [isAllowableRes, setAllowableRes] = useState<boolean>(false);

    useEffect(() => {
        const handleWindowResize = () => setWidth(window.innerWidth);

        window.addEventListener('resize', handleWindowResize);
        return () => {
            window.removeEventListener('resize', handleWindowResize);
        };
    }, []);

    useEffect(() => {
        setAllowableRes(width > breakpoints.min && width < breakpoints.max);
    }, [width, breakpoints]);

    return { isAllowableRes };
}