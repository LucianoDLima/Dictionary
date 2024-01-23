import styled from 'styled-components';
import { device } from '../../styles/MediaQuery';

/**
 * Display the logo of the project
 *
 * @returns {JSX.Element}
 */
function Logo() {
  return (
    <StyledContainer>
      <img
        src='images/logo.svg'
        alt='Dictionary'
      />
    </StyledContainer>
  );
}

export default Logo;

const StyledContainer = styled.div`
  display: flex;
  max-width: 1.75rem;

  @media ${device.tablet} {
    max-width: 2rem;
  }
`;
