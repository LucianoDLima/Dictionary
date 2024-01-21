import styled, { keyframes } from 'styled-components';

/**
 * Loading animation when fetching data
 *
 * @returns {JSX.Element}
 */
function Loading() {
  return (
    <LoadingPulse>
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

const LoadingPulse = styled.div`
  --pulse-size: 1.25rem;
  --pulse-timing: 160ms;

  margin-inline: auto;
  width: 4.5rem;
  display: flex;
  justify-content: space-between;
  margin-top: 1rem;

  span {
    height: var(--pulse-size);
    width: var(--pulse-size);
    border-radius: 50%;
    background: var(--clr-accent);
    animation: ${pulsate} 1.25s infinite ease-in-out;
    top: 0;

    &:nth-child(2) {
      animation-delay: var(--pulse-timing);
    }

    &:nth-child(3) {
      animation-delay: calc(var(--pulse-timing) * 2);
    }
  }
`;
