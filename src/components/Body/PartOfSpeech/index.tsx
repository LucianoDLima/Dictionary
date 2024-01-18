import styled from 'styled-components';

type PartOfSpeechProps = {
  speech: string | null;
}

function PartOfSpeech({speech}: PartOfSpeechProps) {
  return (
    <StyledContainer>
      <p>{speech}</p>
      <span />
    </StyledContainer>
  );
}

export default PartOfSpeech;

const StyledContainer = styled.div`
  align-items: center;
  display: flex;
  gap: 1rem;
  margin-block: 1.75rem;

  p {
    font-size: var(--fs-body-M);
    font-weight: 700;
  }

  span {
    background-color: var(--clr-bg-secondary);
    height: 1px;
    width: 100%;
  }
`;
