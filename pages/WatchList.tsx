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

  console.log(currentUser);

  return (
    <>
      <div
        className={styles.wrapper}
        style={{ backgroundColor: colors.background[100] }}
      >
        <h1 style={{ color: colors.text[100] }}>Your Watchlist</h1>

        {currentUser && currentUser.watchList.items.length == 0 ? (
          <Empty text='You have not added any events to your watchlist yet.' />
        ) : (
          <div className={styles.cardsWrapper}>
            {currentUser &&
              currentUser.watchList.items.length != 0 &&
              currentUser.watchList.items.map((watchlist) => (
                <MatchUpCard
                  key={watchlist?.matchUp?.id}
                  id={watchlist?.matchUp?.id as string}
                  variant='medium'
                  date={watchlist?.matchUp?.date as string}
                  indoor={watchlist.matchUp?.indoor as boolean}
                  title={watchlist?.matchUp?.title as string}
                  attendanceMax={watchlist?.matchUp?.attendanceMax as number}
                  participating={
                    watchlist?.matchUp?.signups?.items?.length || 0
                  }
                  location={watchlist?.matchUp?.location as string}
                  sportCategory={
                    watchlist?.matchUp?.sportCategory as TSportCategories
                  }
                  skillLevel={watchlist?.matchUp?.skillLevel as TSkillLevels}
                  image={watchlist?.matchUp?.image as string}
                  totalCost={watchlist?.matchUp?.totalCost as number}
                  reservedCourt={watchlist?.matchUp?.reservedCourt as boolean}
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
