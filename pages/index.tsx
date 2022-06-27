import type { NextPage } from 'next';
import Header from '../components/misc/Header';
import HeaderButton from '../components/misc/HeaderButton';

const Home: NextPage = () => {
  return <Header imageUrl='bla' title="Choose a Sport" leftButton={<HeaderButton/>} />;
};

export default Home;
