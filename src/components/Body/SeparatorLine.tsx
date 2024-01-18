import styled from 'styled-components';

type SeparatorLineProps = {
  text?: string;
};

/**
 * Display a line that separates items
 *
 * @param {SourceUrlProps} props - Optional. If true, the line will not be 100% of its witdth to accomodate the text
 * @returns {JSX.Element}
 */

function SeparatorLine({ text }: SeparatorLineProps) {
  return (
    <StyledContainer>
      {text !== undefined ? <p>{text}</p> : null}
      <span />
    </StyledContainer>
  );
}

export default SeparatorLine;

const StyledContainer = styled.div`
  align-items: center;
  display: flex;
  gap: 1rem;
  margin-block: 1.75rem;

  p {
    font-size: var(--fs-body-M);
    font-weight: 700;
  }

  span {
    background-color: var(--clr-bg-secondary);
    height: 1px;
    width: 100%;
  }
`;
