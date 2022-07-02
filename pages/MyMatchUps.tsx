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
import { empty, emptyDark, emptyLight, emptyWhite } from '../components/icons';

const YourMatchUpsPage: NextPage = () => {
  const { colors, darkMode } = useTheme();
  const router = useRouter();
  const { currentUser } = useAuth();

  const [showOrganizing, setShowOrganizing] = useState<boolean>(false);

  // fetch user profile
  const userQuery = useQuery(['user', currentUser], () => getUserById(currentUser as string), {
    enabled: !!currentUser,
  });

  // fetch organized events by this user
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
      <div className={styles.wrapper}>
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
              <div className={styles.empty}>
                <svg width="80" fill={colors.overlay[60]} viewBox={emptyLight.viewBox}>
                  {darkMode ? emptyDark.path : emptyLight.path}
                </svg>
                <p style={{ color: colors.text[60] }}>Oops. Something went wrong.</p>
              </div>
            ) : organizedQuery.isSuccess && organizedQuery.data.items.length == 0 ? (
              <div className={styles.empty}>
                <svg width="80" fill={colors.overlay[60]} viewBox={emptyLight.viewBox}>
                  {darkMode ? emptyDark.path : emptyLight.path}
                </svg>
                <p style={{ color: colors.text[60] }}>Nothing to show yet</p>
              </div>
            ) : (
              organizedQuery.data && (
                <>
                  <h1 style={{ color: colors.text[100] }}>Upcoming</h1>
                  <div className={styles.cardsWrapper}>
                    {organizedQuery.data.items
                      .filter((signup) => new Date(signup?.date as string) > new Date())
                      .map((signup) => (
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
                  <h1 style={{ color: colors.text[100] }}>Past</h1>
                  <div className={styles.cardsWrapper}>
                    {organizedQuery.data.items
                      .filter((signup) => new Date(signup?.date as string) > new Date())
                      .map((signup) => (
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
            {userQuery.isLoading ? (
              <LoadingSpinner />
            ) : userQuery.isError ? (
              <div className={styles.empty}>
                <svg width="80" fill={colors.overlay[60]} viewBox={emptyLight.viewBox}>
                  {darkMode ? emptyDark.path : emptyLight.path}
                </svg>
                <p style={{ color: colors.text[60] }}>Oops. Something went wrong.</p>
              </div>
            ) : userQuery.isSuccess && userQuery.data.signups.items.length == 0 ? (
              <div className={styles.empty}>
                <svg width="80" fill={colors.overlay[60]} viewBox={emptyLight.viewBox}>
                  {darkMode ? emptyDark.path : emptyLight.path}
                </svg>
                <p style={{ color: colors.text[60] }}>Nothing to show yet</p>
              </div>
            ) : (
              userQuery.data && (
                <>
                  <h1 style={{ color: colors.text[100] }}>Upcoming</h1>
                  <div className={styles.cardsWrapper}>
                    {userQuery.data.signups.items
                      .filter((signup) => new Date(signup.matchUp?.date as string) > new Date())
                      .map((signup) => (
                        <MatchUpCard
                          id={signup.id as string}
                          key={signup?.matchUp?.id}
                          variant="large"
                          timestamp={signup?.matchUp?.date as string}
                          title={signup?.matchUp?.title as string}
                          slots={signup?.matchUp?.attendanceMax as number}
                          participating={/* signup.matchUp.users.length */ 3} // FIX THIS ONE
                          location={signup?.matchUp?.location as string}
                          sport={signup?.matchUp?.sportCategory as TSportCategories}
                          skill={signup?.matchUp?.skillLevel as TSkillLevels}
                          imageUrl={signup?.matchUp?.image as string}
                          paid={(signup?.matchUp?.totalCost > 0) as boolean}
                          price={signup?.matchUp?.totalCost as number}
                          rented={signup?.matchUp?.reservedCourt as boolean}
                        ></MatchUpCard>
                      ))}
                  </div>
                  <h1 style={{ color: colors.text[100] }}>Past</h1>
                  <div className={styles.cardsWrapper}>
                    {userQuery.data.signups.items
                      .filter((signup) => new Date(signup.matchUp?.date as string) > new Date())
                      .map((signup) => (
                        <MatchUpCard
                          id={signup.id as string}
                          key={signup?.matchUp?.id}
                          variant="large"
                          timestamp={signup?.matchUp?.date as string}
                          title={signup?.matchUp?.title as string}
                          slots={signup?.matchUp?.attendanceMax as number}
                          participating={/* signup.matchUp.users.length */ 3} // FIX THIS ONE
                          location={signup?.matchUp?.location as string}
                          sport={signup?.matchUp?.sportCategory as TSportCategories}
                          skill={signup?.matchUp?.skillLevel as TSkillLevels}
                          imageUrl={signup?.matchUp?.image as string}
                          paid={(signup?.matchUp?.totalCost > 0) as boolean}
                          price={signup?.matchUp?.totalCost as number}
                          rented={signup?.matchUp?.reservedCourt as boolean}
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
