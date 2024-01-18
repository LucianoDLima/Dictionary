import Word from './Word';
import Meaning from './DataRenderer';
import { useDictionaryContext } from '../../hooks/useDictionary';
import styled from 'styled-components';

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
          <div>
            <Meaning />
          </div>
        </StyledContainer>
      ) : null}
    </>
  );
}

export default Body;

const StyledContainer = styled.main`
  max-width: var(--w-max-width);
  margin-inline: auto;
  padding-inline: var(--p-mobile);
  padding-bottom: 3rem;
`;
