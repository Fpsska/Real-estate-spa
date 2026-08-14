import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

import { Icards } from '../model/types';

// /. imports

export const cardTemplatesAPI = createApi({
    reducerPath: 'cardTemplatesAPI',
    baseQuery: fetchBaseQuery({
        baseUrl: 'https://cake-labs-backend.vercel.app/api'
    }),
    endpoints: (build) => ({
        getCardTemplates: build.query<Icards[], void>({
            query: () => ({
                url: 'card-templates'
            })
        })
    })
});

export const { useGetCardTemplatesQuery } = cardTemplatesAPI;
