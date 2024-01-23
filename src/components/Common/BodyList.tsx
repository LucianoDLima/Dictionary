import styled from 'styled-components';
import DefinitionBody from '../Core/DefinitionBody';
import Word from './Word';

/**
 * Contain the core of the page, including everything that appears once user searches for a word
 *
 * @returns {JSX.Element}
 */
function BodyList() {
  return (
    <StyledContainer>
      <Word />
      <DefinitionBody />
    </StyledContainer>
  );
}

export default BodyList;

const StyledContainer = styled.main`
  margin-inline: auto;
  max-width: var(--w-max-width);
  padding-bottom: 3rem;
  padding-inline: var(--p-mobile);
`;
