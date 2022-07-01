import type { NextPage } from 'next';
import { useTheme } from '../contexts/Theme';
import Navigation from '../components/misc/Navigation';
import { useEffect, useState } from 'react';
import Filter from '../components/misc/Filter';
import SportFilter from '../components/misc/SportFilter';
import styles from './styles/Explore.module.scss';
import MatchUpCard from '../components/cards/MatchUp.Card';
import StaticMap from '../components/maps/Static.Map';
import { createMap } from "maplibre-gl-js-amplify";
import "maplibre-gl/dist/maplibre-gl.css";
import "maplibre-gl-js-amplify/dist/public/amplify-map.css";
import { drawPoints } from "maplibre-gl-js-amplify";
import { useQuery } from 'react-query';
import { getMatchUpsByFilter } from '../utils/Query/getMatchUpsByFilter.util';
import { cityLatLong, TCoordinates } from '../utils/types/cityLatLong';

import LoadingSpinner from '../components/misc/LoadingSpinner';
import { MatchUp, TCity, TSportCategories } from '../utils/types/MatchUp.Type';
import MapButton from '../components/misc/MapButton';

const Home: NextPage = () => {
  const { colors, shadows } = useTheme();
  const [showMap, setShowMap] = useState<boolean>(false);

  /* FILTER STATE */
  const [categories, setCategories] = useState<TSportCategories[]>([]);
  const [city, setCity] = useState<TCity>('berlin');
  const [cityCoordinates, setCityCoordinates] = useState<TCoordinates>({latitude: 100, longitude: 100})

  const from = new Date();
  from.setUTCHours(0, 0, 0, 0);
  const to = new Date();
  to.setUTCHours(23, 59, 59, 999);
  const [timeFrame, setTimeFrame] = useState<{ from: string; to: string }>({
    from: from.toISOString(),
    to: to.toISOString(),
  });

  useQuery(['coordinates', city], () =>
    setCityCoordinates(cityLatLong[city])
  );

  function mapToggle() {
    setShowMap(!showMap)
    initializeMap();
  }

  async function initializeMap() {
    if (!showMap) {
    let map = await createMap({
        container: "map", // An HTML Element or HTML element ID to render the map in https://maplibre.org/maplibre-gl-js-docs/api/map/
        center: [cityCoordinates.longitude, cityCoordinates.latitude], // [Longitude, Latitude]
        zoom: 12.5,
    })
  } else {
    let map = null;
  }
}

// initializeMap();


  /* DATA FETCHING */
  const { isError, isLoading, isSuccess, refetch, data } = useQuery(['matchups', categories], () =>
    getMatchUpsByFilter(city, categories, timeFrame.from, timeFrame.to)
  );

  return (
    <div style={{ backgroundColor: colors.background[100] }} className={styles.page}>
      {/* ------FILTERING------ */}
      <div className={styles.searchBar}>
        <Filter city={city} setCity={setCity} setTimeFrame={setTimeFrame}></Filter>
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
      <SportFilter categories={categories} setCategories={setCategories} /* refetch={refetch} */ />

      {/* ------MAP BUTTON------ */}
      <MapButton map={showMap} callback={() => mapToggle()}></MapButton>

      {/* ------MATCHUP LIST OR MAP------ */}
      {showMap ? (
        <div id="map" className="fullheight-map"></div>
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
              id={matchup.id as string}
              key={matchup.id}
              variant="large"
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
