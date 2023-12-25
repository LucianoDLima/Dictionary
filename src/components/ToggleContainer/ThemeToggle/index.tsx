import styled from 'styled-components';
import { useTheme, useThemeUpdate } from '../../../hooks/useTheme';

function ThemeToggle() {
  const { darkTheme } = useTheme();
  const toggleTheme = useThemeUpdate();

  /**
   * Change theme when pressing enter key
   *
   * @param e - Enter key
   */
  function handleKeyPressThemeChange(e: React.KeyboardEvent<HTMLButtonElement>): void {
    if (e.key === 'Enter') {
      toggleTheme();
    }
  }

  return (
    <StyledContainer>
      <StyledRectangle
        onClick={toggleTheme}
        onKeyUp={() => handleKeyPressThemeChange}
        direction={darkTheme ? '60%' : '10%'}
      >
        <p
          className='screen-reader'
        >
          Theme Switch
        </p>
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

const StyledContainer = styled.span`
  display: flex;
  align-items: center;
  gap: 0.5rem;
`;

const StyledRectangle = styled.button<{ direction: string }>`
  position: relative;
  width: 2.35rem;
  padding: 0.55rem;
  border-radius: 5rem;
  background-color: var(--clr-bg-toggle);
  cursor: pointer;

  &::after {
    --circle-size: 0.75rem;
    content: '';
    position: absolute;
    width: var(--circle-size);
    height: var(--circle-size);
    background-color: white;
    border-radius: 50%;
    top: 50%;
    transform: translateY(-50%);
    left: ${(props) => props.direction};
    transition: 250ms;
  }
`;

const StyledMoon = styled.svg`
  --moon-size: 1.375rem;
  width: var(--moon-size);
  height: var(--moon-size);

  path {
    stroke: var(--clr-bg-toggle);
  }
`;
