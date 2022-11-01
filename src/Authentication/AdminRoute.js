import React from 'react';
import { Navigate, Outlet, useLocation } from 'react-router-dom';
import useAdmin from '../Hooks/useAdmin';

const AdminRoute = () => {
    const location = useLocation();
    const [admin] = useAdmin(true);

    if (!admin) {
        return <Navigate to='/' />
    }
    return <Outlet />;
};

export default AdminRoute;