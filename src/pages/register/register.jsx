import React from 'react';
import { HeaderGComponent } from '../../components';

import { Container } from './register.styled';
import { RegisterForm } from '../../components/form';

export function RegisterPage() {
    return (
        <Container>
            <HeaderGComponent buttonText="Voltar" page="register" />
            <RegisterForm />
        </Container>
    );
}
