// React and Next
import type { NextPage } from 'next';
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
import { useQuery } from 'react-query';
import { getMatchUpsByFilter } from '../utils/Query/getMatchUpsByFilter.util';
import { cityLatLong, TAddress } from '../utils/types/Address.Type';
import { initializeMapExplorer } from '../utils/Maps/initializeMapExplorer.util';
import { MatchUp, TCity, TSkillLevels, TSportCategories } from '../utils/types/MatchUp.Type';
import { getNextDayOfTheWeek } from '../utils/getNextDayOfTheWeek';
import { arrow } from '../components/icons';
import Empty from '../components/misc/Empty';

const Home: NextPage = () => {
  const { colors } = useTheme();

  /* --------------- FILTER STATE */
  const [categories, setCategories] = useState<TSportCategories[]>([]);
  const [city, setCity] = useState<TCity>('berlin');
  const [address, setAddress] = useState<TAddress>(cityLatLong[city]);
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
          <div className={styles.loadingWrapper}>
            <LoadingSpinner />
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
