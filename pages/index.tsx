import type { NextPage } from 'next';
import { useState } from 'react';
import SportFilter from '../components/misc/SportFilter';
import { useTheme } from '../contexts/Theme';

const Home: NextPage = () => {
  const { toggleDarkMode } = useTheme();
  const [categories, setCategories] = useState<Array<string>>([]);
  return (
    <>
      <SportFilter categories={categories} setCategories={setCategories} />
      <button onClick={toggleDarkMode}>DarkMode</button>
    </>
  );
};

export default Home;
