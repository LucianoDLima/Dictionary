import styled from 'styled-components';
import { DictionaryInterface, useDictionaryContext } from '../../../hooks/useDictionary';
import PartOfSpeech from '../PartOfSpeech';

function Meaning() {
  const { dictionary } = useDictionaryContext();

  return (
    <>
      {dictionary.map((dictionaryData: DictionaryInterface, index: number) => (
        <div key={index}>
          {dictionaryData.meanings.map((meaning, dataIndex) => (
            <StyledContainer key={dataIndex}>
              <PartOfSpeech speech={meaning.partOfSpeech} />
              <StyledHeader>Meaning</StyledHeader>

              <ul>
                {meaning.definitions.map((definition, definitionIndex) => (
                  <li key={definitionIndex}>
                    <div>
                      <StyledDefinition>{definition.definition}</StyledDefinition>

                      {definition.example ? <StyledExample as='blockquote'>"{definition.example}"</StyledExample> : null}
                    </div>
                  </li>
                ))}
              </ul>

              {meaning.antonyms.length ? (
                <StyledSubContainer>
                  <StyledSubHeader as='p'>Antonyms</StyledSubHeader>
                  {meaning.antonyms.map((antonym, antonymIndex) => (
                    <p key={antonymIndex}>
                      {antonym}
                      {antonymIndex === meaning.antonyms.length - 1 ? null : ','}
                    </p>
                  ))}
                </StyledSubContainer>
              ) : null}

              {meaning.synonyms.length ? (
                <StyledSubContainer>
                  <StyledSubHeader as='p'>Synonyms</StyledSubHeader>
                  {meaning.synonyms.map((synonym, synonymIndex) => (
                    <p key={synonymIndex}>
                      {synonym}
                      {synonymIndex === meaning.synonyms.length - 1 ? null : ','}
                    </p>
                  ))}
                </StyledSubContainer>
              ) : null}
            </StyledContainer>
          ))}
        </div>
      ))}
    </>
  );
}

export default Meaning;

const StyledContainer = styled.div`
  li {
    color: var(--clr-accent);
    margin-inline: 1.2rem;

    * {
      margin-bottom: 0.8rem;
    }
  }
`;

const StyledDefinition = styled.p`
  color: var(--clr-body-primary);
  font-size: var(--fs-body-S);
`;

const StyledExample = styled(StyledDefinition)`
  color: var(--clr-body-secondary);
`;

const StyledHeader = styled.h3`
  color: var(--clr-body-secondary);
  font-size: var(--fs-default);
  font-weight: 400;
  margin-bottom: 1rem;
`;

const StyledSubContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
  margin-block: 2rem 1rem;

  p:not(:first-child) {
    color: var(--clr-accent);
    cursor: pointer;
  }
`;

const StyledSubHeader = styled(StyledHeader)`
  margin-bottom: unset;
  margin-right: 1rem;
`;
