import type { NextPage } from 'next';
import SkillsCard from '../components/cards/Skills.Card';
import SlotsCard from '../components/cards/Slots.Card';

const Home: NextPage = () => {
<<<<<<< HEAD
  return <h1>something</h1>;
=======
  return (
    <>
      <SkillsCard skillLevel="advanced"></SkillsCard>
      <SlotsCard attending={2} slots={10}></SlotsCard>
    </>
  );
>>>>>>> main
};

export default Home;
