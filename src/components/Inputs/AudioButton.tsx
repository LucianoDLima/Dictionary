import styled from 'styled-components';
import { useDictionaryContext } from '../../context/useDictionary';
import { PhoneticsInterface } from '../../types';
import { device } from '../../styles/MediaQuery';
import AudioButtonList from './AudioButtonList';

/**
 * Display the buttons to play audio related to the word searched
 *
 * @returns {JSX.Element}
 */
function AudioButton() {
  const { dictionary } = useDictionaryContext();

  /**
   * Get the last two characters after removing the .mp3 at the end
   *
   * @param link link to the audio
   * @returns {string} last two characters
   */
  function getPhoneticOrigin(link: string): string {
    return link.slice(0, -4).slice(-2).toUpperCase();
  }

  function playAudio(audioUrl: string): Promise<void> {
    const audio = new Audio(audioUrl);

    return audio.play();
  }

  return (
    <StyledContainer>
      {dictionary[0].phonetics.map((phonetic: PhoneticsInterface, index: number) =>
        phonetic.audio !== '' ? (
          <AudioButtonList
            key={index}
            phoneticOrigin={getPhoneticOrigin(phonetic.audio)}
            onClick={() => playAudio(phonetic.audio)}
            phoneticWriting={phonetic.text}
          />
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
