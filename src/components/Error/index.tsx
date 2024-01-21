import styled from 'styled-components';

function Error() {
  return (
    <StyledContainer>
      <img></img>
      <StyledTitle>No definitions found</StyledTitle>
      <StyledMessage>Sorry pal, we couldn't find definitions for the word you were looking for. You can try the search again at later time or head to the web instead.</StyledMessage>
    </StyledContainer>
  );
}

export default Error;

const StyledContainer = styled.div`
  max-width: var(--w-max-width);
  margin-inline: auto;
  padding-inline: var(--p-mobile);
  text-align: center;

  * + * {
    margin-bottom: 1rem;
  }
`;

const StyledTitle = styled.h2`
  font-size: var(--fs-heading-S);
`

const StyledMessage = styled.p`
  font-size: var(--fs-body-S);
`