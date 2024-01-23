import styled from 'styled-components';
import { device } from '../../styles/MediaQuery';
import SubTitle from './SubTitle';

/**
 * Props for the SeparatorLine component
 *
 * @property {string} text - If no text is specified, the line width will
 * take up 100% of the space provided
 */
type SeparatorLineProps = {
  text?: string;
};

/**
 * Display a line that separates items
 *
 * @param {SourceUrlProps} props
 * @returns {JSX.Element}
 */
function SeparatorLine({ text }: SeparatorLineProps) {
  return (
    <StyledContainer>
      {text !== undefined ? (
        <SubTitle
          title={text}
          heading='h3'
        />
      ) : null}
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
