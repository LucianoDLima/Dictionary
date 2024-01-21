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

      <StyledSubTitle as='h5'>Source</StyledSubTitle>

      <StyledUrlWrapper>
        <StyledUrl
          href={url}
          target='_blank'
        >
          {url}
        </StyledUrl>

        <img
          src='images/icon-new-window.svg'
          alt='New window'
        />
      </StyledUrlWrapper>
    </div>
  );
}

export default SourceUrl;

const StyledSubTitle = styled(StyledHeading)`
  font-size: var(--fs-body-XS);
  margin-bottom: 0.5rem;
`;

const StyledUrlWrapper = styled.div`
  word-break: break-all;
  align-items: center;
  display: flex;
  gap: 0.5rem;

  img {
    width: 0.75rem;
  }
`;

const StyledUrl = styled.a`
  font-size: var(--fs-body-XS);
  color: var(--clr-body-primary);
  overflow-wrap: break-all;
`;
