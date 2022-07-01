import type { NextPage } from 'next';
import { useAuthenticator } from '@aws-amplify/ui-react';
import { useRouter } from 'next/router';
import Navigation from '../components/misc/Navigation';
import { useTheme } from '../contexts/Theme';
import { useState } from 'react';

import styles from './styles/MyMatchUps.module.scss';
import { useQuery } from 'react-query';
import { getUserById } from '../utils/Query/getUserById.util';
import { getOrganizerMatchUps } from '../utils/Query/getOrganizerMatchUps.util';
import LoadingSpinner from '../components/misc/Divider';
import MatchUpCard from '../components/cards/MatchUp.Card';
import { TSkillLevels, TSportCategories } from '../utils/types/MatchUp.Type';

const YourMatchUpsPage: NextPage = () => {
  const { colors } = useTheme();
  const router = useRouter();
  const { route, user } = useAuthenticator((context) => [context.route, context.user]);

  const [showOrganizing, setShowOrganizing] = useState<boolean>(false);

  // fetch user profile
  const userQuery = useQuery(['user', user?.username], () => getUserById(user.username as string));

  // fetch organized events by this user
  const organizedQuery = useQuery(['organized', user?.username], () =>
    getOrganizerMatchUps(user.username as string)
  );

  if (route !== 'authenticated' || !user) {
    typeof window !== 'undefined' && router.push('/SignIn');
    return <></>;
  }

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
              <>Oops, something wrong happened</>
            ) : organizedQuery.isSuccess && organizedQuery.data.items.length == 0 ? (
              <>Nothing here yet...</>
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
              <>Oops, something wrong happened</>
            ) : userQuery.isSuccess && !userQuery.data ? (
              <>Nothing here yet...</>
            ) : (
              userQuery.data && (
                <>
                  <h1 style={{ color: colors.text[100] }}>Upcoming</h1>
                  <div className={styles.cardsWrapper}>
                    {userQuery.data.signups.items
                      .filter((signup) => new Date(signup.matchUp?.date as string) > new Date())
                      .map((signup) => (
                        <MatchUpCard
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
