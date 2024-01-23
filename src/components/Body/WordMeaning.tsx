import styled from 'styled-components';
import { useDictionaryContext } from '../../context/useDictionary';
import SeparatorLine from './SeparatorLine';
import SourceUrl from './SourceUrl';
import { StyledHeading } from '../../styles/SharedStyles';
import DefinitionList from './DefinitionList';
import MeaningTerm from './MeaningTerm';
import { DictionaryType } from '../../types';
import { device } from '../../styles/MediaQuery';

/**
 * Render and distribute data fetched from the API to other components
 *
 * @returns {JSX.Element}
 */

function WordMeaning() {
  const { dictionary } = useDictionaryContext();

  return (
    <>
      {dictionary.map((dictionaryData: DictionaryType) =>
        dictionaryData.meanings.map((meaning, dataIndex) => (
          <StyledContainer key={dataIndex}>
            <SeparatorLine text={meaning.partOfSpeech} />

            <StyledTitle as='h4'>Meaning</StyledTitle>

            <DefinitionList definitions={meaning.definitions} />

            {meaning.antonyms.length || meaning.synonyms.length ? (
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
            ) : null}
          </StyledContainer>
        ))
      )}
      <SourceUrl url={dictionary[0].sourceUrls[0]} />
    </>
  );
}

export default WordMeaning;

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

  @media ${device.tablet} {
    font-size: var(--fs-heading-S);
  }
`;

const StyledTermsContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
  margin-block: 2rem;
`;
