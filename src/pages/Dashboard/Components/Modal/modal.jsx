import { yupResolver } from '@hookform/resolvers/yup';
import React, { useContext } from 'react';
import * as yup from 'yup';
import { api } from '../../../../services/api';
import { useForm } from 'react-hook-form';
import {
    Button,
    CloseButton,
    Container1,
    Container2,
    Container3,
    ErrorMessage,
    FormArea,
    Input,
    Label,
    SelectArea,
    Title,
} from './moda.styled';
import { UserContext } from '../../../../provider/UserContext';
import { toast } from 'react-toastify';

export function Modal({ setModal }) {
    const { setUpdateUser } = useContext(UserContext);

    const formSchema = yup.object().shape({
        title: yup.string().required('Título Obrigatório'),
        status: yup.string().required(''),
    });

    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm({
        resolver: yupResolver(formSchema),
    });

    const regNewTech = async (formData) => {
        const token = JSON.parse(localStorage.getItem('@KenzieHub')).token;
        try {
            await api.post(
                '/users/techs',
                {
                    ...formData,
                },
                {
                    headers: {
                        Authorization: `Bearer ${token}`,
                    },
                }
            );
            setUpdateUser(true);
            setModal(false);
            toast.success('Tech cadastrado com sucesso!');
        } catch (err) {
            toast.error(`Ocorreu um erro ao tentar adicionar: ${err.message}`);
        }
    };

    const handleCloseModal = () => {
        setModal(false);
    };

    return (
        <Container1>
            <Container2>
                <Container3>
                    <Title>Cadastrar Tecnologia</Title>
                    <CloseButton onClick={handleCloseModal} type="button">
                        X
                    </CloseButton>
                </Container3>
                <FormArea onSubmit={handleSubmit(regNewTech)}>
                    <Label htmlFor="title">Nome</Label>
                    <Input
                        type="text"
                        placeholder="Título da Tecnologia"
                        {...register('title')}
                    />
                    {errors.title && (
                        <ErrorMessage>{errors.title?.message}</ErrorMessage>
                    )}

                    <Label htmlFor="status">Selecionar status</Label>
                    <SelectArea
                        name="status"
                        id="status"
                        {...register('status')}
                    >
                        <option>Iniciante</option>
                        <option>Intermediário</option>
                        <option>Avançado</option>
                    </SelectArea>

                    <Button type="submit">Cadastrar Tecnologia</Button>
                </FormArea>
            </Container2>
        </Container1>
    );
}
