import styled from 'styled-components';
import { useDictionaryContext } from '../../context/useDictionary';
import { PhoneticsInterface } from '../../types';
import { device } from '../../styles/MediaQuery';

/**
 * Render the audio buttons only if they have an audio to play
 * Also render the phonetic writing beside the button
 *
 * @returns {JSX.Element}
 */

function AudioButton() {
  const { dictionary } = useDictionaryContext();

  /**
   * Get the last two characters after removing the .mp3 at the end
   *
   * @param text link to the audio
   * @returns {string} last two characters
   */
  function getPhoneticOrigin(text: string): string {
    return text.slice(0, -4).slice(-2).toUpperCase();
  }

  function playAudio(audioUrl: string) {
    const audio = new Audio(audioUrl);

    return audio.play();
  }

  return (
    <StyledContainer>
      {dictionary[0].phonetics.map((phonetic: PhoneticsInterface, index: number) =>
        phonetic.audio !== '' ? (
          <StyledButtonWrapper key={index}>
            <StyledCountry>{getPhoneticOrigin(phonetic.audio)}</StyledCountry>

            <StyledButton
              aria-label='Play pronunciation'
              onClick={() => playAudio(phonetic.audio)}
            >
              <img
                src='images/icon-play.svg'
                alt='Play audio'
              />
            </StyledButton>

            <StyledPronunciation>{phonetic.text}</StyledPronunciation>
          </StyledButtonWrapper>
        ) : null
      )}
    </StyledContainer>
  );
}

export default AudioButton;

const StyledContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;

  @media ${device.tablet} {
    gap: 1.5rem;
  }
`;

const StyledButtonWrapper = styled.div`
  align-items: center;
  display: flex;
  gap: 0.5rem;
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

const StyledCountry = styled.p`
  font-size: var(--fs-body-XS);
  font-style: italic;

  @media ${device.tablet} {
    font-size: var(--fs-body-M);
  }
`;

const StyledPronunciation = styled.p`
  color: var(--clr-accent);
  font-family: sans-serif, var(--fm-auto);
  font-size: var(--fs-body-M);

  @media ${device.tablet} {
    font-size: var(--fs-heading-S);
  }
`;
