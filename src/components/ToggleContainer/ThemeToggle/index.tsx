import styled from 'styled-components';
import { useTheme, useThemeUpdate } from '../../../hooks/useTheme';
import useIsMobile from '../../../hooks/useScreenSize';

function ThemeToggle() {
  const { darkTheme } = useTheme();
  const toggleTheme = useThemeUpdate();
  const { isMobile } = useIsMobile();

  const mobileToggle =
    'M52 10.449C51.9985 12.8283 52.8017 15.1383 54.2791 17.0033C55.7566 18.8683 57.8214 20.1788 60.138 20.7218C62.4545 21.2647 64.8866 21.0082 67.039 19.994C69.1912 18.9797 70.9373 17.2673 71.9931 15.1352C62.5442 15.1352 57.858 10.4479 57.858 1C56.0984 1.87311 54.6177 3.22033 53.5827 4.88981C52.5476 6.5593 51.9995 8.48469 52 10.449Z';
  const desktopToggle =
    'M60 10.449C59.9985 12.8283 60.8017 15.1383 62.2791 17.0033C63.7566 18.8683 65.8214 20.1788 68.138 20.7218C70.4545 21.2647 72.8866 21.0082 75.039 19.994C77.1912 18.9797 78.9373 17.2673 79.9931 15.1352C70.5442 15.1352 65.858 10.4479 65.858 1C64.0984 1.87311 62.6177 3.22033 61.5827 4.88981C60.5476 6.5593 59.9995 8.48469 60 10.449Z';

  return (
    <StyledContainer>
      <StyledToggle
        xmlns='http://www.w3.org/2000/svg'
        viewBox='0 0 81 22'
        fill='none'
      >
        <rect
          y='1'
          rx='10'
          onClick={toggleTheme}
        />
        <circle
          cx={darkTheme ? '30' : '10'}
          cy='11'
          r='7'
        />
        <path
          d={isMobile ? mobileToggle : desktopToggle}
          strokeWidth='1.5'
          strokeLinecap='round'
          strokeLinejoin='round'
        />
      </StyledToggle>
    </StyledContainer>
  );
}

export default ThemeToggle;

const StyledContainer = styled.div`
  display: flex;
`;

const StyledToggle = styled.svg`
  width: 5.08rem;
  height: 1.295rem;

  rect {
    width: 2.5rem;
    height: 1.25rem;
    fill: var(--clr-bg-toggle);
    cursor: pointer;
  }

  circle {
    fill: var(--clr-button-toggle);
    transition: 250ms;
    pointer-events: none;
  }

  path {
    fill-rule: evenodd;
    clip-rule: evenodd;
    stroke: var(--clr-bg-toggle);
  }
`;
