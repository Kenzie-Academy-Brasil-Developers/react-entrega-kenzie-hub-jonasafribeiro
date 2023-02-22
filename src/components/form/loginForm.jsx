import React, { useContext } from 'react';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import { useNavigate } from 'react-router-dom';
import { api } from '../../services/api';
import {
    Title2,
    FormArea,
    InputArea,
    Label,
    Text1,
    Button,
    Text2,
} from './form.styled';
import { toast } from 'react-toastify';
import { UserContext } from '../../provider/UserContext';

export function LoginForm({ user, callback }) {
    const navigate = useNavigate();

    const formSchema = yup.object().shape({
        email: yup
            .string()
            .required('Email obrigatório')
            .email('Email inválido'),
        password: yup.string().required('Senha é obrigatória'),
    });

    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm({
        resolver: yupResolver(formSchema),
    });

    const loginFunction = (data) => {
        api.post('/sessions', data)
            .then((data) => {
                const temp = {
                    id: data.data.user.id,
                    token: data.data.token,
                };
                localStorage.setItem('@KenzieHub', JSON.stringify(temp));
                user = temp;
                toast.success('Logado com sucesso!');
                callback(true);
                setUserData({ loggedIn: true });
                navigate('/dashboard');
            })
            .catch(() => {
                toast.error('Email ou senha inválido');
            });
    };

    const { setUserData } = useContext(UserContext);

    return (
        <FormArea onSubmit={handleSubmit(loginFunction)}>
            <Title2>Login</Title2>

            <Label htmlFor="email">Email</Label>
            <InputArea
                id="email"
                autoComplete="username"
                type="email"
                placeholder="Digite aqui seu email"
                {...register('email')}
            />
            {errors.email ? <Text2>{errors.email?.message}</Text2> : null}

            <Label htmlFor="password">Senha</Label>
            <InputArea
                id="password"
                autoComplete="current-password"
                type="password"
                placeholder="Digite aqui sua senha"
                {...register('password')}
            />
            {errors.password ? <Text2>{errors.password?.message}</Text2> : null}

            <Button buttonColor="primary" type="submit">
                Entrar
            </Button>
            <Text1>Ainda não possui uma conta?</Text1>
            <Button
                onClick={() => navigate('/register')}
                type="button"
                buttonColor="grey1"
            >
                Cadastre-se
            </Button>
        </FormArea>
    );
}
