import styled from 'styled-components';
import { device } from '../../styles/MediaQuery';

type HeadingType = 1 | 2 | 3 | 4 | 5 | 6;

type SubTitleProps = {
  title: string;
  heading: `h${HeadingType}`;
};

/**
 * Subtitle that can become any heading available
 *
 * @param {SubTitleProps} props
 * @returns {JSX.Element}
 */
function SubTitle({ title, heading }: SubTitleProps) {
  return <StyledTitle as={heading}>{title}</StyledTitle>;
}

export default SubTitle;

const StyledTitle = styled.span`
  color: var(--clr-body-secondary);
  font-size: var(--fs-default);
  font-weight: 400;

  @media ${device.tablet} {
    font-size: var(--fs-heading-S);
  }
`;
