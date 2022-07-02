import type { NextPage } from 'next';
import matchUps from './../mockData/machMatchUps';
import RateMatchUp from '../components/modals/RateMatchUp.Modal';
import { useState } from 'react';

const Home: NextPage = () => {
  const [open, setOpen] = useState(true);
  return (
    <>
      <button
        onClick={() => {
          setOpen(true);
        }}
      >
        Open
      </button>
      {open && <RateMatchUp matchUp={matchUps[2]} close={() => setOpen(false)} />}
    </>
  );
};

export default Home;
