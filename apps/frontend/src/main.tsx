import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';

import { Provider } from 'react-redux';
import store from '@/store/store';

import '@/scss/main.scss';
import 'tailwindcss';

import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import App from '@/App.tsx';
import routes from '@/router/index.tsx';

import './locales/i18n';

const router = createBrowserRouter(routes);

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Provider store={store}>
      <RouterProvider router={router} />
      {/* <App /> */}
    </Provider>
  </StrictMode>,
);
