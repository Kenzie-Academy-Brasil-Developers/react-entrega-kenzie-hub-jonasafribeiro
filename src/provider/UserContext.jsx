import React from 'react';
import { createContext, useEffect, useState } from 'react';
import { api } from '../services/api';
import { toast } from 'react-toastify';

export const UserContext = createContext({});

export const UserProvider = ({ children }) => {
    const [userData, setUserData] = useState('');
    const [login, setLogin] = useState('');
    useEffect(() => {
        async function getUserInfo() {
            try {
                const { data } = await api.get(
                    '/users/' +
                        JSON.parse(localStorage.getItem('@KenzieHub')).id
                );
                setUserData({ ...data, loggedIn: true });
            } catch (e) {
                setUserData({ loggedIn: false });
                toast.error(e);
            }
        }
        getUserInfo();
    }, [login]);
    return (
        <UserContext.Provider value={{ userData, setUserData, setLogin }}>
            {children}
        </UserContext.Provider>
    );
};
