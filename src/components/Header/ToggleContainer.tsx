import styled from 'styled-components';
import ThemeToggle from './ThemeToggle';
import FontToggle from './FontToggle';

/**
 * Wrapper for the Font and Theme toggles
 *
 * @returns {JSX.Element}
 */

function ThemeContainer() {
  return (
    <StyledContainer>
      <FontToggle />

      <StyledLine />

      <StyledButtonContainer>
        <ThemeToggle />
      </StyledButtonContainer>
    </StyledContainer>
  );
}

export default ThemeContainer;

const StyledContainer = styled.div`
  display: flex;
  gap: 1rem;
`;

const StyledLine = styled.hr`
  border: 1px solid var(--mercury);
`;

const StyledButtonContainer = styled.div`
  align-items: center;
  display: flex;
`;
