import styled from 'styled-components';
import ThemeContainer from '../ToggleContainer';

function Header() {
  return (
    <StyledHeader>
      <div>
        <img
          src='images/logo.svg'
          alt='Dictionary'
        />
      </div>

      <ThemeContainer />
    </StyledHeader>
  );
}

export default Header;

const StyledHeader = styled.header`
  display: flex;
  justify-content: space-between;
  padding-inline: var(--p-mobile);
  margin-block: var(--p-mobile);
  font-size: var(--fs-body-S);
  max-width: var(--w-max-width);
  margin-inline: auto;

  & > div:first-child {
    display: flex;
    max-width: 1.75rem;
    max-height: 2rem;
  }
`;
