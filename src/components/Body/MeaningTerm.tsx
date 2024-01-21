import styled from 'styled-components';
import { StyledHeading } from '../../styles/SharedStyles';
import { useDictionaryContext } from '../../hooks/useDictionary';
import { MouseEvent, useEffect, useState } from 'react';
import { handleFetchedData } from '../../service/api';
import ErrorPopUp from '../Error/ErrorPopUp';
import { FetchedDataType } from '../../types';

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
  const [fadeOut, setFadeOut] = useState(false);
  const [currentPosition, setCurrentPosition] = useState<number | undefined>(undefined);

  /**
   * Trigger the fade-out animation and then remove the component from the DOM
   */
  useEffect(() => {
    if (currentPosition === undefined) return;

    const startFadeOut = setTimeout(() => {
      setFadeOut(true);
    }, 1550);

    setFadeOut(false);

    const removeFromDOM = setTimeout(() => {
      setCurrentPosition(-1);
    }, 2000);

    return () => {
      clearTimeout(startFadeOut);
      clearTimeout(removeFromDOM);
    };
  }, [currentPosition]);

  /**
   * Fetch data with the synonym or antonym the user clicks on
   *
   * @param {MouseEvent<HTMLButtonElement>} e - Click event
   */
  async function triggerDataFetching(e: MouseEvent, index: number): FetchedDataType {
    const clickedWord = (e.target as HTMLButtonElement).textContent;
    const wordCommaRemoved = clickedWord?.endsWith(',') ? clickedWord.slice(0, -1) : clickedWord;

    // Prevent user from clicking the same button if there is already an error message
    if (index === currentPosition) return;

    // Fetch data
    const result = await handleFetchedData(wordCommaRemoved!, setDictionary);

    // Trigger error message if no defition is found
    if (result === 404) {
      setCurrentPosition(index);
      return;
    }

    return result;
  }

  return (
    <>
      {terms.length ? (
        <StyledContainer>
          <StyledTitle>{title}</StyledTitle>
          {terms.map((term, index) => (
            <StyledTermButtonsWrapper key={index}>
              {index == currentPosition ? <ErrorPopUp opacity={fadeOut} /> : null}
              <StyledButton onClick={(e: MouseEvent) => triggerDataFetching(e, index)}>{index === terms.length - 1 ? term : `${term},`}</StyledButton>
            </StyledTermButtonsWrapper>
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
`;

const StyledTitle = styled(StyledHeading)``;

const StyledTermButtonsWrapper = styled.div`
  position: relative;
`;

const StyledButton = styled.button`
  background-image: linear-gradient(90deg, var(--clr-accent), var(--clr-accent));
  background-position: left 1.25em;
  background-repeat: no-repeat;
  background-size: 0% 15px;
  color: var(--clr-accent);
  cursor: pointer;
  padding-block-end: 0.25em;
  transition: background-size var(--spe-quick), opacity var(--spe-quick) ease-in;

  &:hover,
  &:focus {
    background-size: 100% 3px;
    opacity: 0.9;
  }
`;
