import React, { useContext } from 'react';
import { HeaderGComponent } from '../../components';
import {
    Container2,
    Container1,
    Text1,
    Text2,
    Title2,
    Main,
} from './dashboard.styled';
import { UserContext } from '../../provider/UserContext';

export function DashboardPage() {
    const { userData, setUserData } = useContext(UserContext);

    return (
        <>
            <HeaderGComponent
                logOut={setUserData}
                page="dashboard"
                buttonText="Sair"
            />
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
