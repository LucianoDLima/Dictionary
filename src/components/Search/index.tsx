import { ChangeEvent, KeyboardEvent, useState } from 'react';
import styled from 'styled-components';
import { useDictionaryContext } from '../../context/useDictionary';
import { handleFetchedData } from '../../service/api';
import { FetchedDataType } from '../../types';
import SearchButton from './SearchButton';
import SearchBox from './SearchBox';
import Loading from '../Body/Loading';
import { useCurrentWordContext } from '../../context/useCurrentSearchedWord';
import { device } from '../../styles/MediaQuery';

type ValidationState = {
  isEmpty: boolean | undefined;
  isValid: boolean | undefined;
};

/**
 * Handle user input, fetching the word searched and populating the dictionary context with the retrieved data
 *
 * @returns {JSX.Element}
 */

function Search() {
  const [inputValue, setInputValue] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [validation, setValidation] = useState<ValidationState>({
    isEmpty: undefined,
    isValid: undefined,
  });
  const { setDictionary } = useDictionaryContext();
  const { currentWord, setCurrentWord } = useCurrentWordContext();

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
    if (validation.isValid === undefined) return false;

    return validation.isValid ? false : true;
  }

  /**
   * Check if user hasn't typed anything (null) or has deleted the input value ('')
   *
   * @returns {boolean}
   */
  function handleEmptyValue(): boolean {
    const isEmpty = inputValue === null || inputValue === '';

    if (isEmpty) {
      setValidation({
        isValid: false,
        isEmpty: true,
      });

      return false;
    }

    return true;
  }

  /**
   * Handle fetching data from the API
   *
   * @returns {FetchedDataType} - Either the data or the number error
   */
  async function handleDataFetching(): FetchedDataType {
    if (!handleEmptyValue()) return;

    if (currentWord?.toLowerCase() === inputValue?.toLowerCase()) {
      return;
    }

    setCurrentWord(inputValue);
    setIsLoading(true);
    setDictionary(undefined);

    const result = await handleFetchedData(inputValue!, setDictionary);

    setIsLoading(false);

    if (result === 404) {
      setValidation({
        isEmpty: false,
        isValid: false,
      });

      setDictionary(null);
      return;
    }

    setValidation({
      isEmpty: false,
      isValid: true,
    });

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
    <StyledContainer>
      <StyledWrapper>
        <SearchBox
          isError={handleInvalidWordBorderStyle()}
          onChange={handleInputValue}
          onKeyUp={handleSearchButtonOnKeyPress}
        />

        <SearchButton onClick={handleDataFetching} />
      </StyledWrapper>

      {validation.isEmpty && <StyledErrorMessage>Whoops! Can't be empty...</StyledErrorMessage>}

      {isLoading && <Loading isAccent={true} />}
    </StyledContainer>
  );
}

export default Search;

const StyledContainer = styled.div`
  --input-border: 1rem;
  --input-padding: 1rem;
  --isError: 1px solid var(--clr-error);

  display: flex;
  flex-direction: column;
  margin-bottom: 1rem;
  margin-inline: auto;
  max-width: var(--w-max-width);
  padding-inline: var(--p-mobile);
`;

const StyledWrapper = styled.div`
  display: flex;
  gap: 0.5rem;

  @media ${device.tablet} {
      gap: 1rem;
    }
`;

const StyledErrorMessage = styled.p`
  color: var(--clr-error);
  font-style: italic;
  font-size: inherit;
`;
