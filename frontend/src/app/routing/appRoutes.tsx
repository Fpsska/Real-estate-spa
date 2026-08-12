import { type RouteObject } from 'react-router-dom';

import { Layout } from '../../widgets/layout';
import { MainPage } from '../../pages/main-page';

// /. imports

export const appRoutes: RouteObject[] = [
    {
        path: '/real-estate-spa',
        element: <Layout />,
        children: [
            {
                index: true,
                element: <MainPage />
            }
        ]
    }
];
