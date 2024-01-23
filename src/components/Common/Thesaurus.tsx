import styled from 'styled-components';
import ThesaurusList from './ThesaurusList';

type ThesaurusProps = {
  antonyms: string[];
  synonyms: string[];
};

/**
 * Contain both antonyms and synonyms lists
 *
 * @param {ThesaurusProps} props
 * @returns {JSX.Element}
 */
function Thesaurus({ antonyms, synonyms }: ThesaurusProps) {
  return (
    <StyledContainer>
      <ThesaurusList
        title='Antonym'
        thesaurus={antonyms}
      />

      <ThesaurusList
        title='Synonym'
        thesaurus={synonyms}
      />
    </StyledContainer>
  );
}

export default Thesaurus;

const StyledContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
  margin-block: 2rem;
`;
