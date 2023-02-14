import styled from "styled-components";

export const HeaderStyled = styled.header`
    
    display: flex;
    background-color: var(--color-grey4);
    width: 100%;
    max-width: 400px;
    padding: 30px 0;
    align-items: center;

    ${props => props.page === 'register' ?
        'justify-content: space-between;' :
        'justify-content: center;'
    }
`

export const Button = styled.button`
    color: var(--color-grey0);
    padding: 5px 26px;
    font-size: 0.7rem;
    line-height: 23px;
    font-weight: 600;
    border-radius: 4px;
    border-style: none;
    background-color: var(--color-grey3);
`