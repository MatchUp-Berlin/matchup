import type { NextPage } from 'next';
import SkillsCard from '../components/cards/Skills.Card';
import SlotsCard from '../components/cards/Slots.Card';

import { getMatchUpsByFilter } from '../utils/Query/getMatchUpsByFilter.util';

getMatchUpsByFilter(
  'berlin',
  ['hassball', 'sportball'],
  new Date('2022-01-26').toISOString(),
  new Date('2022-03-20').toISOString(),
  false
)
  .then((res) => console.log(res))
  .catch((err) => console.log(err));

const Home: NextPage = () => {
  return (
    <>
      <SkillsCard skillLevel='advanced'></SkillsCard>
      <SlotsCard attending={2} slots={10}></SlotsCard>
    </>
  );
};

export default Home;
