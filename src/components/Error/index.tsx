import styled from 'styled-components';
import { useCurrentWordContext } from '../../context/useCurrentWord';
import { device } from '../../styles/MediaQuery';

function Error() {
  const { currentWord } = useCurrentWordContext();

  return (
    <StyledContainer>
      <StyledTitle>No definitions found</StyledTitle>

      <StyledMessage>
        Sorry pal, we couldn't find definitions for the word <span>{currentWord?.toLowerCase()}</span>. You can try the search again at later time or head to
        the web instead.
      </StyledMessage>
    </StyledContainer>
  );
}

export default Error;

const StyledContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  margin-inline: auto;
  max-width: var(--w-max-width);
  padding-inline: var(--p-mobile);
  text-align: center;
`;

const StyledTitle = styled.h2`
  font-size: var(--fs-heading-S);

  @media ${device.tablet} {
    font-size: var(--fs-heading-M);
  }
`;

const StyledMessage = styled.p`
  font-size: var(--fs-body-S);

  @media ${device.tablet} {
    font-size: var(--fs-body-M);
  }

  span {
    font-weight: 700;
    font-style: italic;
    color: var(--clr-accent);
  }
`;
