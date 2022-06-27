import type { NextPage } from 'next';
import SkillsCard from '../components/cards/Skills.Card';
import SlotsCard from '../components/cards/Slots.Card';

const Home: NextPage = () => {
  return (
    <>
      <SkillsCard></SkillsCard>
      <SlotsCard attending={2} slots={10}></SlotsCard>
    </>
  );
};

export default Home;
