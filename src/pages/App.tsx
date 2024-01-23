import Styles from '../styles';
import { ThemeProvider } from '../context/useTheme';
import Header from '../components/Core/Header';
import Search from '../components/Core/Search';
import Body from '../components/Core/Body';
import { DictionaryProvider } from '../context/useDictionary';
import { ValidationProvider } from '../context/useValidation';

function App() {
  return (
    <>
      <Styles />

      <ThemeProvider>
        <Header />
      </ThemeProvider>

      <DictionaryProvider>
        <ValidationProvider>
          <Search />
          <h1 className='screen-reader'>Dictionary application</h1>
          <Body />
        </ValidationProvider>
      </DictionaryProvider>
    </>
  );
}

export default App;
