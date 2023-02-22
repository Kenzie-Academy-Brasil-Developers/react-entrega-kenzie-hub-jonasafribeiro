import React, { useContext, useEffect } from 'react';
import { LogoGComponent } from '../../components';
import { MainGComponent } from '../../styles/styled';
import { LoginForm } from '../../components/form';
import { useNavigate } from 'react-router-dom';
import { UserContext } from '../../provider/UserContext';

export function LoginPage({ user }) {
    const navigate = useNavigate();
    useEffect(() => {
        if (user) {
            navigate('/dashboard');
        }
    }, [user]);

    const { setLogin } = useContext(UserContext);

    return (
        <>
            <MainGComponent>
                <LogoGComponent />
                <LoginForm user={user} callback={setLogin} />
            </MainGComponent>
        </>
    );
}
