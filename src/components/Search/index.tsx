import styled from 'styled-components';

function Search() {
  return (
    <StyledContainer>
      <StyledInput
        type='text'
        id='search'
      />

      <label
        className='screen-reader'
        htmlFor='search'
      >
        Search input
      </label>

      <StyledSearchIcon
        xmlns='http://www.w3.org/2000/svg'
        viewBox='0 0 18 18'
      >
        <path
          fill='none'
          strokeLinecap='round'
          strokeLinejoin='round'
          strokeWidth='1.5'
          d='m12.663 12.663 3.887 3.887M1 7.664a6.665 6.665 0 1 0 13.33 0 6.665 6.665 0 0 0-13.33 0Z'
        />
      </StyledSearchIcon>
    </StyledContainer>
  );
}

export default Search;

const StyledContainer = styled.div`
  position: relative;
  display: flex;
  padding-inline: var(--p-mobile);
  max-width: var(--w-max-width);
  margin-inline: auto;
`;

const StyledInput = styled.input`
  width: 100%;
  padding: 1rem;
  color: inherit;
  font-family: inherit;
  border: unset;
  border-radius: 1rem;
  background-color: var(--clr-bg-secondary);
`;

const StyledSearchIcon = styled.svg`
  --search-icon-width: 1.125rem;
  position: absolute;
  width: var(--search-icon-width);
  height: var(--search-icon-width);
  right: 3rem;
  top: 50%;
  transform: translate(10%, -50%);
  pointer-events: none;

  path {
    stroke: var(--clr-accent-purple);
  }
`;
