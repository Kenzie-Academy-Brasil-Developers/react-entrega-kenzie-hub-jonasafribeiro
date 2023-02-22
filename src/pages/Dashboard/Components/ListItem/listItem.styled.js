import styled from "styled-components";

export const StyledListItem = styled.li`
    width: 100%;
    display: flex;
    padding: 13px 22px;
    width: 100%;
    justify-content: space-between;
    background-color: var(--color-grey4);
    border-radius: 4px;
    &:hover{
        background-color: var(--color-grey2);
    }
`

export const ItemTitle = styled.h2`
    font-size: 0.9rem;
    font-weight: 700;
    color: #ffffff;
    line-height: 22.33px;
`

export const ItemText = styled.p`
    font-size: 0.75rem;
    font-weight: 400;
    color: var(--color-grey1);
    line-height: 22.33px;
`