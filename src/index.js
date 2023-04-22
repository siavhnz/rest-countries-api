import React from 'react';
import ReactDOM from 'react-dom/client';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import Homepage from "./pages";
import Detail from './pages/detail';
import ErrorPage from './pages/error';
import '../src/assets/css/preflight.css';
import '../src/assets/css/index.css';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Homepage />,
    errorElement: <ErrorPage />
  },
  {
    path: "country/:alpha3Code",
    element: <Detail />
  }
])

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router}></RouterProvider>
  </React.StrictMode>
);

