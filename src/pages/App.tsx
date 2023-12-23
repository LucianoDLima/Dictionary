import Styles from '../styles';
import { ThemeProvider } from '../hooks/useTheme';
import Header from '../components/Header';
import Search from '../components/Search';

function App() {
  return (
    <>
      <Styles />
      <ThemeProvider>
        <Header />
        <Search />
      </ThemeProvider>
    </>
  );
}

export default App;
