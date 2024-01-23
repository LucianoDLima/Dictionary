import Styles from '../styles';
import { ThemeProvider } from '../context/useTheme';
import Header from '../components/Header';
import Search from '../components/Search';
import Body from '../components/Body';
import { DictionaryProvider } from '../context/useDictionary';
import { CurrentWordProvider } from '../context/useCurrentSearchedWord';

function App() {
  return (
    <>
      <Styles />

      <ThemeProvider>
        <Header />
      </ThemeProvider>

      <DictionaryProvider>
        <CurrentWordProvider>
          <Search />
          <h1 className='screen-reader'>Dictionary application</h1>
          <Body />
        </CurrentWordProvider>
      </DictionaryProvider>
    </>
  );
}

export default App;
