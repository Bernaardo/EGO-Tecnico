import React, { lazy } from 'react';
import { Navigate, RouteObject } from 'react-router-dom';
import Loadable from '../components/loadable/Loadable';

const AppLayout = Loadable(lazy(() => import("../layouts/AppLayout")));
const Modelos = Loadable(lazy(() => import("../pages/modelos/Modelos")));
const ServiciosYaccesorios = Loadable(lazy(() => import("../pages/servicioYaccesorios/ServiciosYaccesorios")));
const Router = () =>{
    const router: RouteObject [] = [
        {
            path: '/',
            element: <AppLayout />,
            children: [
              { path: '/', element: <Navigate to="/modelos" /> },
              { path: '/modelos', element: <Modelos />},
              { path: '/servicios-y-accesorios', element: <ServiciosYaccesorios />},
              { path: '*', element: <Navigate to="/" /> },
            ],
          },
    ]
    return router;
}

export default Router;