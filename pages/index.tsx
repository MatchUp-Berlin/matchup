// React and Next
import type { NextPage } from 'next';
import Head from 'next/head';
import { useEffect, useState } from 'react';

// Components
import Navigation from '../components/misc/Navigation';
import Filter from '../components/misc/Filter';
import SportFilter from '../components/misc/SportFilter';
import MatchUpCard from '../components/cards/MatchUp.Card';
import LoadingSpinner from '../components/misc/LoadingSpinner';
import MapButton from '../components/misc/MapButton';

// Styling
import styles from './styles/Explore.module.scss';
import { useTheme } from '../contexts/Theme';

// Map
import 'maplibre-gl/dist/maplibre-gl.css';
import 'maplibre-gl-js-amplify/dist/public/amplify-map.css';

// Utils
import { useMutation, useQuery, useQueryClient } from 'react-query';
import { getMatchUpsByFilter } from '../utils/Query/getMatchUpsByFilter.util';
import { initializeMapExplorer } from '../utils/Maps/initializeMapExplorer.util';
import { MatchUp, TCity, TSkillLevels, TSportCategories } from '../utils/types/MatchUp.Type';
import { getNextDayOfTheWeek } from '../utils/getNextDayOfTheWeek';
import { arrow } from '../components/icons';
import Empty from '../components/misc/Empty';
import { createNewWatchList } from '../utils/Mutation/createWatchList.util';
import { useAuth } from '../contexts/Auth';
import { WatchList } from '../utils/types/WatchList.Type';
import GhostMatchUpCard from '../components/cards/GhostMatchUpCard';

const Home: NextPage = () => {
  const { colors } = useTheme();
  const { currentUserId, currentUser } = useAuth();

  /* --------------- FILTER STATE */
  const [categories, setCategories] = useState<TSportCategories[]>([]);
  const [city, setCity] = useState<TCity>('berlin');
  const [currentMap, setCurrentMap] = useState<any>({});

  const start = new Date();
  start.setUTCHours(0, 0, 0, 0);
  const end = getNextDayOfTheWeek('sun');
  end.setHours(23, 59, 59, 999);

  const [timeFrame, setTimeFrame] = useState<{ from: string; to: string }>({
    from: start.toISOString(),
    to: end.toISOString(),
  });

  /* --------------- DATA FETCHING */
  const {
    isError,
    isLoading,
    isRefetching,
    isSuccess,
    refetch,
    data: matchUps,
  } = useQuery(['matchUps', categories], () =>
    getMatchUpsByFilter(city, categories, timeFrame.from, timeFrame.to)
  );

  /* --------------- ADDING TO WATCHLIST */
  const queryClient = useQueryClient();
  const mutation = useMutation(['watchlist', currentUserId], createNewWatchList, {
    onSuccess: () => {
      queryClient.invalidateQueries(['user', currentUserId]);
    },
  });

  /* --------------- MAP */
  const [showMap, setShowMap] = useState<boolean>(false);

  async function getMap(matchUps: MatchUp[], city: TCity) {
    const map = await initializeMapExplorer(matchUps, city);
    setCurrentMap(map);
  }

  async function fetchMap() {
    if (showMap && matchUps) {
      if (currentMap) currentMap.remove();
      getMap(matchUps.items, city);
    }
  }

  async function mapToggle() {
    setShowMap(!showMap);
    if (!showMap && matchUps) {
      const map = await initializeMapExplorer(matchUps.items, city);
      setCurrentMap(map);
    } else {
      if (!currentMap) return;
      currentMap.remove();
    }
  }

  useEffect(() => {
    fetchMap();
  }, [isRefetching]);

  return (
    <>
      <Head>
        <title>MatchUp</title>
        <meta name="description" content="Find a local sport match that fits your skill level." />
        <meta name="apple-mobile-web-app-capable" content="yes"></meta>
        <meta name="apple-mobile-web-app-status-bar-style" content="black-translucent"></meta>
      </Head>
      <div style={{ backgroundColor: colors.background[100] }} className={styles.page}>
        {/* ------FILTERING------ */}
        <div className={styles.searchBar}>
          <Filter city={city} setCity={setCity} setTimeFrame={setTimeFrame}></Filter>
          <div
            onClick={() => refetch()}
            className={styles.button}
            style={{
              backgroundColor: colors.primary[100],
            }}
          >
            <svg
              viewBox={arrow.viewBox}
              width="50px"
              height="50px"
              fill="white"
              xmlns="http://www.w3.org/2000/svg"
              xmlnsXlink="http://www.w3.org/1999/xlink"
            >
              {arrow.path}
            </svg>
          </div>
        </div>

        <SportFilter categories={categories} setCategories={setCategories} />
        {/* ------MAP BUTTON------ */}
        <MapButton map={showMap} callback={() => mapToggle()}></MapButton>
        {/* ------MATCHUP LIST OR MAP------ */}
        {showMap ? (
          <div id="map" className={'fullheight-map ' + styles.map}></div>
        ) : isError ? (
          <>
            <Empty text="Looks like something went wrong." />
            <div id="map" className={styles.nodisplaymap}></div>
          </>
        ) : isLoading ? (
          <div className={styles.cardsWrapper}>
            {isLoading && (
              <>
                <GhostMatchUpCard size={'large'} />
                <GhostMatchUpCard size={'large'} />
                <GhostMatchUpCard size={'large'} />
              </>
            )}
          </div>
        ) : isSuccess && matchUps?.items?.length === 0 ? (
          <>
            <Empty text="No events found." />
            <div id="map" className={styles.nodisplaymap}></div>
          </>
        ) : (
          <div className={styles.cardsWrapper}>
            {isRefetching && (
              <div className={styles.refetchWrapper}>
                <LoadingSpinner />
              </div>
            )}
            {matchUps?.items.map((matchup: MatchUp) => (
              <>
                <MatchUpCard
                  key={matchup.id}
                  id={matchup.id as string}
                  variant="large"
                  date={matchup.date as string}
                  indoor={matchup?.indoor as boolean}
                  title={matchup.title as string}
                  attendanceMax={matchup.attendanceMax as number}
                  participating={matchup.signups?.items?.length || 0}
                  location={matchup.location as string}
                  sportCategory={matchup.sportCategory as TSportCategories}
                  skillLevel={matchup.skillLevel as TSkillLevels}
                  image={matchup.image as string}
                  totalCost={matchup.totalCost as number}
                  reservedCourt={matchup.reservedCourt as boolean}
                  addToWatchlist={mutation}
                  currentUserId={currentUserId as string}
                  watchList={currentUser?.watchList.items as WatchList[]}
                ></MatchUpCard>
                <div id="map" className={styles.nodisplaymap}></div>
              </>
            ))}
          </div>
        )}

        <Navigation />
      </div>
    </>
  );
};

export default Home;
