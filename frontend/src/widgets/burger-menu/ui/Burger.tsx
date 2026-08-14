import React, { useEffect, useRef } from 'react';

import { useAppSelector } from '../../../app/store/hooks';
import { useBurgerMenuActions } from '../../../features/toggle-burger-menu';

import { Logo, NavList } from '../../../shared/ui';

import './burger.scss';

// /. imports

const Burger: React.FC = () => {
    const isBurgerOpened = useAppSelector(
        (state) => state.burgerMenu.isBurgerOpened
    );

    const { switchBurgerOpenedStatus } = useBurgerMenuActions();

    const burgerRef = useRef<HTMLDivElement | null>(null);

    useEffect(() => {
        const keyHandler = (e: any): void => {
            if (isBurgerOpened && e.code === 'Escape') {
                switchBurgerOpenedStatus(false);
            }
        };

        const areaHandler = (e: any): void => {
            const validModalArea =
                e.target === burgerRef.current ||
                burgerRef.current?.contains(e.target);
            const validElements = e.target.closest?.('.burger-menu');
            if (isBurgerOpened && !validModalArea && !validElements) {
                switchBurgerOpenedStatus(false);
            }
        };

        document.addEventListener('keydown', keyHandler);
        document.addEventListener('click', areaHandler);
        return () => {
            document.removeEventListener('click', areaHandler);
            document.removeEventListener('keydown', keyHandler);
        };
    }, [isBurgerOpened, switchBurgerOpenedStatus]);

    //
    return (
        <div
            className={isBurgerOpened ? 'burger opened' : 'burger'}
            ref={burgerRef}
        >
            <div className="burger__wrapper">
                <Logo role={'burger__logo'} />
                <NavList role={'burger__nav'} />
            </div>
        </div>
    );
};

export { Burger };
