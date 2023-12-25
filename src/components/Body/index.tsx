import Wrapper from '../../components/Wrapper';
import Word from '../../components/Word';
import PartOfSpeech from '../../components/PartOfSpeech';
import Meaning from '../Meaning';

function Body() {
  return (
    <Wrapper>
      <Word />
      <PartOfSpeech speech='noun' />
      <Meaning>
        <li>Placeholder</li>
      </Meaning>
    </Wrapper>
  );
}

export default Body;
