import styled from 'styled-components';
import SeparatorLine from './SeparatorLine';
import { device } from '../../styles/MediaQuery';
import SubTitle from './SubTitle';

type SourceUrlProps = {
  url: string;
};

/**
 * Display the url source of the searched word on the bottom of the page
 *
 * @param {SourceUrlProps} props
 * @returns {JSX.Element}
 */
function SourceUrl({ url }: SourceUrlProps) {
  return (
    <li>
      <SeparatorLine />

      <SubTitle
        title='Source'
        heading='h5'
      />

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
    </li>
  );
}

export default SourceUrl;

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

  @media ${device.tablet} {
    font-size: var(--fs-body-M);
  }
`;
