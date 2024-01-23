import styled from 'styled-components';
import { device } from '../../styles/MediaQuery';

/**
 * Props for the AudioButtonList component
 * 
 * @property {string} phoneticOrigin - 2 digit country code. Example: US for the United States
 * @property {() => void} onClick - Button to play audio with the word pronunciation
 * @property {string} phoneticWriting - Writing of how the word is pronounced
 */
type AudioButtonListProps = {
  phoneticOrigin: string;
  onClick: () => void;
  phoneticWriting: string;
};

/**
 * Contain the buttons with descriptive additions below the searched word
 *
 * @returns {JSX.Element}
 */
function AudioButtonList({ phoneticOrigin, onClick, phoneticWriting }: AudioButtonListProps) {
  return (
    <StyledContainer>
      <StyledOrigin>{phoneticOrigin}</StyledOrigin>

      <StyledButton
        aria-label='Play pronunciation'
        onClick={onClick}
      >
        <img
          src='images/icon-play.svg'
          alt='Play audio'
        />
      </StyledButton>

      <StyledPronunciation>{phoneticWriting}</StyledPronunciation>
    </StyledContainer>
  );
}

export default AudioButtonList;

const StyledContainer = styled.div`
  align-items: center;
  display: flex;
  gap: 0.5rem;
`;

const StyledOrigin = styled.p`
  font-size: var(--fs-body-XS);
  font-style: italic;

  @media ${device.tablet} {
    font-size: var(--fs-default);
  }
`;

const StyledButton = styled.button`
  cursor: pointer;
  display: flex;

  img {
    --play-button: 1.5rem;
    max-width: var(--play-button);

    @media ${device.tablet} {
      --play-button: 2rem;
    }
  }
`;

const StyledPronunciation = styled.p`
  color: var(--clr-accent);
  font-family: sans-serif, var(--fm-auto);
  font-size: var(--fs-body-M);

  @media ${device.tablet} {
    font-size: var(--fs-body-M);
  }
`;
