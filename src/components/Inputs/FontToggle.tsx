import { ChangeEvent, useEffect, useState } from 'react';
import styled from 'styled-components';
import { BaseStyle } from '../../styles/GlobalStyles';

/**
 *  Handle and display the select font options
 *
 * @returns {JSX.Element} - Only renders if dictionary array is not empty
 */

function FontToggle() {
  const [font, setFont] = useState('');

  /**
   * Change font and save it locally
   *
   * @param e - Fire on change
   */
  function changeFontFamily(e: ChangeEvent<HTMLSelectElement>): void {
    const selectedFont = e.target.value;

    setFont(selectedFont);
    localStorage.setItem('font', selectedFont);
  }

  /**
   * Set the initial font if it's user's first time or they never changed the font
   */
  useEffect(() => {
    const savedFont = localStorage.getItem('font');

    if (savedFont !== null) {
      setFont(savedFont);
    } else {
      setFont('var(--fm-primary)');
    }
  }, [font]);

  const fontOptions = [
    { value: 'var(--fm-primary)', label: 'Sans Serif' },
    { value: 'var(--fm-secondary)', label: 'Serif' },
    { value: 'var(--fm-tertiary)', label: 'Mono' },
  ];

  return (
    <>
      <BaseStyle selectedFont={font} />

      <StyledContainer>
        <StyledSelect
          id='select'
          value={font}
          onChange={changeFontFamily}
          aria-label='Change font family'
        >
          {fontOptions.map((option, index) => (
            <option
              key={index}
              value={option.value}
            >
              {option.label}
            </option>
          ))}
        </StyledSelect>
        <StyledArrow
          xmlns='http://www.w3.org/2000/svg'
          viewBox='0 0 13 9'
          fill='none'
        >
          <path
            d='M1 1L7 7L13 1'
            strokeWidth='1.5'
          />
        </StyledArrow>
      </StyledContainer>
    </>
  );
}

export default FontToggle;

const StyledContainer = styled.div`
  --font-selector: 6.125rem;

  align-items: center;
  display: flex;
  position: relative;
  width: var(--font-selector);
`;

const StyledArrow = styled.svg`
  pointer-events: none;
  position: absolute;
  right: 0;
  top: 50%;
  transform: translateY(-50%);
  width: 0.813rem;

  path {
    stroke: var(--clr-accent);
  }
`;

const StyledSelect = styled.select`
  -moz-appearance: none;
  -webkit-appearance: none;
  appearance: none;
  font-weight: 700;
  height: 100%;
  width: 100%;

  option {
    background-color: var(--clr-bg-secondary);
    font-weight: inherit;
  }
`;
