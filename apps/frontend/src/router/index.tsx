import '@/scss/main.scss';
import LandingPage from '@/views/LandingPage.tsx';
import ErrorPage from '@/ErrorPage.tsx';
import Login from '@/views/Login.tsx';
import SignUp from '@/views/SignUp.tsx';
import UserProfile from '@/views/UserProfile.tsx';
import Home from '@/views/Home.tsx';
import Header from '@/views/Header.tsx';

import { ROUTE_PATHNAME } from '@/@types/enumTypes';

export default [
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
];
