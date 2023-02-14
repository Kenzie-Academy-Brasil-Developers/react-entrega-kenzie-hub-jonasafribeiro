import React from 'react';
import { Button, HeaderStyled } from './header.styled';
import { LogoGComponent } from '..';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';

export function Header({ page, buttonText }) {
    const navigate = useNavigate();
    const handleClickBack = () => {
        navigate(-1);
    };

    const handleClickExit = () => {
        localStorage.clear();
        navigate('/login');
        toast.warning('Desconectado com sucesso!');
    };

    return (
        <HeaderStyled page={page}>
            <LogoGComponent />
            <Button
                onClick={
                    buttonText === 'Sair' ? handleClickExit : handleClickBack
                }
            >
                {buttonText}
            </Button>
        </HeaderStyled>
    );
}
