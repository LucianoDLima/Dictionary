import styled from 'styled-components';
import { useDictionaryContext } from '../../context/useDictionary';
import { MouseEvent } from 'react';
import { handleFetchedData } from '../../service/api';
import { FetchedDataType } from '../../types';
import { useValidationContext } from '../../context/useValidation';
import ThesaurusButton from '../Inputs/ThesaurusButton';
import SubTitle from './SubTitle';

type ThesaurusListProps = {
  title: string;
  thesaurus: string[];
};

/**
 * Display a list of buttons for the words similiar or opposite to what the user searches
 *
 * @param {ThesaurusListProps} props
 * @returns {JSX.Element | null} - Only renders if the given array exists in the API
 */
function ThesaurusList({ title, thesaurus }: ThesaurusListProps) {
  const { setDictionary } = useDictionaryContext();
  const { setValidation } = useValidationContext();

  /**
   * Fetch data for the clicked thesaurus
   *
   * @param {MouseEvent<HTMLButtonElement>} e - Click event
   */
  async function triggerDataFetching(e: MouseEvent): FetchedDataType {
    const clickedWord = (e.target as HTMLButtonElement).textContent;
    const wordCommaRemoved = clickedWord?.endsWith(',') ? clickedWord.slice(0, -1) : clickedWord;

    setDictionary(undefined);
    setValidation((prev) => ({
      ...prev,
      isLoading: true,
    }));

    // Fetch data
    const result = await handleFetchedData(wordCommaRemoved!, setDictionary);

    setValidation((prev) => ({
      ...prev,
      isLoading: false,
    }));

    // Trigger error message if no defition is found
    const noDefinition = result === 404;

    if (noDefinition) {
      setValidation((prev) => ({
        ...prev,
        currentWord: wordCommaRemoved!,
      }));
      setDictionary(null);
      return;
    }

    // Store the word clicked so user can't search it again while it is already on screen
    setValidation((prev) => ({
      ...prev,
      currentWord: wordCommaRemoved!,
    }));

    return result;
  }

  return (
    <>
      {thesaurus.length ? (
        <StyledContainer>
          <SubTitle
            title={title}
            heading='h5'
          />

          {thesaurus.map((word, index) => (
            <ThesaurusButton
              key={index}
              onClick={triggerDataFetching}
              word={index === thesaurus.length - 1 ? word : `${word},`}
            />
          ))}
        </StyledContainer>
      ) : null}
    </>
  );
}

export default ThesaurusList;

const StyledContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
`;
