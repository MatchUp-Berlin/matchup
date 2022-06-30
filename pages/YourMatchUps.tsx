import type { NextPage } from 'next';
import { useAuthenticator } from '@aws-amplify/ui-react';
import { useRouter } from 'next/router'
import Navigation from '../components/misc/Navigation';


const YourMatchUpsPage: NextPage = () => {
    const router = useRouter()
    const { route } = useAuthenticator((context) => [context.route]);

    if (route !== 'authenticated') {
        router.push('/SignIn')
      } else {
          return(
            <>
            <h1>Your MatchUps</h1>
            <Navigation />
            </>
          )
      }
};
export default YourMatchUpsPage;
