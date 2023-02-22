import React, { useContext, useEffect } from 'react';
import { UserContext } from '../../provider/UserContext';
import { Outlet, useNavigate } from 'react-router-dom';

export const ProtectedRoutes = () => {
    const { userData } = useContext(UserContext);
    const navigate = useNavigate();
    useEffect(() => {
        console.log('navigate');
        if (!userData || !userData.loggedIn) {
            console.log('You must be logged in');
            navigate('/login');
        }
    }, []);

    return <>{userData.loggedIn ? <Outlet /> : null}</>;
};
