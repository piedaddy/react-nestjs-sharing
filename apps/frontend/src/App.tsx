import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';

import { Provider } from 'react-redux';
import store from '@/store/store';

import '@/scss/main.scss';
import {
  createBrowserRouter,
  RouterProvider,
  useLocation,
} from 'react-router-dom';

import Header from '@/views/Header.tsx';
import routes from '@/router/index.tsx';
const router = createBrowserRouter(routes);

export default function App() {
  // const { pathname } = useLocation();

  return (
    <>
      {/* {pathname !== '/' && <Header />} */}
      <RouterProvider router={router} />
    </>
  );
}
