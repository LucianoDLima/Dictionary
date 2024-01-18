import { ChangeEvent, useState } from 'react';
import styled, { css } from 'styled-components';
import { useDictionaryContext } from '../../hooks/useDictionary';
import { fetchWord } from '../../service/api';

type InvalidWordType = {
  $isInvalid: boolean;
}

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
   * Check if the user hasn't typed anything (null) or has deleted the input value ('')
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

  async function handleSearchButton(): Promise<void> {
    if (!handleInvalidInput()) return;

    try {
      const fetchedData = await fetchWord(inputValue!);
      console.log(fetchedData);

      if (fetchedData === 404) {
        setIsValid(false);
        throw new Error('No words found');
      }

      setIsValid(true);
      setDictionary(fetchedData);
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <>
      <StyledContainer>
        <StyledInput
          type='text'
          id='search'
          onChange={handleInputValue}
          aria-label='Search'
          $isInvalid={handleInvalidWordBorderStyle()}
        />

        <StyledButton
          aria-label='Search'
          onClick={handleSearchButton}
          tabIndex={-1}
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

  display: flex;
  margin-inline: auto;
  max-width: var(--w-max-width);
  padding-inline: var(--p-mobile);
  position: relative;
`;

const StyledInput = styled.input<InvalidWordType>`
  background-color: var(--clr-bg-secondary);
  border-radius: var(--input-border);
  ${(props) =>
    props.$isInvalid &&
    css`
      outline: var(--isError);

      &:focus {
        outline-color: var(--clr-outline-accessibility);
      }
    `}
  color: inherit;
  font-family: inherit;
  padding: 1rem;
  width: 100%;
`;

const StyledButton = styled.button`
  align-items: center;
  background-color: var(--clr-accent);
  border-bottom-right-radius: var(--input-border);
  border-top-right-radius: var(--input-border);
  bottom: 0;
  cursor: pointer;
  display: flex;
  justify-content: center;
  position: absolute;
  right: var(--p-mobile);
  top: 0;
  width: 3rem;

  &:hover,
  &:focus {
    opacity: 0.8;
  }

  &:active {
    opacity: 0.75;
  }
`;

const StyledSearchIcon = styled.svg`
  --search-icon-width: 1rem;

  height: var(--search-icon-width);
  pointer-events: none;
  width: var(--search-icon-width);

  path {
    stroke: white;
  }
`;
