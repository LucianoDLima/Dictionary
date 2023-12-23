import { ChangeEvent, useEffect, useState } from 'react';
import styled from 'styled-components';
import { BaseStyle } from '../../../styles/GlobalStyles';

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

  return (
    <>
      <BaseStyle selectedFont={font} />

      <label
        className='screen-reader'
        htmlFor='select'
      >
        Change font family
      </label>

      <StyledContainer>
        <StyledSelect
          id='select'
          value={font}
          onChange={changeFontFamily}
        >
          <option value='var(--fm-primary)'>Sans Serif</option>
          <option value='var(--fm-secondary)'>Serif</option>
          <option value='var(--fm-tertiary)'>Mono</option>
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
  position: relative;
  display: flex;
  align-items: center;
  width: 6.125rem;
`;

const StyledArrow = styled.svg`
  position: absolute;
  top: 50%;
  right: 0;
  transform: translateY(-50%);
  width: 0.813rem;
  height: 0.563rem;
  pointer-events: none;

  path {
    stroke: var(--clr-accent-purple);
  }
`;

const StyledSelect = styled.select`
  width: 100%;
  height: 100%;
  -webkit-appearance: none;
  -moz-appearance: none;
  appearance: none;
  font-weight: 700;

  option {
    background-color: var(--clr-bg-secondary);
    font-weight: inherit;
  }
`;
