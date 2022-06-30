import type { NextPage } from 'next';
import UpdatesPreviewCard from '../components/cards/UpdatesPreview.Card';
import ParticipantCard from '../components/cards/Participant.Card';
import OrganizerCard from '../components/cards/Organizer.Card';
import { usersArray } from './../mockData/mockUsersArray';

const Home: NextPage = () => {
  return (
    <>
      {/* <UpdatesPreviewCard updates={updates} organizerId={organizerId} /> */}
      <ParticipantCard user={usersArray[0]} />
      <OrganizerCard user={usersArray[3]} />
    </>
  );
};

export default Home;
