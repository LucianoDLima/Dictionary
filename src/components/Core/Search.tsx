import { ChangeEvent, KeyboardEvent, useState } from 'react';
import styled from 'styled-components';
import { useDictionaryContext } from '../../context/useDictionary';
import { handleFetchedData } from '../../service/api';
import { FetchedDataType } from '../../types';
import SearchButton from '../Inputs/SearchButton';
import SearchBox from '../Inputs/SearchBox';
import Loading from '../Common/Loading';
import { device } from '../../styles/MediaQuery';
import { useValidationContext } from '../../context/useValidation';

/**
 * Handle user input, fetching the word searched and populating the dictionary context with the retrieved data
 *
 * @returns {JSX.Element}
 */
function Search() {
  const [inputValue, setInputValue] = useState<string | undefined>(undefined);
  const { setDictionary } = useDictionaryContext();
  const { validation, setValidation } = useValidationContext();

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
   * Check if invalid border style should be applied to the search input
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
    const isEmpty = inputValue === undefined || inputValue === '';

    if (isEmpty) {
      setValidation((prev) => ({
        ...prev,
        isEmpty: true,
        isValid: false,
      }));

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

    // Prevent user from fetching the data that has already been retrieved
    const isSameWord = validation.currentWord?.toLowerCase() === inputValue?.toLowerCase();

    if (isSameWord) {
      return;
    }

    setValidation((prev) => ({
      ...prev,
      currentWord: inputValue,
      isLoading: true,
    }));

    setDictionary(undefined);

    const result = await handleFetchedData(inputValue!, setDictionary);

    setValidation((prev) => ({
      ...prev,
      isLoading: false,
    }));

    if (result === 404) {
      setValidation((prev) => ({
        ...prev,
        isEmpty: false,
        isValid: false,
      }));

      setDictionary(null);
      return;
    }

    setValidation((prev) => ({
      ...prev,
      isEmpty: false,
      isValid: true,
    }));

    return result;
  }

  /**
   * Trigger the data fetching function on key press
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

      {validation.isLoading && (
        <StyledLoadingWrapper>
          <Loading />
        </StyledLoadingWrapper>
      )}
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

const StyledLoadingWrapper = styled.div`
  margin-top: 1rem;
`;
