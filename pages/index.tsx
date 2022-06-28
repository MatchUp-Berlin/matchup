import type { NextPage } from 'next';
import { useTheme } from '../contexts/Theme';
import Navigation from '../components/misc/Navigation';
import { useState } from 'react';
import Filter from '../components/misc/Filter';
import SportFilter from '../components/misc/SportFilter';
import styles from './styles/Explore.module.scss';

const Home: NextPage = () => {
  const { colors, toggleDarkMode } = useTheme();
  const [categories, setCategories] = useState<Array<string>>([]);
  const [timeFrame, setTimeFrame] = useState<{ from: string; to: string }>({
    from: new Date().toISOString(),
    to: new Date().toISOString(),
  });
  const [city, setCity] = useState<string>('Berlin');
  return (
    <div style={{ backgroundColor: colors.background[100] }} className={styles.page}>
      <Filter city={city} setCity={setCity} setTimeFrame={setTimeFrame}></Filter>
      <SportFilter categories={categories} setCategories={setCategories} />
      <button onClick={toggleDarkMode}>DarkMode</button>
      <Navigation />
    </div>
  );
};

export default Home;
