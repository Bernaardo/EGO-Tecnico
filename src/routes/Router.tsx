import React, { lazy } from 'react';
import { Navigate, RouteObject } from 'react-router-dom';
import Loadable from '../components/loader/Loadable';

const AppLayout = Loadable(lazy(() => import("../layouts/AppLayout")));
const Modelos = Loadable(lazy(() => import("../pages/modelos/Modelos")));
const FichaDeModelo = Loadable(lazy(() => import("../pages/fichaDeModelo/FichaDeModelo")));
const Router = () =>{
    const router: RouteObject [] = [
        {
            path: '/',
            element: <AppLayout />,
            children: [
              { path: '/', element: <Navigate to="/modelos" /> },
              { path: '/modelos', element: <Modelos />},
              { path: '/ficha-de-modelo/:id', element: <FichaDeModelo />},
              { path: '*', element: <Navigate to="/" /> },
            ],
          },
    ]
    return router;
}

export default Router;