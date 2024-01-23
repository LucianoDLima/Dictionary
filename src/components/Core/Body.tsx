import { useDictionaryContext } from '../../context/useDictionary';
import Error from './ErrorDisplay';
import BodyList from '../Common/BodyList';

/**
 *  Contain the components that deal with the dictionary API data usage
 *
 * @returns {JSX.Element} - Only renders if dictionary array is not empty
 */
function Body() {
  const { dictionary } = useDictionaryContext();

  return dictionary ? <BodyList /> : dictionary === undefined ? null : <Error />;
}

export default Body;
