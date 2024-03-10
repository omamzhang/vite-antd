// src/router/index.tsx
import { createBrowserRouter, Navigate } from 'react-router-dom'
import type { RouteObject } from 'react-router-dom'
import Home from '@/pages/Home'
import About from '@/pages/About'
import Todo from '@/pages/Todo'

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
        element: <Home />,
      },
      {
        path: 'about',
        element: <About />,
      },
      {
        path: 'todo',
        element: <Todo />,
      },
    ],
  },
]

const Router = createBrowserRouter(routes, {
  basename: '/',
});
export default Router;