import styled from 'styled-components';
import { device } from '../../styles/MediaQuery';

interface DefinitionInterface {
  definition: string;
  example: string | null;
}

type DefinitionListProps = {
  definitions: DefinitionInterface[];
};

/**
 * Display the definition and an example of the given word
 *
 * @param {DefinitionListProps} props - "Definition" will always be true. "Example" can be null however
 * @returns {JSX.Element}
 */

function DefinitionList({ definitions }: DefinitionListProps) {
  return (
    <ul>
      {definitions.map((definition, definitionIndex) => (
        <li key={definitionIndex}>
          <div>
            <StyledDefinition>{definition.definition}</StyledDefinition>
            {definition.example ? <StyledExample as='p'>"{definition.example}"</StyledExample> : null}
          </div>
        </li>
      ))}
    </ul>
  );
}

export default DefinitionList;

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
