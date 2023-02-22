import React from 'react';
import { ItemText, ItemTitle, StyledListItem } from './listItem.styled';

export function ListItem({ title, text }) {
    return (
        <StyledListItem>
            <ItemTitle>{title}</ItemTitle>
            <ItemText>{text}</ItemText>
        </StyledListItem>
    );
}
