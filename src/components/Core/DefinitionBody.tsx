import { useDictionaryContext } from '../../context/useDictionary';
import SeparatorLine from '../Common/SeparatorLine';
import SourceUrl from '../Common/SourceUrl';
import DefinitionList from '../Common/Definition';
import { DictionaryType } from '../../types';
import SubTitle from '../Common/SubTitle';
import Thesaurus from '../Common/Thesaurus';
import styled from 'styled-components';

/**
 * Display and distribute data fetched from the API to all other components
 *
 * @returns {JSX.Element}
 */
function DefinitionBody() {
  const { dictionary } = useDictionaryContext();

  return (
    <ul>
      {dictionary.map((dictionaryData: DictionaryType) =>
        dictionaryData.meanings.map((meaning, dataIndex) => (
          <li key={dataIndex}>
            <SeparatorLine text={meaning.partOfSpeech} />

            <StyledWrapper>
              <SubTitle
                title='Meaning'
                heading='h4'
              />
            </StyledWrapper>

            <DefinitionList definitions={meaning.definitions} />

            {meaning.antonyms.length || meaning.synonyms.length ? (
              <Thesaurus
                antonyms={meaning.antonyms}
                synonyms={meaning.synonyms}
              />
            ) : null}
          </li>
        ))
      )}
      <SourceUrl url={dictionary[0].sourceUrls[0]} />
    </ul>
  );
}

export default DefinitionBody;

const StyledWrapper = styled.div`
  margin-bottom: 1rem;
`;
