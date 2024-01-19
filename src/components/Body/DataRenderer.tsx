import styled from 'styled-components';
import { useDictionaryContext } from '../../hooks/useDictionary';
import SeparatorLine from './SeparatorLine';
import SourceUrl from './SourceUrl';
import { StyledHeading } from '../../styles/SharedStyles';
import DefinitionList from './DefinitionList';
import MeaningTerm from './MeaningTerm';
import { DictionaryType } from '../../types';

/**
 * Render and distribute data fetched from the API to other components
 *
 * @returns {JSX.Element}
 */

function DataRenderer() {
  const { dictionary } = useDictionaryContext();

  return (
    <>
      {dictionary.map((dictionaryData: DictionaryType, index: number) => (
        <div key={index}>
          {dictionaryData.meanings.map((meaning, dataIndex) => (
            <StyledContainer key={dataIndex}>
              <SeparatorLine text={meaning.partOfSpeech} />

              <StyledTitle as='h3'>Meaning</StyledTitle>

              <DefinitionList definitions={meaning.definitions} />

              <StyledTermsContainer>
                <MeaningTerm
                  title='Antonym'
                  terms={meaning.antonyms}
                />

                <MeaningTerm
                  title='Synonym'
                  terms={meaning.synonyms}
                />
              </StyledTermsContainer>
            </StyledContainer>
          ))}
        </div>
      ))}
      <SourceUrl url={dictionary[0].sourceUrls[0]} />
    </>
  );
}

export default DataRenderer;

const StyledContainer = styled.div`
  li {
    color: var(--clr-accent);
    margin-inline: 1.2rem;

    * {
      margin-bottom: 0.8rem;
    }
  }
`;

const StyledTitle = styled(StyledHeading)`
  margin-bottom: 1rem;
`;

const StyledTermsContainer = styled.div`
  margin-block: 2rem;
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
`;
