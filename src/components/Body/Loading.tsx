import styled, { css, keyframes } from 'styled-components';

type LoadingProps = {
  isAccent: boolean;
};

/**
 * Loading animation when fetching data
 *
 * @returns {JSX.Element}
 */
function Loading({ isAccent }: LoadingProps) {
  return (
    <LoadingPulse $isAccent={isAccent}>
      <span></span>
      <span></span>
      <span></span>
    </LoadingPulse>
  );
}

export default Loading;

const pulsate = keyframes`
	0%,
	80%,
	100% {
		transform: scale(0);
	}
	40% {
		transform: scale(1);
	}
`;

const LoadingPulse = styled.div<any>`
  --pulse-size: 1.25rem;
  --pulse-timing: 160ms;

  margin-inline: auto;
  width: 4.5rem;
  display: flex;
  justify-content: space-between;

  span {
    animation: ${pulsate} 1.25s infinite ease-in-out;
    background: var(--white);
    border-radius: 50%;
    height: var(--pulse-size);
    top: 0;
    width: var(--pulse-size);
    
    ${(props) =>
      props.$isAccent &&
      css`
        background: var(--clr-accent);
        text-align: left;
      `}

    &:nth-child(2) {
      animation-delay: var(--pulse-timing);
    }

    &:nth-child(3) {
      animation-delay: calc(var(--pulse-timing) * 2);
    }
  }
`;
