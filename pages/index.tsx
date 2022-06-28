import type { NextPage } from 'next';
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
  );
};

export default Home;
