import React from 'react';
import { BlogPage } from './pages/index';
import { MainLayout } from '../../core/layouts';

const routes = [
  {
    path: '',
    element: <MainLayout />,
    children: [
      { path: "blogs", element: <BlogPage /> }
    ],
  },
];

export default routes;
