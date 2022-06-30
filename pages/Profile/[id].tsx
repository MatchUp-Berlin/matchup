import type { NextPage, GetStaticPaths, GetStaticProps } from 'next';
import { useState } from 'react';
import { useAuthenticator } from '@aws-amplify/ui-react';
import { useRouter } from 'next/router';
import Navigation from '../../components/misc/Navigation';
import { getUserById } from '../../utils/Query/getUserById.util';
import { User } from '../../utils/types/User.Type'
import { useQuery } from 'react-query';

const ProfileDetailPage: NextPage = () => {
  const { user } = useAuthenticator((context: any) => [context.user]);

  const [userProfile, setUserProfile] = useState<User>();

  const { isError, isLoading, isSuccess, refetch, data } = useQuery(['userInfo', userProfile], () =>
  getUserById(user.attributes.sub).then(data => {
    setUserProfile(data);
  })
);

  return(
        <>
        <h1>{userProfile?.familyName}</h1>
        <Navigation />
        </>
  )
      };
export default ProfileDetailPage;
