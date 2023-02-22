import { yupResolver } from '@hookform/resolvers/yup';
import React, { useContext } from 'react';
import * as yup from 'yup';
import { api } from '../../../../services/api';
import { useForm } from 'react-hook-form';
import {
    Button,
    ButtonContainer,
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
import { useState } from 'react';

export function Modal({ setModal, type }) {
    const { setUpdateUser, updateUser } = useContext(UserContext);
    const [module, setModule] = useState(type.text);

    const formSchema = !type.token
        ? yup.object().shape({
              title: yup.string().required('Título Obrigatório'),
              status: yup.string().required('Escolha uma das opções'),
          })
        : yup.object().shape({});

    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm({
        resolver: yupResolver(formSchema),
    });

    const regNewTech = async (formData) => {
        console.log(formData);
        const token = JSON.parse(localStorage.getItem('@KenzieHub')).token;
        if (!type?.token) {
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
                setUpdateUser(updateUser + 1);
                setModal(false);
                toast.success('Tech cadastrado com sucesso!');
            } catch (err) {
                toast.error(
                    `Ocorreu um erro ao tentar adicionar: ${err.message}`
                );
            }
        } else {
            try {
                if (
                    formData.status === type.text ||
                    (formData.status === '' &&
                        (formData.title === type.title ||
                            formData.title === ''))
                ) {
                    toast.error('Você deve alterar alguma informação antes');
                } else {
                    formData.status === type.text
                        ? delete formData.status
                        : null;
                    await api.put(
                        '/users/techs/' + type.token,
                        { ...formData },
                        { headers: { Authorization: `Bearer ${token}` } }
                    );
                    setUpdateUser(updateUser + 1);
                    setModal(false);
                    toast.success('Tech atualizado com sucesso!');
                }
            } catch (err) {
                toast.error(`Ocorreu um erro: ${err.message}`);
            }
        }
    };

    const handleCloseModal = () => {
        setModal(false);
    };

    const handleDeleteTech = async () => {
        const token = JSON.parse(localStorage.getItem('@KenzieHub')).token;
        try {
            await api.delete(`/users/techs/${type.token}`, {
                headers: { Authorization: `Bearer ${token}` },
            });
            toast.success('Tech excluida com sucesso!');
            setUpdateUser(updateUser + 1);
            setModal(false);
        } catch (err) {
            toast.error(`Ocorreu um erro ao tentar excluir: ${err.message}`);
        }
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
                        placeholder={type.title || 'Título da Tecnologia'}
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
                        <option value="">Escolha uma opção</option>
                        <option value="Iniciante">Iniciante</option>
                        <option value="Intermediário">Intermediário</option>
                        <option value="Avançado">Avançado</option>
                    </SelectArea>
                    {errors.title && (
                        <ErrorMessage>{errors.status?.message}</ErrorMessage>
                    )}
                    {type === 'createTech' ? (
                        <Button buttonType="register" type="submit">
                            Cadastrar Tecnologia
                        </Button>
                    ) : (
                        <ButtonContainer>
                            <Button buttonType="save" type="submit">
                                Salvar alterações
                            </Button>
                            <Button
                                onClick={handleDeleteTech}
                                buttonType="close"
                                type="button"
                            >
                                Excluir
                            </Button>
                        </ButtonContainer>
                    )}
                </FormArea>
            </Container2>
        </Container1>
    );
}
