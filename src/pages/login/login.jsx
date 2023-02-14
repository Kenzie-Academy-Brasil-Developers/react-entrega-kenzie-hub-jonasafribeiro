import React, { useEffect } from 'react';
import { LogoGComponent } from '../../components';
import { MainGComponent } from '../../styles/styled';
import { LoginForm } from '../../components/form';
import { useNavigate } from 'react-router-dom';

export function LoginPage({ user }) {
    const navigate = useNavigate();
    useEffect(() => {
        if (user) {
            navigate('/dashboard');
        }
    }, [user]);

    return (
        <>
            <MainGComponent>
                <LogoGComponent />
                <LoginForm user={user} />
            </MainGComponent>
        </>
    );
}
