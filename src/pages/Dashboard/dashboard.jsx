import React, { useContext, useState } from 'react';
import { HeaderGComponent } from '../../components';
import {
    Container3,
    Container2,
    Container1,
    Text1,
    Title2,
    Main,
    TechList,
    Button,
} from './dashboard.styled';
import { UserContext } from '../../provider/UserContext';
import { Modal } from './Components/Modal/modal';
import { ListItem } from './Components/ListItem/listItem';

export function DashboardPage() {
    const { userData, setUserData } = useContext(UserContext);
    const [modal, setModal] = useState(0);

    const handleOpenCreateModal = () => {
        setModal('createTech');
    };

    return (
        <>
            <HeaderGComponent
                logOut={setUserData}
                page="dashboard"
                buttonText="Sair"
            />
            <Main>
                <Container1>
                    <Container3>
                        <Title2>Olá, {userData?.name}</Title2>
                        <Text1>{userData?.course_module}</Text1>
                    </Container3>
                </Container1>
                <Container2>
                    <Container3>
                        <Title2>Tecnologias</Title2>
                        <Button onClick={handleOpenCreateModal} type="button">
                            +
                        </Button>
                    </Container3>
                    <TechList>
                        {userData.techs?.map(({ title, status, id }) => (
                            <ListItem
                                handleClick={setModal}
                                title={title}
                                text={status}
                                token={id}
                                key={id}
                            />
                        ))}
                    </TechList>
                </Container2>
            </Main>
            {modal && <Modal type={modal} setModal={setModal} />}
        </>
    );
}
