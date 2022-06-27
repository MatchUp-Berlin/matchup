import type { NextPage } from 'next';
import MatchUpCard from '../components/cards/MatchUp.Card';
import footballPic from '../public/football.jpg';

const Home: NextPage = () => {
  return (
    <MatchUpCard
      timestamp={'August 24th'}
      title={'Arabas vs. Italianas with shorts'}
      slots={10}
      participating={2}
      location={'Treptower Park, Berlin'}
      sport={'basketball'}
      skill={'beginner'}
      imageUrl={footballPic}
      paid={true}
      price={10}
      rented={true}
    ></MatchUpCard>
  );
};

export default Home;
