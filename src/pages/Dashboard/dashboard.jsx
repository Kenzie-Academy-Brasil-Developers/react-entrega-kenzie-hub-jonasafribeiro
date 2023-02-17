import React, { useState, useEffect } from 'react';
import { HeaderGComponent } from '../../components';
import {
    Container2,
    Container1,
    Text1,
    Text2,
    Title2,
    Main,
} from './dashboard.styled';
import { api } from '../../services/api';

export function DashboardPage() {
    const [userData, setUserData] = useState();

    useEffect(() => {
        async function getUserInfo() {
            try {
                const { data } = await api.get(
                    '/users/' +
                        JSON.parse(localStorage.getItem('@KenzieHub')).id
                );
                console.log(data);
                setUserData(data);
            } catch (e) {
                toast.error(e);
            }
        }
        getUserInfo();
    }, []);

    console.log(userData);

    return (
        <>
            <HeaderGComponent page="dashboard" buttonText="Sair" />
            <Main>
                <Container1>
                    <Title2>Olá, {userData?.name}</Title2>
                    <Text1>{userData?.course_module}</Text1>
                </Container1>
                <Container2>
                    <Title2>Que pena! Estamos em desenvolvimento</Title2>
                    <Text2>
                        Nossa aplicação está em desenvolvimento, em breve
                        teremos novidades
                    </Text2>
                </Container2>
            </Main>
        </>
    );
}
