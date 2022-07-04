import type { NextPage } from 'next';
import { useRouter } from 'next/router';
import { useEffect } from 'react';
import MatchUpCard from '../components/cards/MatchUp.Card';
import Empty from '../components/misc/Empty';
import Navigation from '../components/misc/Navigation';
import { useAuth } from '../contexts/Auth';
import { useTheme } from '../contexts/Theme';
import { TSkillLevels, TSportCategories } from '../utils/types/MatchUp.Type';
import styles from './styles/WatchList.module.scss';

const WatchListPage: NextPage = () => {
  const { colors } = useTheme();
  const { currentUser, currentUserId } = useAuth();
  const router = useRouter();

  useEffect(() => {
    if (!currentUserId) router.push('/SignIn');
  }, [currentUserId]);

  return (
    <>
      <div className={styles.wrapper} style={{ backgroundColor: colors.background[100] }}>
        <h1 style={{ color: colors.text[100] }}>Your Watchlist</h1>

        {currentUser && currentUser.watchList.items.length == 0 ? (
          <Empty text="You have not added any events to your watchlist yet." />
        ) : (
          <div className={styles.cardsWrapper}>
            {currentUser &&
              currentUser.watchList.items.length != 0 &&
              currentUser.watchList.items.map((watchlist) => (
                <MatchUpCard
                  key={watchlist?.matchUp?.id}
                  id={watchlist?.matchUp?.id as string}
                  variant="medium"
                  timestamp={watchlist?.matchUp?.date as string}
                  title={watchlist?.matchUp?.title as string}
                  slots={watchlist?.matchUp?.attendanceMax as number}
                  participating={watchlist?.matchUp?.signups?.items?.length || 0} // FIX THIS ONE
                  location={watchlist?.matchUp?.location as string}
                  sport={watchlist?.matchUp?.sportCategory as TSportCategories}
                  skill={watchlist?.matchUp?.skillLevel as TSkillLevels}
                  imageUrl={watchlist?.matchUp?.image as string}
                  paid={(watchlist?.matchUp?.totalCost > 0) as boolean}
                  price={watchlist?.matchUp?.totalCost as number}
                  rented={watchlist?.matchUp?.reservedCourt as boolean}
                ></MatchUpCard>
              ))}
          </div>
        )}
        <Navigation />
      </div>
    </>
  );
};
export default WatchListPage;
