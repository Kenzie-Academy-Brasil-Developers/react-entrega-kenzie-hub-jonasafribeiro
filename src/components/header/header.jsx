import React from 'react';
import { Button, HeaderStyled } from './header.styled';
import { LogoGComponent } from '..';

export function Header({ page, buttonText }) {
    return (
        <HeaderStyled page={page}>
            <LogoGComponent />
            <Button>{buttonText}</Button>
        </HeaderStyled>
    );
}
