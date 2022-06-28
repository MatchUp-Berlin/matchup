import type { NextPage } from 'next';
import { useTheme } from '../contexts/Theme';

const Home: NextPage = () => {
  const { toggleDarkMode } = useTheme();
  return (
    <>
      <button onClick={toggleDarkMode}>DarkMode</button>
    </>
  );
};

export default Home;
