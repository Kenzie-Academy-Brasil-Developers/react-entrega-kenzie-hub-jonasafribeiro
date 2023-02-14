import React from 'react';
import 'react-toastify/ReactToastify.css';
import { Routes, Route } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import { GlobalStyle } from '../styles/globalStyles';
import { LoginPage } from './login/login';
import { RegisterPage } from './register/register';
import { DashboardPage } from './Dashboard/dashboard';
import { useState } from 'react';
import { useEffect } from 'react';

export function App() {
    const [isLogged, setIsLogged] = useState(false);

    useEffect(function () {
        let localData = localStorage.getItem('@KenzieHub');
        localData = localData ? JSON.parse(localData) : false;
        localData ? setIsLogged(true) : null;
    }, []);

    return (
        <>
            <GlobalStyle />

            <Routes>
                <Route
                    path="/login"
                    element={
                        <LoginPage
                            setIsLogged={setIsLogged}
                            isLogged={isLogged}
                        />
                    }
                />
                <Route path="/register" element={<RegisterPage />} />
                <Route
                    path="/dashboard"
                    element={
                        <DashboardPage
                            setIsLogged={setIsLogged}
                            isLogged={isLogged}
                        />
                    }
                />
                <Route
                    path="*"
                    element={
                        <LoginPage
                            setIsLogged={setIsLogged}
                            isLogged={isLogged}
                        />
                    }
                />
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
