// src/router/index.tsx
import { lazy } from 'react';
import { createBrowserRouter, Navigate } from 'react-router-dom'
import type { RouteObject } from 'react-router-dom'
import lazyLoader from './lazyLoader'

const Home = lazy(() => import('@/pages/Home'));
const About = lazy(() => import('@/pages/About'));
const Todo = lazy(() => import('@/pages/Todo'));

const routes: RouteObject[] = [
  {
    path: '/',
    children: [
      {
        index: true,
        element: <Navigate to="/home" replace />,
      },
      {
        path: 'home',
        element: lazyLoader(Home),
      },
      {
        path: 'about',
        element: lazyLoader(About),
      },
      {
        path: 'todo',
        element: lazyLoader(Todo),
      },
    ],
  },
]

const Router = createBrowserRouter(routes, {
  basename: '/',
});
export default Router;