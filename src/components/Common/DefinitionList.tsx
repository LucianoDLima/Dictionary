import styled from 'styled-components';
import { device } from '../../styles/MediaQuery';

type DefinitionListProps = {
  definition: string;
  example: string | null;
};

/**
 * Display a list of all definitions found, as well as an example if there is one
 *
 * @param {DefinitionListProps} props
 * @returns {JSX.Element}
 */
function DefinitionList({ definition, example }: DefinitionListProps) {
  return (
    <StyledList>
      <StyledDefinition>{definition}</StyledDefinition>

      {example ? <StyledExample as='p'>"{example}"</StyledExample> : null}
    </StyledList>
  );
}

export default DefinitionList;

const StyledList = styled.li`
  color: var(--clr-accent);
  margin-inline: 1.2rem;
  list-style: disc;

  * {
    margin-bottom: 0.8rem;
  }
`;

const StyledDefinition = styled.p`
  color: var(--clr-body-primary);
  font-size: var(--fs-body-S);

  @media ${device.tablet} {
    font-size: var(--fs-body-M);
  }
`;

const StyledExample = styled(StyledDefinition)`
  color: var(--clr-body-secondary);
`;
