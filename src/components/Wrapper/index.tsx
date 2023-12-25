import styled from 'styled-components';

type WrapperType = {
  children: React.ReactNode;
};

function Wrapper({ children }: WrapperType) {
  return <StyledContainer>{children}</StyledContainer>;
}

export default Wrapper;

const StyledContainer = styled.main`
  max-width: var(--w-max-width);
  margin-inline: auto;
  padding-inline: var(--p-mobile);
`;
