import styled from 'styled-components';

type PartOfSpeechType = {
  speech: string;
};

function PartOfSpeech({ speech }: PartOfSpeechType) {
  return (
    <StyledContainer>
      <p>{speech}</p>
      <span />
    </StyledContainer>
  );
}

export default PartOfSpeech;

const StyledContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;

  span {
    width: 100%;
    background-color: var(--clr-bg-secondary);
    height: 1px;
  }
`;
