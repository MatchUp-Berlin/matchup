import type { NextPage } from 'next';
import { useAuthenticator } from '@aws-amplify/ui-react';
import { useRouter } from 'next/router'

const OrganizePage: NextPage = () => {
    const router = useRouter()
    const { route } = useAuthenticator((context) => [context.route]);

    if (route !== 'authenticated') {
        router.push('/Profile/SignIn')
      } else {
          return(
              <h1>Oraganize Page!</h1>
          )
      }

};
export default OrganizePage;