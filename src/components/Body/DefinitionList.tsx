import styled from 'styled-components';

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
            {definition.example ? <StyledExample as='blockquote'>"{definition.example}"</StyledExample> : null}
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
`;

const StyledExample = styled(StyledDefinition)`
  color: var(--clr-body-secondary);
`;
