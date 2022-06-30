import type { NextPage } from 'next';
import { useAuthenticator } from '@aws-amplify/ui-react';
import { useRouter } from 'next/router'
import Navigation from '../components/misc/Navigation';


const WatchListPage: NextPage = () => {
    const router = useRouter()
    const { route } = useAuthenticator((context) => [context.route]);

    if (route !== 'authenticated') {
<<<<<<< HEAD
        {() => {router.push('/SignIn')}}
=======
        router.push('/SignIn')
>>>>>>> parent of f721d29 (added pwa functionality)
      } else {
          return(
              <>
              <h1>Watch List</h1>
              <Navigation />
              </>
          )
      }
};
export default WatchListPage;
