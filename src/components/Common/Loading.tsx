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

  display: flex;
  justify-content: space-between;
  margin-inline: auto;
  width: 4.5rem;

  span {
    animation: ${pulsate} 1.25s infinite ease-in-out;
    background: var(--clr-accent);
    border-radius: 50%;
    height: var(--pulse-size);
    top: 0;
    width: var(--pulse-size);

    &:nth-child(2) {
      animation-delay: var(--pulse-timing);
    }

    &:nth-child(3) {
      animation-delay: calc(var(--pulse-timing) * 2);
    }
  }
`;
