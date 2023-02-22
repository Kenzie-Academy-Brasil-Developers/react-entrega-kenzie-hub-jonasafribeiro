import React, { useContext, useEffect } from 'react';
import { UserContext } from '../../provider/UserContext';
import { Outlet, useNavigate } from 'react-router-dom';

export const ProtectedRoutes = () => {
    const { userData } = useContext(UserContext);
    const navigate = useNavigate();
    useEffect(() => {
        if (!userData || !userData.loggedIn) {
            navigate('/login');
        }
    }, []);

    return <>{userData.loggedIn ? <Outlet /> : null}</>;
};
