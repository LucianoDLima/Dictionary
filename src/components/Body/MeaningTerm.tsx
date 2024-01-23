import styled from 'styled-components';
import { StyledHeading } from '../../styles/SharedStyles';
import { useDictionaryContext } from '../../context/useDictionary';
import { MouseEvent } from 'react';
import { handleFetchedData } from '../../service/api';
import { FetchedDataType } from '../../types';
import { device } from '../../styles/MediaQuery';
import Loading from './Loading';
import { useValidationContext } from '../../context/useValidation';

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
  const { validation, setValidation } = useValidationContext();

  /**
   * Fetch data with the synonym or antonym the user clicks on
   *
   * @param {MouseEvent<HTMLButtonElement>} e - Click event
   */
  async function triggerDataFetching(e: MouseEvent): FetchedDataType {
    const clickedWord = (e.target as HTMLButtonElement).textContent;
    const wordCommaRemoved = clickedWord?.endsWith(',') ? clickedWord.slice(0, -1) : clickedWord;

    // Prevent user from clicking any button if there is a loading happening
    if (validation.isLoading) return;

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
    if (result === 404) {
      setValidation((prev) => ({
        ...prev,
        currentWord: wordCommaRemoved!,
      }));
      setDictionary(null);
      return;
    }

    setValidation((prev) => ({
      ...prev,
      currentWord: wordCommaRemoved!,
    }));

    return result;
  }

  return (
    <>
      {validation.isLoading ? <Loading isAccent={true} /> : null}
      <>
        {terms.length ? (
          <StyledContainer>
            <StyledTitle>{title}</StyledTitle>
            {terms.map((term, index) => (
              <StyledTermButtonsWrapper key={index}>
                <StyledButton onClick={triggerDataFetching}>{index === terms.length - 1 ? term : `${term},`}</StyledButton>
              </StyledTermButtonsWrapper>
            ))}
          </StyledContainer>
        ) : null}
      </>
    </>
  );
}

export default MeaningTerm;

const StyledContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
`;

const StyledTitle = styled(StyledHeading)`
  @media ${device.tablet} {
    font-size: var(--fs-heading-S);
  }
`;

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

  @media ${device.tablet} {
    font-size: var(--fs-heading-S);
  }

  &:hover,
  &:focus {
    background-size: 100% 3px;
    opacity: 0.9;
  }
`;
