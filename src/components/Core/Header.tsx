import styled from 'styled-components';
import ThemeContainer from '../Common/ToggleContainer';
import Logo from '../Common/Logo';

/**
 * Display the header of the page
 *
 * @returns {JSX.Element}
 */
function Header() {
  return (
    <StyledHeader>
      <Logo />

      <ThemeContainer />
    </StyledHeader>
  );
}

export default Header;

const StyledHeader = styled.header`
  display: flex;
  font-size: var(--fs-body-XS);
  justify-content: space-between;
  margin-block: var(--p-mobile);
  margin-inline: auto;
  max-width: var(--w-max-width);
  padding-inline: var(--p-mobile);
`;
