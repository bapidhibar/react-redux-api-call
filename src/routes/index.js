import { Navigate, useRoutes, useLocation } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import Table from '../pages/Table';

export default function Router() {
    return useRoutes([
        {
        path: 'app',
        children: [
          { path: '/table', element: <Table /> }
        ]
             
    }
  ]);
};