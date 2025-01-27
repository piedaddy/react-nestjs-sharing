import '@/scss/main.scss';
import LandingPage from '@/views/LandingPage.tsx';
import ErrorPage from '@/ErrorPage.tsx';
import Login from '@/views/Login.tsx';
import SignUp from '@/views/SignUp.tsx';
import UserProfile from '@/views/UserProfile.tsx';
import Home from '@/views/Home.tsx';
import Inbox from '@/views/Inbox.tsx';

import { ROUTE_PATHNAME } from '@/@types/enumTypes';
import Items from '@/views/Items';
import Search from '@/views/Search';

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
  {
    path: `/${ROUTE_PATHNAME.INBOX}`,
    element: <Inbox />,
  },
  {
    path: `/${ROUTE_PATHNAME.ITEMS}`,
    element: <Items />,
  },
  {
    path: `/${ROUTE_PATHNAME.SEARCH}`,
    element: <Search />,
  },
];
