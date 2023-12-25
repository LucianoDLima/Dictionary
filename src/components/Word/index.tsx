import styled from 'styled-components';
import { device } from '../../styles/MediaQuery';

function Word() {
  return (
    <StyledContainer>
      <div>
        <StyledHeading>Keyboard</StyledHeading>
        <StyledPronunciation>/ˈkiːbɔːd/</StyledPronunciation>
      </div>
      <button >
        <img
          src='images/icon-play.svg'
          alt='Play button'
        />
      </button>
    </StyledContainer>
  );
}

export default Word;

const StyledContainer = styled.div`
  display: flex;
  justify-content: space-between;
  max-width: var(--w-max-width);
  margin-inline: auto;

  button {
    cursor: pointer;

    img {
      --play-button: 3rem;
      max-width: var(--play-button);
    }
  }
`;

const StyledHeading = styled.p`
  font-size: var(--fs-heading-L);
  text-transform: lowercase;

  @media ${device.tablet} {
    font-size: var(--fs-heading-XL);
  }
`;

const StyledPronunciation = styled.p`
  font-family: sans-serif, var(--fm-auto);
  font-size: var(--fs-body-M);
  color: var(--clr-accent);
`;
