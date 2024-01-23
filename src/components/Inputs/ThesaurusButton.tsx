import styled, { css } from 'styled-components';
import { device } from '../../styles/MediaQuery';
import { MouseEvent } from 'react';

/**
 * Props for the ThesaurusButton component
 *
 * @property {(e: MouseEvent) => void} onClick - Button to search for the word property
 * @property {string} word - The word with one of the similiar/opposite meanings
 */
type ThesaurusButtonProps = {
  onClick: (e: MouseEvent) => void;
  word: string;
};

/**
 * Display a button that will look like a normal word instead
 *
 * @param {ThesaurusButtonProps} props
 * @returns {JSX.Element}
 */
function ThesaurusButton({ onClick, word }: ThesaurusButtonProps) {
  return <StyledButton onClick={onClick}>{word}</StyledButton>;
}

export default ThesaurusButton;

const underlineAnimation = css`
  background-image: linear-gradient(90deg, var(--clr-accent), var(--clr-accent));
  background-position: left 1.25em;
  background-repeat: no-repeat;
  background-size: 0% 15px;
  padding-block-end: 0.25em;
  transition: background-size var(--spe-quick), opacity var(--spe-quick) ease-in;

  &:hover,
  &:focus {
    background-size: 100% 3px;
    opacity: 0.9;
  }
`;

const StyledButton = styled.button`
  ${underlineAnimation}
  color: var(--clr-accent);
  cursor: pointer;

  @media ${device.tablet} {
    font-size: var(--fs-heading-S);
  }
`;
