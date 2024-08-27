import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { RootState } from "./store";

export const rootApi = createApi({
    baseQuery: fetchBaseQuery({
        baseUrl: 'https://apis.sihs.org.pk/api',
        prepareHeaders: (headers, {getState}) => {
            const token = (getState() as RootState).auth?.token !== undefined ? (getState() as RootState).auth?.token : '';
            if (token) {
                headers.set('Authorization', `Bearer ${token}`);
            }
            return headers;
        },
    }),
    refetchOnReconnect: true,
    tagTypes: [
        'departments',
        'department-doctors',
        'appointment-dates',
        'appointment-list',
        'report-link',
        'reports-list',
        'patient-list',
        'set-patient',
        'slider-list',
        'dashboard-items',
        'about-us',
        'hospital-encounters',
    ],
    endpoints: () => ({}),
});
