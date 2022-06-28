import type { NextPage } from 'next';
import { useTheme } from '../contexts/Theme';
import Navigation from '../components/misc/Navigation';
import { useState } from 'react';
import Filter from '../components/misc/Filter';
import SportFilter from '../components/misc/SportFilter';
import styles from './styles/Explore.module.scss';
import matchUps from '../mockData/machMatchUps';
import MatchUpCard from '../components/cards/MatchUp.Card';

const Home: NextPage = () => {
  const { colors, toggleDarkMode, shadows } = useTheme();
  const [categories, setCategories] = useState<Array<string>>([]);
  const [timeFrame, setTimeFrame] = useState<{ from: string; to: string }>({
    from: new Date().toISOString(),
    to: new Date().toISOString(),
  });
  const [city, setCity] = useState<string>('Berlin');
  return (
    <div style={{ backgroundColor: colors.background[100] }} className={styles.page}>
      <div className={styles.searchBar}>
        <Filter city={city} setCity={setCity} setTimeFrame={setTimeFrame}></Filter>
        <div
          onClick={() => console.log('gehe suchen')}
          className={styles.button}
          style={{ backgroundColor: colors.primary[100], boxShadow: shadows.small }}
        >
          Go
        </div>
      </div>
      <SportFilter categories={categories} setCategories={setCategories} />
      <div className={styles.cardsWrapper}>
        {/* <button onClick={toggleDarkMode}>DarkMode</button> */}
        {matchUps.map((matchup) => (
          <MatchUpCard
            key={matchup.id}
            variant="large"
            timestamp={matchup.date}
            title={matchup.title}
            slots={matchup.attendanceMax}
            participating={matchup.users.length}
            location={matchup.location}
            sport={
              matchup.sportCategory as
                | 'basketball'
                | 'football'
                | 'tennis'
                | 'ultimate-frisbee'
                | 'beach-volleyball'
                | 'volleyball'
            }
            skill={matchup.skillLevel as 'beginner' | 'intermediate' | 'advanced'}
            imageUrl={matchup.image}
            paid={matchup.totalCost > 0}
            price={matchup.totalCost}
            rented={matchup.reservedCourt}
          ></MatchUpCard>
        ))}
      </div>
      <Navigation />
    </div>
  );
};

export default Home;
