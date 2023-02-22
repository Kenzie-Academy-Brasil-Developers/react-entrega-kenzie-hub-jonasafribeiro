import styled from "styled-components";

export const Title2 = styled.h2`
    color: var(--color-grey0);
    font-size: 1.12rem;
    font-weight: 700;
    max-width: 45%;
`

export const Text1 = styled.p`
    color: var(--color-grey1);
    font-size: 0.75rem;
    font-weight: 400;
    max-width: 45%;
`

export const Container1 = styled.div`
    display: flex;
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
    align-items: center;
    justify-content: space-between;
    width: 100%;
    gap: 25px;
`

export const Container3 = styled.div`
    width: 100%;
    max-width: 700px;
    height: 115px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    `

export const Main = styled.main`
    display: flex;
    box-sizing: border-box;
    flex-direction: column;
    padding-top: 100px;
    background-color: var(--color-grey4);
    min-height: 100vh;
    height: 100%;
    align-items: center;
`

export const TechList = styled.ul`
    width: 100%;
    padding: 22px;
    gap: 14px;
    max-width: 700px;
    display: flex;
    flex-direction: column;
    background-color: var(--color-grey3);
`

export const Button = styled.button`
    background-color: var(--color-grey3);
    border-radius: 4px;
    border-style: none;
    color: #ffffff;
    width: 32.5px;
    height: 32px;
    font-weight: bolder;
    cursor: pointer;
`