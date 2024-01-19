import styled from 'styled-components';
import SeparatorLine from './SeparatorLine';
import { StyledHeading } from '../../styles/SharedStyles';

type SourceUrlProps = {
  url: string;
};

/**
 * Display the url source of the given word on the bottom of the page
 *
 * @param {SourceUrlProps} props
 * @returns {JSX.Element}
 */

function SourceUrl({ url }: SourceUrlProps) {
  return (
    <div>
      <SeparatorLine />

      <StyledSubTitle as='p'>Source</StyledSubTitle>

      <StyledUrl
        href={url}
        target='_blank'
      >
        {url}
      </StyledUrl>
    </div>
  );
}

export default SourceUrl;

// TODO: Move the url underline slightly below and add a gradient color when you hover over it, theres a youtube video on it in my history from 2 days ago by kevin

const StyledSubTitle = styled(StyledHeading)`
  margin-bottom: 0.5rem;
`;

const StyledUrl = styled.a`
  color: var(--clr-body-primary);
`;
