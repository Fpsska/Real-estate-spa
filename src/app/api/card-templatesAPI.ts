import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

// /. imports

export const cardTemplatesAPI = createApi({
    reducerPath: 'cardTemplatesAPI',
    baseQuery: fetchBaseQuery({
        baseUrl: 'https://cake-labs-backend-9d4ohnaie-fpsska.vercel.app'
    }),
    endpoints: (build) => ({
        getCardTemplates: build.query({
            query: () => ({
                url: '/card-templates'
            })
        })
    })
});

export const { useGetCardTemplatesQuery } = cardTemplatesAPI;
