import React from 'react';
import { ItemText, ItemTitle, StyledListItem } from './listItem.styled';

export function ListItem({ title, text, token, handleClick }) {
    return (
        <StyledListItem
            onClick={() => {
                handleClick({ title: title, text: text, token: token });
            }}
        >
            <ItemTitle>{title}</ItemTitle>
            <ItemText>{text}</ItemText>
        </StyledListItem>
    );
}
