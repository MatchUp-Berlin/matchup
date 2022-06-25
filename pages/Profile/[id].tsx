import type { NextPage } from 'next';
import { useAuthenticator } from '@aws-amplify/ui-react';
import { useRouter } from 'next/router'

const ProfileDetailPage: NextPage = () => {
    const router = useRouter()
    const { route } = useAuthenticator((context) => [context.route]);

    if (route !== 'authenticated') {
        router.push('/')
      }


};
export default ProfileDetailPage;
