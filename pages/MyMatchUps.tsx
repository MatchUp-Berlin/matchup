import type { NextPage } from 'next';
import { useAuthenticator } from '@aws-amplify/ui-react';
import { useRouter } from 'next/router';
import Navigation from '../components/misc/Navigation';
import { useTheme } from '../contexts/Theme';
import { useEffect, useState } from 'react';

import styles from './styles/MyMatchUps.module.scss';
import { useQuery } from 'react-query';
import { getUserById } from '../utils/Query/getUserById.util';
import { getOrganizerMatchUps } from '../utils/Query/getOrganizerMatchUps.util';
import LoadingSpinner from '../components/misc/Divider';
import MatchUpCard from '../components/cards/MatchUp.Card';
import { TSkillLevels, TSportCategories } from '../utils/types/MatchUp.Type';
import { useAuth } from '../contexts/Auth';
import { emptyDark, emptyLight } from '../components/icons';
import Empty from '../components/misc/Empty';
import { getUserMatchUpsAttended } from '../utils/Query/getUserMatchUpsAttended.util';
import { getUserMatchUpsSignedUp } from '../utils/Query/getUserMatchUpsSignedUp.util';

const YourMatchUpsPage: NextPage = () => {
  const { colors, darkMode } = useTheme();
  const router = useRouter();
  const { currentUser } = useAuth();
  const [showOrganizing, setShowOrganizing] = useState<boolean>(false);

  const signedUpQuery = useQuery(
    ['signedup', currentUser],
    () => getUserMatchUpsSignedUp(currentUser as string),
    {
      enabled: !!currentUser,
    }
  );

  const organizedQuery = useQuery(
    ['organized', currentUser],
    () => getOrganizerMatchUps(currentUser as string, 3),
    { enabled: !!currentUser }
  );

  useEffect(() => {
    if (!currentUser) {
      typeof window !== 'undefined' && router.push('/SignIn');
    }
  }, [currentUser]);

  return (
    <>
      <div className={styles.wrapper} style={{ backgroundColor: colors.background[100] }}>
        {/* -----TABS----- */}
        <div className={styles.tabs}>
          <p
            onClick={() => setShowOrganizing(false)}
            style={
              !showOrganizing
                ? { color: colors.primary[100], opacity: 1 }
                : { color: colors.text[60], opacity: 0.4 }
            }
          >
            Participating
          </p>
          <p
            onClick={() => setShowOrganizing(true)}
            style={
              showOrganizing
                ? { color: colors.primary[100], opacity: 1 }
                : { color: colors.text[60], opacity: 0.4 }
            }
          >
            Organizing
          </p>
        </div>

        {showOrganizing ? (
          <>
            {/* ------ORGANIZING------ */}
            {organizedQuery.isLoading ? (
              <LoadingSpinner />
            ) : organizedQuery.isError ? (
              <Empty text="Something went wrong." />
            ) : organizedQuery.isSuccess && organizedQuery.data.items.length == 0 ? (
              <Empty text="You haven't participated in a MatchUp yet." />
            ) : (
              organizedQuery.data && (
                <>
                  <div className={styles.cardsWrapper}>
                    {organizedQuery.data.items.map((signup) => (
                      <MatchUpCard
                        key={signup?.id}
                        id={signup.id}
                        variant="large"
                        timestamp={signup?.date as string}
                        title={signup?.title as string}
                        slots={signup?.attendanceMax as number}
                        participating={/* signu.users.length */ 3} // FIX THIS ONE
                        location={signup?.location as string}
                        sport={signup?.sportCategory as TSportCategories}
                        skill={signup?.skillLevel as TSkillLevels}
                        imageUrl={signup?.image as string}
                        paid={(signup?.totalCost > 0) as boolean}
                        price={signup?.totalCost as number}
                        rented={signup?.reservedCourt as boolean}
                      ></MatchUpCard>
                    ))}
                  </div>
                </>
              )
            )}
          </>
        ) : (
          <>
            {/* ------PARTICIPATING------ */}
            {signedUpQuery.isLoading ? (
              <LoadingSpinner />
            ) : signedUpQuery.isError ? (
              <div className={styles.empty}>
                <svg width="80" fill={colors.overlay[60]} viewBox={emptyLight.viewBox}>
                  {darkMode ? emptyDark.path : emptyLight.path}
                </svg>
                <p style={{ color: colors.text[60] }}>Oops. Something went wrong.</p>
              </div>
            ) : signedUpQuery.isSuccess && signedUpQuery.data.length == 0 ? (
              <div className={styles.empty}>
                <svg width="80" fill={colors.overlay[60]} viewBox={emptyLight.viewBox}>
                  {darkMode ? emptyDark.path : emptyLight.path}
                </svg>
                <p style={{ color: colors.text[60] }}>Nothing to show yet</p>
              </div>
            ) : (
              signedUpQuery.data && (
                <>
                  <div className={styles.cardsWrapper}>
                    {signedUpQuery.data.map((matchup) => (
                      <MatchUpCard
                        id={matchup.id as string}
                        key={matchup?.id}
                        variant="large"
                        timestamp={matchup?.date as string}
                        title={matchup?.title as string}
                        slots={matchup?.attendanceMax as number}
                        participating={/* matchup.matchUp.users.length */ 3} // FIX THIS ONE
                        location={matchup?.location as string}
                        sport={matchup?.sportCategory as TSportCategories}
                        skill={matchup?.skillLevel as TSkillLevels}
                        imageUrl={matchup?.image as string}
                        paid={(matchup?.totalCost > 0) as boolean}
                        price={matchup?.totalCost as number}
                        rented={matchup?.reservedCourt as boolean}
                      ></MatchUpCard>
                    ))}
                  </div>
                </>
              )
            )}
          </>
        )}
      </div>
      <Navigation></Navigation>
    </>
  );
};
export default YourMatchUpsPage;
