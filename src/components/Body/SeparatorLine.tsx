import styled from 'styled-components';
import { device } from '../../styles/MediaQuery';

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
      {text !== undefined ? <h3>{text}</h3> : null}
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

  h3 {
    font-size: var(--fs-body-M);

    @media ${device.tablet} {
      font-size: var(--fs-heading-M);
    }
  }

  span {
    background-color: var(--clr-bg-tertiary);
    height: 1px;
    width: 100%;
  }
`;
