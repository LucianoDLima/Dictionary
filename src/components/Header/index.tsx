import styled from 'styled-components';
import { device } from '../../styles/MediaQuery';
import ThemeContainer from './ToggleContainer';

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
  font-size: var(--fs-body-XS);
  justify-content: space-between;
  margin-block: var(--p-mobile);
  margin-inline: auto;
  max-width: var(--w-max-width);
  padding-inline: var(--p-mobile);

  & > div:first-child {
    display: flex;
    max-width: 1.75rem;

    @media ${device.tablet} {
      max-width: 2rem;
    }
  }
`;
