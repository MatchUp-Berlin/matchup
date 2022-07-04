import type { NextPage } from 'next';
import { useRouter } from 'next/router';
import Navigation from '../components/misc/Navigation';
import { useTheme } from '../contexts/Theme';
import { useEffect, useState } from 'react';

import styles from './styles/MyMatchUps.module.scss';
import { useQuery } from 'react-query';
import { getOrganizerMatchUps } from '../utils/Query/getOrganizerMatchUps.util';
import LoadingSpinner from '../components/misc/Divider';
import MatchUpCard from '../components/cards/MatchUp.Card';
import { TSkillLevels, TSportCategories } from '../utils/types/MatchUp.Type';
import { useAuth } from '../contexts/Auth';
import Empty from '../components/misc/Empty';

const YourMatchUpsPage: NextPage = () => {
  const { colors, darkMode } = useTheme();
  const router = useRouter();
  const { currentUserId, currentUser } = useAuth();
  const [showOrganizing, setShowOrganizing] = useState<boolean>(false);

  const organizedQuery = useQuery(
    ['organized', currentUserId],
    () => getOrganizerMatchUps(currentUserId as string, 3),
    { enabled: !!currentUserId }
  );

  useEffect(() => {
    if (!currentUserId) router.push('/SignIn');
  }, [currentUserId]);

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
            {currentUser && currentUser.signups.items.length == 0 ? (
              <Empty text="You haven't participated in a MatchUp yet." />
            ) : (
              <div className={styles.cardsWrapper}>
                {currentUser &&
                  currentUser.signups.items.length != 0 &&
                  currentUser.signups.items.map((signup) => (
                    <MatchUpCard
                      key={signup?.matchUp?.id}
                      id={signup?.matchUp?.id as string}
                      variant="large"
                      timestamp={signup?.matchUp?.date as string}
                      title={signup?.matchUp?.title as string}
                      slots={signup?.matchUp?.attendanceMax as number}
                      participating={signup?.matchUp?.signups?.items?.length || 0} // FIX THIS ONE
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
            )}
          </>
        )}
      </div>
      <Navigation></Navigation>
    </>
  );
};
export default YourMatchUpsPage;
