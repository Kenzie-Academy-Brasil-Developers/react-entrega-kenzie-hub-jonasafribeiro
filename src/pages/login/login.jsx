import React from 'react';
import { LogoGComponent } from '../../components';
import { MainGComponent } from '../../styles/styled';
import { LoginForm } from '../../components/form';

export function LoginPage() {
    return (
        <>
            <MainGComponent>
                <LogoGComponent />
                <LoginForm />
            </MainGComponent>
        </>
    );
}
