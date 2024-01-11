import Styles from '../styles';
import { ThemeProvider } from '../hooks/useTheme';
import Header from '../components/Header';
import Search from '../components/Search';
import Body from '../components/Body';

function App() {
  return (
    <>
      <Styles />
      <ThemeProvider>
        <Header />
      </ThemeProvider>
      <Search />
      <h1 className='screen-reader'>Dictionary application</h1>
      <Body />
    </>
  );
}

export default App;
