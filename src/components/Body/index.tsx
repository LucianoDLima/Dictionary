import Word from './Word';
import Meaning from './Meaning';
import { useDictionaryContext } from '../../hooks/useDictionary';
import styled from 'styled-components';

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
`;
