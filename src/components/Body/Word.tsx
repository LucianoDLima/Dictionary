import styled from 'styled-components';
import { device } from '../../styles/MediaQuery';
import { useDictionaryContext } from '../../hooks/useDictionary';

/**
 * Display the container that holds the given word, its pronunciation button and phonetic writing
 *
 * @returns {JSX.Element}
 */

function Word() {
  const { dictionary } = useDictionaryContext();

  return (
    <StyledContainer>
      <div>
        <StyledHeading>{dictionary[0].word}</StyledHeading>
        <StyledPronunciation>{dictionary[0].phonetic}</StyledPronunciation>
      </div>

      <button aria-label='Play pronunciation'>
        <img
          src='images/icon-play.svg'
          alt=''
        />
      </button>
    </StyledContainer>
  );
}

export default Word;

const StyledContainer = styled.div`
  align-items: center;
  display: flex;
  justify-content: space-between;
  margin-block: 1.75rem;
  margin-inline: auto;
  max-width: var(--w-max-width);

  button {
    cursor: pointer;

    img {
      --play-button: 3rem;
      max-width: var(--play-button);
    }
  }
`;

const StyledHeading = styled.h2`
  font-size: var(--fs-heading-L);
  text-transform: lowercase;

  @media ${device.tablet} {
    font-size: var(--fs-heading-XL);
  }
`;

const StyledPronunciation = styled.p`
  color: var(--clr-accent);
  font-family: sans-serif, var(--fm-auto);
  font-size: var(--fs-body-M);
`;
