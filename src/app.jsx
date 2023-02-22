import React, { useContext } from 'react';
import 'react-toastify/ReactToastify.css';
import { Routes, Route, useNavigate } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import { GlobalStyle } from './styles/globalStyles';
import { LoginPage } from './pages/login/login';
import { RegisterPage } from './pages/register/register';
import { DashboardPage } from './pages/Dashboard/dashboard';
import { useEffect } from 'react';
import { handleToken } from './services/api';
import { UserContext } from './provider/UserContext';
import { ProtectedRoutes } from './pages/ProtectedRoutes';

export function App() {
    const { setUserData } = useContext(UserContext);
    const navigate = useNavigate();

    let user;

    function testIfLogged() {
        let localData = localStorage.getItem('@KenzieHub');
        localData = localData ? JSON.parse(localData) : false;
        localData
            ? handleToken(localData.id)
                ? ((user = localData),
                  setUserData({ loggedIn: true }),
                  navigate('/dashboard'))
                : null
            : null;
    }

    useEffect(() => {
        testIfLogged();
    }, [user]);

    return (
        <>
            <GlobalStyle />

            <Routes>
                <Route path="/login" element={<LoginPage user={user} />} />
                <Route path="/register" element={<RegisterPage />} />
                <Route path="/dashboard" element={<ProtectedRoutes />}>
                    <Route
                        path="/dashboard"
                        element={<DashboardPage user={user} />}
                    />
                </Route>
                <Route path="*" element={<LoginPage user={user} />} />
            </Routes>

            <ToastContainer
                position="top-right"
                autoClose={5000}
                hideProgressBar={false}
                newestOnTop
                closeOnClick
                rtl={false}
                pauseOnFocusLoss={false}
                draggable
                pauseOnHover
                theme="dark"
            />
        </>
    );
}
