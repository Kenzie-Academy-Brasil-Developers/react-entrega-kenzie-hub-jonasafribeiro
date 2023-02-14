import React from 'react';
import { Button, HeaderStyled } from './header.styled';
import { LogoGComponent } from '..';
import { useNavigate } from 'react-router-dom';

export function Header({ page, buttonText }) {
    const navigate = useNavigate();
    const handleClick = () => {
        navigate(-1);
    };

    return (
        <HeaderStyled page={page}>
            <LogoGComponent />
            <Button onClick={handleClick}>{buttonText}</Button>
        </HeaderStyled>
    );
}
