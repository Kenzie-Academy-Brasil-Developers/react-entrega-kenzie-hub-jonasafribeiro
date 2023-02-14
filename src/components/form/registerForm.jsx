import React from 'react';
import { useForm } from 'react-hook-form';
import YupPassword from 'yup-password';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import { useNavigate } from 'react-router-dom';
import { api } from '../../services/api';
import {
    Title2,
    FormArea,
    InputArea,
    SelectArea,
    Label,
    Text1,
    Button,
} from './form.styled';
import { toast } from 'react-toastify';
YupPassword(yup);

export function RegisterForm() {
    const navigate = useNavigate();

    const registerFunction = async (data) => {
        api.post('/users', data)
            .then((data) => {
                toast.success(
                    'Prontinho, ' +
                        data.data.name +
                        '! sua conta foi criada com sucesso! Insira agora seu email e senha para logar'
                );
                navigate('/login');
            })
            .catch((err) => {
                console.log(err);
                toast.error(
                    `${
                        err.response.data.message === 'Email already exists'
                            ? 'Email já cadastrado'
                            : err.response.data.message
                    }`
                );
            });
    };

    const formSchema = yup.object().shape({
        name: yup.string().required('Nome obrigatório'),
        email: yup
            .string()
            .required('Email obrigatório')
            .email('Email inválido'),
        password: yup
            .string()
            .required('Senha é obrigatória')
            .min(6, 'A senha deve ter pelo menos 6 dígitos'),
        confirmPassword: yup
            .string()
            .oneOf([yup.ref('password'), null], 'Senhas devem ser iguais'),
        bio: yup.string().required('Adicione uma bio'),
        contact: yup.string().required('Adicione alguma informação de contato'),
    });

    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm({
        resolver: yupResolver(formSchema),
    });

    return (
        <FormArea onSubmit={handleSubmit(registerFunction)}>
            <Title2>Crie sua conta</Title2>
            <Text1>Rapido e grátis, vamos nessa</Text1>

            <Label htmlFor="name">Nome</Label>
            <InputArea
                id="name"
                type="text"
                placeholder="Digite aqui seu nome"
                {...register('name')}
            />
            <Text1>{errors.name?.message}</Text1>

            <Label htmlFor="email">Email</Label>
            <InputArea
                id="email"
                placeholder="Digite aqui seu email"
                {...register('email')}
            />
            <Text1>{errors.email?.message}</Text1>

            <Label htmlFor="password">Senha</Label>
            <InputArea
                id="password"
                type="password"
                autoComplete="new-password"
                placeholder="Digite aqui sua senha"
                {...register('password')}
            />
            <Text1>{errors.password?.message}</Text1>

            <Label htmlFor="confirmPassword">Confirmar Senha</Label>
            <InputArea
                id="confirmPassword"
                type="password"
                autoComplete="new-password"
                placeholder="Digite novamente sua senha"
                {...register('confirmPassword')}
            />
            <Text1>{errors.confirmPassword?.message}</Text1>

            <Label htmlFor="bio">Bio</Label>
            <InputArea
                id="bio"
                type="text"
                placeholder="Fale sobre você"
                {...register('bio')}
            />
            <Text1>{errors.bio?.message}</Text1>

            <Label htmlFor="contact">Contato</Label>
            <InputArea
                id="contact"
                type="text"
                placeholder="Opção de contato"
                {...register('contact')}
            />
            <Text1>{errors.contact?.message}</Text1>

            <Label htmlFor="course_module">Selecionar módulo</Label>
            <SelectArea id="course_module" {...register('course_module')}>
                <option>Primeiro Módulo</option>
                <option>Segundo Módulo</option>
                <option>Terceiro Módulo</option>
                <option>Quarto Módulo</option>
            </SelectArea>

            <Button buttonColor="primary-Disable" type="submit">
                Cadastrar
            </Button>
        </FormArea>
    );
}
