import DefinitionsList from './DefinitionList';

interface DefinitionInterface {
  definition: string;
  example: string | null;
}

type DefinitionProps = {
  definitions: DefinitionInterface[];
};

/**
 * Pass data to definitions list
 *
 * @returns {JSX.Element}
 */
function Definition({ definitions }: DefinitionProps) {
  return (
    <ul>
      {definitions.map((definition, index) => (
        <DefinitionsList
          key={index}
          definition={definition.definition}
          example={definition.example}
        />
      ))}
    </ul>
  );
}

export default Definition;
