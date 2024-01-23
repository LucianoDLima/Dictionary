import styled from 'styled-components';
import { useTheme, useThemeUpdate } from '../../context/useTheme';

/**
 *  Handle the logic given by the useTheme context to switch between light and dark themes
 *
 * @returns {JSX.Element}
 */

function ThemeToggle() {
  const { darkTheme } = useTheme();
  const toggleTheme = useThemeUpdate();

  return (
    <StyledContainer>
      <StyledRectangle
        onClick={toggleTheme}
        direction={darkTheme ? '60%' : '10%'}
      >
        <p className='screen-reader'>Theme Switch</p>
      </StyledRectangle>

      <StyledMoon
        xmlns='http://www.w3.org/2000/svg'
        viewBox='0 0 22 22'
      >
        <path
          fill='none'
          strokeLinecap='round'
          strokeLinejoin='round'
          strokeWidth='1.5'
          d='M1 10.449a10.544 10.544 0 0 0 19.993 4.686C11.544 15.135 6.858 10.448 6.858 1A10.545 10.545 0 0 0 1 10.449Z'
        />
      </StyledMoon>
    </StyledContainer>
  );
}

export default ThemeToggle;

type DirectionType = {
  direction: '60%' | '10%';
};

const StyledContainer = styled.span`
  align-items: center;
  display: flex;
  gap: 0.5rem;
`;

const StyledRectangle = styled.button<DirectionType>`
  background-color: var(--clr-bg-toggle);
  border-radius: 5rem;
  cursor: pointer;
  padding: 0.55rem;
  position: relative;
  width: 2.35rem;

  &::after {
    --circle-size: 0.75rem;
    content: '';

    background-color: white;
    border-radius: 50%;
    height: var(--circle-size);
    left: ${(props) => props.direction};
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    transition: 250ms;
    width: var(--circle-size);
  }
`;

const StyledMoon = styled.svg`
  --moon-size: 1.375rem;

  height: var(--moon-size);
  width: var(--moon-size);

  path {
    stroke: var(--clr-bg-toggle);
  }
`;
