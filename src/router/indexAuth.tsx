/*
 * @Author: zyl omamzhange@gmail.com
 * @Date: 2024-03-12 12:01:15
 * @LastEditors: zyl omamzhange@gmail.com
 * @LastEditTime: 2024-03-13 22:32:03
 * @FilePath: /vite-antd/src/router/index.tsx
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
// src/router/index.tsx
import { lazy } from 'react';
import { createBrowserRouter, Navigate } from 'react-router-dom'
import type { RouteObject } from 'react-router-dom'
import lazyLoader from './lazyLoader'
// import path from 'path';

const Home = lazy(() => import('@/pages/Home'));
const About = lazy(() => import('@/pages/About'));
const Todo = lazy(() => import('@/pages/Todo'));
const Login = lazy(() => import('@/pages/Login'));

export const BusinessBasePath = `/dm`
export const BusinessBaseHomePath = `${BusinessBasePath}/home`;
export const BusinessPagesMap = {
  Home: {
    label: '主页',
    path: `${BusinessBasePath}/home`,
    element: lazyLoader(Home),
  },
  About : {
    label: '关于',
    path: `${BusinessBasePath}/about`,
    element: lazyLoader(About),
  },
}
export const BusinessPagesPath = Object.values(BusinessPagesMap);
export const BusinessPages = BusinessPagesPath.map(({ path, element }) => ({ path, element}));

export const AuthPagesMap = {
  Login: {
    label: '登录页',
    path: `/login`,
    element: lazyLoader(Login),
  },
  Todo: {
    label: '搭建中',
    path: `todo`,
    element: lazyLoader(Todo),
  },
}
export const AuthPagesPath = Object.values(BusinessPagesMap);
export const AuthPages = AuthPagesPath.map(({ path, element }) => ({ path, element}));

const Layout = lazy(() => import('@/components/Layout'));

const routes: RouteObject[] = [
  {
    path: `/`,
    children: [
      {
        index: true,
        element: <Navigate to={BusinessBaseHomePath} replace />,
      },
      {
        path: `/login`,
        element: lazyLoader(Login),
      },
      {
        path: BusinessBasePath,
        element: lazyLoader(Layout),
        children: BusinessPages
      },
    ],
  },
]

const Router = createBrowserRouter(routes, {
  basename: '/',
});
export default Router;