import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';

import { Provider } from 'react-redux';
import store from '@/store/store';

import '@/scss/main.scss';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import App from '@/App.tsx';
import LandingPage from '@/views/LandingPage.tsx';
import ErrorPage from '@/ErrorPage.tsx';
import Login from '@/views/Login.tsx';
import SignUp from '@/views/SignUp.tsx';
import UserProfile from '@/views/UserProfile.tsx';
import Home from '@/views/Home.tsx';

import './locales/i18n';

import { ROUTE_PATHNAME } from '@/@types/enumTypes';

const router = createBrowserRouter([
  {
    path: '/',
    element: <LandingPage />,
    errorElement: <ErrorPage />,
  },
  {
    path: `/${ROUTE_PATHNAME.LOGIN}`,
    element: <Login />,
  },
  {
    path: `/${ROUTE_PATHNAME.SIGN_UP}`,
    element: <SignUp />,
  },
  {
    path: `/${ROUTE_PATHNAME.USER_PROFILE}`,
    element: <UserProfile />,
  },
  {
    path: `/${ROUTE_PATHNAME.HOME}`,
    element: <Home />,
  },
]);

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
    ,
  </StrictMode>,
);
