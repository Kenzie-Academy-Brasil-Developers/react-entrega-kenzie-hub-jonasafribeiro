import styled from "styled-components";

export const FormArea = styled.form`
    max-width: 400px;
    width: 100%;
    display: flex;
    flex-direction: column;
    background: var(--color-grey3);
    border-radius: 3.5px;
    padding: 42px 20px;
    gap: 22px;
    
`

export const Label = styled.label`
    color: var(--color-grey0);
    font-size: 0.6rem;
    font-weight: 400;
`

export const InputArea = styled.input`
    background: var(--color-grey2);
    border-radius: 3.5px;
    border-style: none;
    padding: 10px 12px;
    font-size: 0.8rem;
    font-weight: 400;
    color: var(--color-grey1);
`

export const SelectArea = styled.select`
    background: var(--color-grey2);
    border-radius: 3.5px;
    border-style: none;
    padding: 10px 12px;
    font-size: 0.8rem;
    font-weight: 400;
    color: var(--color-grey1);
`

export const Title2 = styled.h2`
    color: var(--color-grey0);
    font-size: 1rem;
    font-weight: 700;
    text-align: center;
`

export const Text1 = styled.p`
    color: var(--color-grey1);
    font-size: 0.75rem;
    font-weight: 400;
    text-align: center;
`

export const Button = styled.button`
    padding: 10px;
    color: #FFFFFF;
    font-size: 0.8rem;
    line-height: 22px;
    font-weight: 500;
    border-style: none;
    border-radius: 4px;
    background-color: var(--color-${props => props.buttonColor}) ;
`