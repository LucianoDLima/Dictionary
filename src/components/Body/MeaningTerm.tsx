import styled from 'styled-components';
import { StyledHeading } from '../../styles/SharedStyles';
import { useDictionaryContext } from '../../hooks/useDictionary';
import { MouseEvent } from 'react';
import { handleFetchedData } from '../../service/api';

type MeaningTermProps = {
  title: string;
  terms: string[];
};

/**
 * Display synonyms and/or antonyms of a given word
 *
 * @param {MeaningTermProps} props
 * @returns {JSX.Element | null} - Only renders if the given array exists in the API
 */

function MeaningTerm({ title, terms }: MeaningTermProps) {
  const { setDictionary } = useDictionaryContext();

  /**
   * Fetch data with the synonym or antonym the user clicks on
   *
   * @param {MouseEvent<HTMLButtonElement>} e - Click event
   */
  async function triggerDataFetching(e: MouseEvent): Promise<void | number> {
    const clickedWord = (e.target as HTMLButtonElement).textContent;
    // Remove the comma at the end of the words
    const clickedWordCorrected = clickedWord?.endsWith(',') ? clickedWord.slice(0, -1) : clickedWord;

    const result = await handleFetchedData(clickedWordCorrected!, setDictionary);
    
    if(result === 404) {
      console.log(result);
      return
    }
    

    return result;
  }

  return (
    <>
      {terms.length ? (
        <StyledContainer>
          <StyledTitle>{title}</StyledTitle>
          {terms.map((term, index) => (
            <button
              onClick={triggerDataFetching}
              key={index}
            >
              {term}
              {index === terms.length - 1 ? null : ','}
            </button>
          ))}
        </StyledContainer>
      ) : null}
    </>
  );
}

export default MeaningTerm;

const StyledContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;

  button {
    color: var(--clr-accent);
    cursor: pointer;
  }
`;

const StyledTitle = styled(StyledHeading)``;
