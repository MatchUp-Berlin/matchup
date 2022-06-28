import type { NextPage } from 'next';
<<<<<<< HEAD
import { usersArray } from '../mockData/mockUsersArray';
import { useTheme } from '../contexts/Theme';

const Home: NextPage = () => {
  const { toggleDarkMode } = useTheme();
  return (
    <div>
      <h1>🐋 Blanalala 🐋</h1>
      <button onClick={toggleDarkMode}> darkMode</button>
    </div>
=======
import MatchUpCard from '../components/cards/MatchUp.Card';
import football from '../public/football.jpg';

const Home: NextPage = () => {
  return (
    <MatchUpCard
      variant="small"
      timestamp="24 August"
      title="Arabs frommage"
      location="Treptower Park, Berlin"
      sport="football"
      imageUrl={football}
    ></MatchUpCard>
>>>>>>> main
  );
};

export default Home;
