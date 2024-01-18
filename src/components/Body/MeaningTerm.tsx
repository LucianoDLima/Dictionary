import styled from 'styled-components';
import { StyledHeading } from '../../styles/SharedStyles';

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
  return (
    <>
      {terms.length ? (
        <StyledContainer>
          <StyledTitle>{title}</StyledTitle>
          {terms.map((term, index) => (
            <p key={index}>
              {term}
              {index === terms.length - 1 ? null : ','}
            </p>
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

  p:not(:first-child) {
    color: var(--clr-accent);
    cursor: pointer;
  }
`;

const StyledTitle = styled(StyledHeading)``;
