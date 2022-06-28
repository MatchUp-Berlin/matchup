import type { NextPage } from 'next';
import { useTheme } from '../contexts/Theme';
import Navigation from '../components/misc/Navigation';


const Home: NextPage = () => {
  const { toggleDarkMode } = useTheme();
  return (
    <>
      <button onClick={toggleDarkMode}>DarkMode</button>
      <Navigation />
    </>
  );
};

export default Home;
