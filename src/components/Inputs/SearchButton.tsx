import styled from 'styled-components';

/**
 * Props for the SearchButton
 *
 * @property {() => void} onClick - Event to trigger the data fetching
 */
type SearchButtonProps = {
  onClick: () => void;
};

/**
 * Display the search button
 *
 * @param {SearchButtonProps} props
 * @returns {JSX.Element}
 */
function SearchButton({ onClick }: SearchButtonProps) {
  return (
    <StyledButton
      aria-label='Search'
      onClick={onClick}
    >
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
    </StyledButton>
  );
}

export default SearchButton;

const StyledButton = styled.button`
  align-items: center;
  background-color: var(--clr-accent);
  border-radius: 50%;
  cursor: pointer;
  display: flex;
  justify-content: center;
  padding: var(--input-padding);
  right: var(--p-mobile);
  transition: var(--spe-quick);

  &:hover {
    opacity: 0.9;
  }

  &:active {
    opacity: 0.8;
  }
`;

const StyledSearchIcon = styled.svg`
  --search-icon-width: var(--input-padding);

  height: var(--search-icon-width);
  pointer-events: none;
  width: var(--search-icon-width);

  path {
    stroke: var(--white);
  }
`;
