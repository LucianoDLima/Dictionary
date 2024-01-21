import Word from './Word';
import WordMeaning from './WordMeaning';
import { useDictionaryContext } from '../../hooks/useDictionary';
import styled from 'styled-components';
import Error from '../Error';

/**
 *  Wrapper for the components that deal with the dictionary API data usage
 *
 * @returns {JSX.Element} - Only renders if dictionary array is not empty
 */

function Body() {
  const { dictionary } = useDictionaryContext();

  return (
    <>
      {dictionary ? (
        <StyledContainer>
          <Word />
          <WordMeaning />
        </StyledContainer>
      ) : dictionary === undefined ? null : (
        <Error />
      )}
    </>
  );
}

export default Body;

const StyledContainer = styled.main`
  margin-inline: auto;
  max-width: var(--w-max-width);
  padding-bottom: 3rem;
  padding-inline: var(--p-mobile);
`;
