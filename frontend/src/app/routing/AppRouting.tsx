import { type FC } from 'react';

import { useRoutes } from 'react-router-dom';

import { appRoutes } from './appRoutes';

// /. imports

const AppRouting: FC = () => {
    return useRoutes(appRoutes);
};

export { AppRouting };
