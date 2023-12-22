import Styles from '../styles';
import { ThemeProvider } from '../hooks/useTheme';
import Header from '../components/Header';

function App() {
  return (
    <>
      <Styles />
      <ThemeProvider>
        <Header />
      </ThemeProvider>
    </>
  );
}

export default App;
