import { ChangeEventHandler, KeyboardEventHandler } from 'react';
import styled, { css } from 'styled-components';

type SearchBoxProps = {
  isError: boolean;
  onChange: ChangeEventHandler;
  onKeyUp: KeyboardEventHandler;
};

function SearchBox({ isError, onChange, onKeyUp }: SearchBoxProps) {
  return (
    <StyledInput
      $isValid={isError}
      aria-label='Search'
      id='search'
      onChange={onChange}
      onKeyUp={onKeyUp}
      type='search'
      placeholder='Search for any word...'
    />
  );
}

export default SearchBox;

type InvalidWordType = {
  $isValid: boolean;
};

const StyledInput = styled.input<InvalidWordType>`
  background-color: var(--clr-bg-secondary);
  border-radius: var(--input-border);
  color: inherit;
  font-family: inherit;
  padding: var(--input-padding);
  width: 100%;

  ${(props) =>
    props.$isValid &&
    css`
      outline: var(--isError);

      &:focus {
        outline-color: var(--clr-outline-accessibility);
      }
    `}
`;
