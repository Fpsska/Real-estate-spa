import { type RouteObject } from 'react-router-dom';

import Layout from '../../components/Common/Layout';
import MainPage from '../../components/Pages/MainPage';

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
