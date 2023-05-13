import React from 'react';
import ReactDOM from 'react-dom/client';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import Homepage from "./pages/home";
import Detail from './pages/detail';
import ErrorPage from './pages/error';
import '../src/assets/css/preflight.css';
import '../src/assets/css/index.css';

import { loadAllCountries } from './store/loaders/home';
import { loadCountry } from './store/loaders/detail';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Homepage />,
    errorElement: <ErrorPage />,
    loader: loadAllCountries
  },
  {
    path: "country/:name",
    element: <Detail />,
    errorElement: <ErrorPage />,
    loader: loadCountry
  }
])

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router}></RouterProvider>
  </React.StrictMode>
);

