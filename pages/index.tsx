import type { NextPage } from 'next';
import { useTheme } from '../contexts/Theme';
import Navigation from '../components/misc/Navigation';
import { useState } from 'react';
import Filter from '../components/misc/Filter';
import SportFilter from '../components/misc/SportFilter';
import styles from './styles/Explore.module.scss';
import MatchUpCard from '../components/cards/MatchUp.Card';
import StaticMap from '../components/maps/Static.Map';
import { useQuery } from 'react-query';
import { getMatchUpsByFilter } from '../utils/Query/getMatchUpsByFilter.util';

import LoadingSpinner from '../components/misc/LoadingSpinner';
import { MatchUp, TCity, TSportCategories } from '../utils/types/MatchUp.Type';
import MapButton from '../components/misc/MapButton';

import { addUserToMatchUp } from '../utils/Mutation/addUserToMatchUp.util';
import { getMatchUpById } from '../utils/Query/getMatchUpById.util';
import { removedSignUp } from '../utils/Mutation/removeUserFromMatchUp.util';

const Home: NextPage = () => {
  // getMatchUpById('7e8ec588-8ecd-44a0-bc9a-ea86cacd5571').then((res) =>
  //   console.log(res)
  // );

  const { colors, shadows } = useTheme();
  const [showMap, setShowMap] = useState<boolean>(false);

  /* FILTER STATE */
  const [categories, setCategories] = useState<TSportCategories[]>([
    'football',
  ]);
  const [city, setCity] = useState<TCity>('berlin');

  const from = new Date();
  from.setUTCHours(0, 0, 0, 0);
  const to = new Date();
  to.setUTCHours(23, 59, 59, 999);
  const [timeFrame, setTimeFrame] = useState<{ from: string; to: string }>({
    from: from.toISOString(),
    to: to.toISOString(),
  });

  /* DATA FETCHING */
  const { isError, isLoading, isSuccess, refetch, data } = useQuery(
    ['matchups', categories],
    () => getMatchUpsByFilter(city, categories, timeFrame.from, timeFrame.to)
  );

  return (
    <div
      style={{ backgroundColor: colors.background[100] }}
      className={styles.page}
    >
      {/* ------FILTERING------ */}
      <div className={styles.searchBar}>
        <Filter
          city={city}
          setCity={setCity}
          setTimeFrame={setTimeFrame}
        ></Filter>
        <div
          onClick={() => refetch()}
          className={styles.button}
          style={{
            backgroundColor: colors.primary[100],
            boxShadow: shadows.small,
            color: colors.background[100],
          }}
        >
          Go
        </div>
      </div>
      <SportFilter
        categories={categories}
        setCategories={setCategories} /* refetch={refetch} */
      />

      {/* ------MAP BUTTON------ */}
      <MapButton
        map={showMap}
        callback={() => setShowMap(!showMap)}
      ></MapButton>

      {/* ------MATCHUP LIST OR MAP------ */}
      {showMap ? (
        '<StaticMap longitude={13} latitude={53} zoom={14}></StaticMap>'
      ) : isError ? (
        <div className={styles.errorWrapper} style={{ color: colors.text[60] }}>
          Oops, something went wrong!
        </div>
      ) : isLoading ? (
        <div className={styles.loadingWrapper}>
          <LoadingSpinner />
        </div>
      ) : isSuccess && data?.items?.length > 0 ? (
        <div className={styles.cardsWrapper}>
          {data?.items.map((matchup: MatchUp) => (
            <MatchUpCard
              key={matchup.id}
              variant='large'
              timestamp={matchup.date}
              title={matchup.title}
              slots={matchup.attendanceMax}
              participating={/* matchup.users.length */ 3} // FIX THIS ONE
              location={matchup.location}
              sport={matchup.sportCategory}
              skill={matchup.skillLevel}
              imageUrl={matchup.image}
              paid={matchup.totalCost > 0}
              price={matchup.totalCost}
              rented={matchup.reservedCourt}
            ></MatchUpCard>
          ))}
        </div>
      ) : (
        <div className={styles.emptyWrapper} style={{ color: colors.text[60] }}>
          Nothing to show!
        </div>
      )}

      {/* ------MENU------ */}
      <Navigation />
    </div>
  );
};

export default Home;
