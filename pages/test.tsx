import type { NextPage } from 'next';
import { useState } from 'react';
import ParticipantsModal from '../components/modals/Participants.Modal';

const Home: NextPage = () => {
  const [display, setDisplay] = useState(true);
  const [opening, setOpening] = useState(false);
  const [closing, setClosing] = useState(false);
  const [opened, setOpened] = useState(true);

  async function hide(ms: number) {
    setClosing(true);
    await new Promise((resolve) => setTimeout(resolve, ms));
    setClosing(false);
    setDisplay(false);
    setOpened(false);
  }

  async function open(ms: number) {
    setDisplay(true);
    setOpening(true);
    await new Promise((resolve) => setTimeout(resolve, ms));
    setOpening(false);
    setOpened(true);
  }

  return (
    <>
      <button onClick={() => open(1000)}>Open</button>
      {display && (
        <ParticipantsModal
          opened={opened}
          hide={hide}
          opening={opening}
          closing={closing}
        ></ParticipantsModal>
      )}
    </>
  );
};

export default Home;
