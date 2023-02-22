import styled from "styled-components";

export const Container1 = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    width: 100vw;
    height: 100vh;
    background-color: rgba(18, 18, 20, 0.5);
    display: flex;
    justify-content: center;
    align-items: center;
`

export const Container2 = styled.div`
    width: 100%;
    max-width: 370px;
    background-color: var(--color-grey3);
`

export const Container3 = styled.div`
    padding: 13px 20px;
    background-color: var(--color-grey2);
    display: flex;
    position: relative;
`

export const Title = styled.h2`
    font-size: 0.9rem;
    font-weight: 700;
    line-height: 24px;
    color: var(--color-grey0);
`

export const CloseButton = styled.button`
    position: absolute;
    top: 12px;
    right: 12px;
    font-size: 1rem;
    min-width: 15px;
    font-weight: 600;
    color: var(--color-grey1);
    background-color: transparent;
    border-style: none;
    cursor: pointer;
`

export const FormArea = styled.form`
    display: flex;
    flex-direction: column;
    padding: 32px 22px;
    background-color: var(--color-grey3);
    gap: 22px;
`

export const Label = styled.label`
    font-size: 0.7rem;
    font-weight: 400;
    color: var(--color-grey0);
`

export const Input = styled.input`
    font-size: 1rem;
    font-weight: 400;
    padding: 10px 16px;
    color: var(--color-grey0);
    background-color: var(--color-grey2);
    border: 1px solid var(--color-grey0);
    border-radius: 4px;
`

export const ErrorMessage = styled.span`
    font-size: 0.7rem;
    font-weight: 400;
    color: var(--color-Negative);
`

export const SelectArea = styled.select`
    font-size: 1rem;
    font-weight: 400;
    padding: 10px 16px;
    color: var(--color-grey0);
    background-color: var(--color-grey2);
    border: 1px solid var(--color-grey0);
    border-radius: 4px;
`

export const ButtonContainer = styled.div`
    display: flex;
    justify-content: space-between;
`

export const Button = styled.button`
    color: #FFFFFF;
    font-size: 1rem;
    font-weight: 500;
    padding: 10.5px;
    border-style: none;
    border-radius: 4px;

    ${props => {
        if (props.buttonType === 'register') {
            return 'background-color: var(--color-primary);'
        } else if (props.buttonType === 'save') {
            return 'background-color: var(--color-primary-Disable); width: calc(70% - 5px);'
        } else {
            return 'background-color: var(--color-grey1); width: calc(30% - 5px);'
        }
    }}
`