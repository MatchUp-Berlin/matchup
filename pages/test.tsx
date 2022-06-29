import type { NextPage } from 'next';
import UpdatesPreviewCard from '../components/cards/UpdatesPreview.Card';

const organizerId = '67523476';

const updates = [
  {
    id: '3234',
    userId: '98736432',
    matchUpId: '87d87ew',
    user: {
      id: '98736432',
      givenName: 'Sam',
      familyName: 'Svelte',
      photo: './path',
    },
    content: 'this is the latest message',
    timestamp: '20:32',
  },
  {
    id: '5467',
    userId: '67523476',
    matchUpId: '87d87ew',
    user: {
      givenName: 'Max',
      familyName: 'Butts',
      photo: './path',
    },
    content: 'this is the second latest message',
    timestamp: '19:43',
  },
  {
    id: '3677',
    userId: '98734986',
    matchUpId: '87d87ew',
    user: {
      givenName: 'Manu',
      familyName: 'Bauer',
      photo: './path',
    },
    content: 'this is the third latest message',
    timestamp: 'Yesterday',
  },
  {
    id: '8576',
    userId: '82764387',
    matchUpId: '87d87ew',
    user: {
      givenName: 'Luca',
      familyName: 'Giordano',
      photo: './path',
    },
    content: 'this is the second latest message',
    timestamp: 'Jun 26',
  },
  {
    id: '7367',
    userId: '8763487',
    matchUpId: '87d87ew',
    user: {
      givenName: 'Mitch',
      familyName: 'Man',
      photo: './path',
    },
    content: 'this is the second latest message',
    timestamp: 'Jun 25',
  },
];

const Home: NextPage = () => {
  return (
    <>
      <UpdatesPreviewCard updates={updates} organizerId={organizerId} />
    </>
  );
};

export default Home;
