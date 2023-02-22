import styled from "styled-components";

export const Title2 = styled.h2`
    color: var(--color-grey0);
    font-size: 1.12rem;
    font-weight: 700;
`

export const Text1 = styled.p`
    color: var(--color-grey1);
    font-size: 0.75rem;
    font-weight: 400;
`

export const Text2 = styled.p`
    color: #FFFFFF;
    font-size: 1rem;
    font-weight: 400;
`

export const Container1 = styled.div`
    display: flex;
    gap: calc(100% - 300px);
    align-items: center;
    justify-content: center;
    width: 100%;
    min-height: 15%;
    border-top: 1px solid var(--color-grey3);
    border-bottom: 1px solid var(--color-grey3);
`

export const Container2 = styled.div`
    display: flex;
    flex-direction: column;
    padding: 50px;
    align-items: center;
    justify-content: space-between;
    width: 100%;
`

export const Main = styled.main`
    display: flex;
    box-sizing: border-box;
    flex-direction: column;
    padding-top: 100px;
    background-color: var(--color-grey4);
    height: 100vh;
    align-items: center;
`