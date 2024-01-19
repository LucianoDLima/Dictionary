import { ChangeEvent, KeyboardEvent, useState } from 'react';
import styled, { css } from 'styled-components';
import { useDictionaryContext } from '../../hooks/useDictionary';
import { handleFetchedData } from '../../service/api';
import { FetchedDataType } from '../../types';

type InvalidWordType = {
  $isInvalid: boolean;
};

/**
 * Handle user input, fetching the word searched and populating the dictionary context with the retrieved data
 *
 * @returns {JSX.Element}
 */

function Search() {
  const [inputValue, setInputValue] = useState<string | null>(null);
  const [isValid, setIsValid] = useState<boolean | undefined>(undefined);
  const { setDictionary } = useDictionaryContext();

  /**
   * Store the user input
   *
   * @param {React.ChangeEvent<HTMLInputElement>} e - Change as user types
   */
  function handleInputValue(e: ChangeEvent<HTMLInputElement>): void {
    const targetValue = e.target.value;

    setInputValue(targetValue);
  }

  /**
   * Check if invalid border style should be applied to search input
   *
   * @returns {boolean} - True: Don't apply. False: Apply
   */
  function handleInvalidWordBorderStyle(): boolean {
    if (isValid === undefined) return false;

    return isValid ? false : true;
  }

  /**
   * Check if user hasn't typed anything (null) or has deleted the input value ('')
   *
   * @returns {boolean}
   */
  function handleInvalidInput(): boolean {
    const isValidInput = inputValue === null || inputValue === '';

    if (isValidInput) {
      setIsValid(false);
      return false;
    }

    return true;
  }

  /**
   * Handle fetching data from the API
   *
   * @returns {FetchedDataType} - It can return the error number
   */
  async function handleDataFetching(): FetchedDataType {
    if (!handleInvalidInput()) return;

    const result = await handleFetchedData(inputValue!, setDictionary);

    if (result === 404) {
      setIsValid(false);
      return;
    }

    setIsValid(true);

    return result;
  }

  /**
   * Fire the data fetching function
   *
   * @param {KeyboardEvent<HTMLInputElement>} e - Enter key press
   * @returns {FetchedDataType}
   */
  function handleSearchButtonOnKeyPress(e: KeyboardEvent<HTMLInputElement>): FetchedDataType | void {
    const keyPress = e.key === 'Enter';

    if (!keyPress) return;

    return handleDataFetching();
  }

  return (
    <>
      <StyledContainer>
        <StyledInput
          $isInvalid={handleInvalidWordBorderStyle()}
          aria-label='Search'
          id='search'
          onChange={handleInputValue}
          onKeyUp={handleSearchButtonOnKeyPress}
          type='text'
        />

        <StyledButton
          aria-label='Search'
          onClick={handleDataFetching}
        >
          <StyledSearchIcon
            xmlns='http://www.w3.org/2000/svg'
            viewBox='0 0 18 18'
          >
            <path
              fill='none'
              strokeLinecap='round'
              strokeLinejoin='round'
              strokeWidth='1.5'
              d='m12.663 12.663 3.887 3.887M1 7.664a6.665 6.665 0 1 0 13.33 0 6.665 6.665 0 0 0-13.33 0Z'
            />
          </StyledSearchIcon>
        </StyledButton>
      </StyledContainer>
    </>
  );
}

export default Search;

const StyledContainer = styled.div`
  --input-border: 1rem;
  --isError: 1px solid var(--clr-error);
  --input-padding: 1rem;

  display: flex;
  gap: 0.25rem;
  margin-inline: auto;
  max-width: var(--w-max-width);
  padding-inline: var(--p-mobile);
  position: relative;
`;

const StyledInput = styled.input<InvalidWordType>`
  background-color: var(--clr-bg-secondary);
  border-radius: var(--input-border);
  color: inherit;
  font-family: inherit;
  padding: var(--input-padding);
  width: 100%;

  ${(props) =>
    props.$isInvalid &&
    css`
      outline: var(--isError);

      &:focus {
        outline-color: var(--clr-outline-accessibility);
      }
    `}
`;

const StyledButton = styled.button`
  align-items: center;
  background-color: var(--clr-accent);
  border-radius: 50%;
  bottom: 0;
  cursor: pointer;
  display: flex;
  justify-content: center;
  padding: var(--input-padding);
  right: var(--p-mobile);
  top: 0;

  &:hover,
  &:focus {
    opacity: 0.8;
  }

  &:active {
    opacity: 0.75;
  }
`;

const StyledSearchIcon = styled.svg`
  --search-icon-width: var(--input-padding);

  height: var(--search-icon-width);
  pointer-events: none;
  width: var(--search-icon-width);

  path {
    stroke: white;
  }
`;
