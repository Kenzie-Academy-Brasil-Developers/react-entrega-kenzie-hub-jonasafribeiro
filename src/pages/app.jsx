import React from 'react';
import 'react-toastify/ReactToastify.css';
import { Routes, Route } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import { GlobalStyle } from '../styles/globalStyles';
import { LoginPage } from './login/login';
import { RegisterPage } from './register/register';
import { DashboardPage } from './Dashboard/dashboard';
import { useEffect } from 'react';
import { handleToken } from '../services/api';

export function App() {
    let user;

    function testIfLogged() {
        let localData = localStorage.getItem('@KenzieHub');
        localData = localData ? JSON.parse(localData) : false;
        console.log(localData);
        localData
            ? handleToken(localData.id)
                ? (user = localData)
                : null
            : null;
    }

    useEffect(() => {
        testIfLogged();
    }, [user]);

    console.log(user);

    return (
        <>
            <GlobalStyle />

            <Routes>
                <Route path="/login" element={<LoginPage user={user} />} />
                <Route path="/register" element={<RegisterPage />} />
                <Route
                    path="/dashboard"
                    element={<DashboardPage user={user} />}
                />
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
