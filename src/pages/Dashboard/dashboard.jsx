import React from 'react';
import { HeaderGComponent } from '../../components';
import { MainGComponent } from '../../styles/styled';

export function DashboardPage() {
    return (
        <>
            <HeaderGComponent page="dashboard" buttonText="Sair" />
            <MainGComponent>
                <section>InfoSite</section>
                <section>Ainda em Desenvolvimento</section>
            </MainGComponent>
        </>
    );
}
