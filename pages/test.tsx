import type { NextPage } from 'next';
import matchUps from './../mockData/machMatchUps';
import RateMatchUp from '../components/modals/RateMatchUp.Modal';
import { useState } from 'react';
import VerificationForm from '../components/forms/Verification.Form';
import GhostMatchUpCard from '../components/cards/GhostMatchUpCard';

const Home: NextPage = () => {
  const [open, setOpen] = useState(true);
  return (
    <>
      {/* <VerificationForm /> */}
      <GhostMatchUpCard size={'large'} />
      {/* <GhostMatchUpCard size={'medium'} />
      <GhostMatchUpCard size={'small'} /> */}
    </>
  );
};

export default Home;
