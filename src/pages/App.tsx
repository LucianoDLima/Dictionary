import Styles from '../styles';
import { ThemeProvider } from '../hooks/useTheme';
import Header from '../components/Header';
import Search from '../components/Search';
import Body from '../components/Body';
import { DictionaryProvider } from '../hooks/useDictionary';

function App() {
  return (
    <>
      <Styles />

      <ThemeProvider>
        <Header />
      </ThemeProvider>

      <DictionaryProvider>
        <Search />
        <h1 className='screen-reader'>Dictionary application</h1>
        <Body />
      </DictionaryProvider>
    </>
  );
}

export default App;
