import type { NextPage } from 'next';
import SkillsCard from '../components/cards/Skills.Card';

const Home: NextPage = () => {
  return <SkillsCard skillLevel="beginner"></SkillsCard>;
};

export default Home;
