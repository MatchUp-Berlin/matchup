import type { NextPage, GetStaticPaths, GetStaticProps } from 'next';
import { ParsedUrlQuery } from 'querystring';
import { useAuthenticator } from '@aws-amplify/ui-react';
import { useRouter } from 'next/router';
import Navigation from '../../components/misc/Navigation';
// import { listUser } from '../../src/graphql/queries';
import { User } from '../../src/models';

interface IParams extends ParsedUrlQuery {
  userPath: string;
}

// export const getStaticPaths = async () => {
//   const res = await listUser;
//   const data = await res.json();

//   const paths = data.map((user) => {
//     return {
//       params: { id: user.id.toString() },
//     };
//   });

//   return {
//     paths,
//     fallback: false,
//   };
// };

const ProfileDetailPage: NextPage = () => {
  // const router = useRouter()
  // const { route } = useAuthenticator((context) => [context.route]);

  // if (route !== 'authenticated') {
  //     router.push('/')
  //   } else {
  // return (
  //   <>
  //     <Navigation />
  //   </>
  // );
  //  }
};
export default ProfileDetailPage;
