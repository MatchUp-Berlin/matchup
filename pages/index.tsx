import type { NextPage } from 'next';
import { usersArray } from '../mockData/mockUsersArray';
import { useTheme } from '../contexts/Theme';

const Home: NextPage = () => {
  const { toggleDarkMode } = useTheme();
  return (
    <div>
      <h1>🐋 Blanalala 🐋</h1>
      <button onClick={toggleDarkMode}> darkMode</button>
    </div>
  );
};

export default Home;
