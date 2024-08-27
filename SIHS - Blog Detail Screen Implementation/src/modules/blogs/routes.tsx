import React from 'react';
import { BlogPage } from './pages/index';
import { MainLayout } from '../../core/layouts';
import { BlogDetailPage} from './pages/index'

const routes = [
  {
    path: '',
    element: <MainLayout />,
    children: [
      { path: "blogs", element: <BlogPage /> },
      { path: "/blogs/:id", element: <BlogDetailPage/>}
    ],
  },
];

export default routes;
