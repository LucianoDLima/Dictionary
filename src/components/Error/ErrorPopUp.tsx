import styled from 'styled-components';

type ErrorPopUpProps = {
  opacity: boolean;
};

/**
 * Display error message with a fade-out effect controlled by the prop
 *
 * @param {boolean} opacity - Indicate if the fade-out effect should be applied
 * @returns {JSX.Element}
 */

function ErrorPopUp({ opacity }: ErrorPopUpProps) {
  return (
    <>
      <StyledContainer $opacity={opacity}>
        <StyledErrorMessage>No definitions found!</StyledErrorMessage>
      </StyledContainer>
    </>
  );
}

export default ErrorPopUp;

type ContainerType = {
  $opacity: boolean;
};

const StyledContainer = styled.div<ContainerType>`
  background-color: var(--clr-accent);
  border-radius: 0.5rem;
  bottom: 2rem;
  left: 50%;
  padding: 0.25rem 0.5rem;
  position: absolute;
  text-align: center;
  transform: translateX(-50%);
  transition: opacity var(--spe-very-slow);
  opacity: ${(props) => (props.$opacity ? 0 : 1)};

  &::after {
    content: ' ';
    border: 0.75rem solid;
    border-color: var(--clr-accent) transparent transparent transparent;
    bottom: -1.25rem;
    left: 50%;
    position: absolute;
    transform: translateX(-50%);
  }
`;

const StyledErrorMessage = styled.p`
  color: var(--clr-outline-accessibility);
  font-size: var(--fs-body-XS);
  font-style: italic;
`;
