import type { NextPage } from 'next';
import { useAuthenticator } from '@aws-amplify/ui-react';
import { useRouter } from 'next/router';
import Navigation from '../components/misc/Navigation';
import { useTheme } from '../contexts/Theme';
import { useState } from 'react';

import styles from './styles/MyMatchUps.module.scss';

const YourMatchUpsPage: NextPage = () => {
  const { colors } = useTheme();
  const router = useRouter();
  const { route } = useAuthenticator((context) => [context.route]);

  const [showOrganizing, setShowOrganizing] = useState<boolean>(false);

  if (route !== 'authenticated') {
    typeof window !== 'undefined' && router.push('/SignIn');
    return <></>;
  } else {
    return (
      <>
        <div className={styles.wrapper}></div>
        <Navigation></Navigation>
      </>
    );
  }
};
export default YourMatchUpsPage;
