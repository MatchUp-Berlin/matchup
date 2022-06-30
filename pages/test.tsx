import type { NextPage } from 'next';
import UpdatesPreviewCard from '../components/cards/UpdatesPreview.Card';
import ParticipantCard from '../components/cards/Participant.Card';
import OrganizerCard from '../components/cards/Organizer.Card';
import { usersArray } from './../mockData/mockUsersArray';
import UpdatesMessageCard from '../components/cards/UpdatesMessage.Card';
import MatchUpDetail from './MatchUps/[MatchUpId]';
import { mockUpdate } from './../mockData/mockUpdate';
import { mockUpdates } from './../mockData/mockUpdates';
import UpdatesModal from '../components/modals/Updates.Modal';

const Home: NextPage = () => {
  return (
    <>
      {/* <UpdatesPreviewCard updates={mockUpdates} organizer={usersArray[2]} /> */}
      {/* <ParticipantCard user={usersArray[0]} /> */}
      {/* <OrganizerCard user={usersArray[3]} /> */}
      {/* <UpdatesMessageCard update={mockUpdate} organizer={usersArray[2]} /> */}
      <UpdatesModal updates={mockUpdates} organizer={usersArray[2]} />
      {/* <MatchUpDetail /> */}
    </>
  );
};

export default Home;
