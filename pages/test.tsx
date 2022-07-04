import type { NextPage } from 'next';
import matchUps from './../mockData/machMatchUps';
import RateMatchUp from '../components/modals/RateMatchUp.Modal';
import { useState } from 'react';
import VerificationForm from '../components/forms/Verification.Form';

const Home: NextPage = () => {
  const [open, setOpen] = useState(true);
  return (
    <>
      <VerificationForm />
    </>
  );
};

export default Home;
