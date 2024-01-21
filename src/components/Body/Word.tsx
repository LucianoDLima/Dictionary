import styled from 'styled-components';
import { device } from '../../styles/MediaQuery';
import { useDictionaryContext } from '../../hooks/useDictionary';
import AudioButton from './AudioButton';

/**
 * Display the container that holds the given word, its pronunciation button and phonetic writing
 *
 * @returns {JSX.Element}
 */

function Word() {
  const { dictionary } = useDictionaryContext();

  return (
    <StyledContainer>
      <StyledHeading>{dictionary[0].word}</StyledHeading>

      <AudioButton />
    </StyledContainer>
  );
}

export default Word;

const StyledContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  margin-block: 1.5rem;
  margin-inline: auto;
  max-width: var(--w-max-width);
  word-wrap: break-word;
`;

const StyledHeading = styled.h2`
  font-size: var(--fs-heading-L);
  text-transform: lowercase;

  @media ${device.tablet} {
    font-size: var(--fs-heading-XL);
  }
`;
