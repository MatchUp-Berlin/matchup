import type { NextPage } from 'next';
import UpdatesPreviewCard from '../components/cards/UpdatesPreview.Card';
import ParticipantCard from '../components/cards/Participant.Card';
import OrganizerCard from '../components/cards/Organizer.Card';
import { usersArray } from './../mockData/mockUsersArray';
import UpdatesMessageCard from '../components/cards/UpdatesMessage.Card';
import MatchUpDetail from './MatchUps/[MatchUpId]';
import { mockUpdate } from './../mockData/mockUpdate';

const Home: NextPage = () => {
  return (
    <>
      {/* <UpdatesPreviewCard updates={updates} organizerId={organizerId} /> */}
      {/* <ParticipantCard user={usersArray[0]} /> */}
      {/* <OrganizerCard user={usersArray[3]} /> */}
      {/* <UpdatesMessageCard update={mockUpdate} /> */}
      <MatchUpDetail />
    </>
  );
};

export default Home;
