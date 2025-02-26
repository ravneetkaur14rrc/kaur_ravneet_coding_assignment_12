import React from 'react';
import styled, { css } from 'styled-components';
import { IText } from './Text.types';

const getElementType = (types: string) => {
  switch (types) {
    case 'header':
      return 'h1';
    case 'subheader':
      return 'h2';
    case 'paragraph':
      return 'p';
    default:
      return 'span';
  }
};

const CustomText = styled.span<IText>`
    font-family: 'Arial', sans-serif;
    font-size: ${({ types }) => (types === 'header' ? '1.5rem' : types === 'paragraph' ? '1.2rem' : '1rem')};
    font-weight: ${({ bold }) => (bold ? 'bold' : 'normal')};
    font-style: ${({ italic }) => (italic ? 'italic' : 'normal')};
    color: ${({ disabled }) => (disabled ? '#999' : '#333')};

    ${({ disabled }) =>
        disabled &&
        css`
            background-color: #eee;
            cursor: not-allowed;
            opacity: 0.6;
        `}

    transition: opacity 0.3s ease-in-out;
`;

const Text: React.FC<IText> = ({
  types = 'paragraph',
  bold = false,
  italic = false,
  disabled = false,
  text,
  ...props
}) => {
  const ElementType = getElementType(types);

  return (
    <CustomText as={ElementType} types={types} bold={bold} italic={italic} disabled={disabled} {...props}>
      {text}
    </CustomText>
  );
};

export default Text;
