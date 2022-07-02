import type { NextPage } from 'next';
import { useTheme } from '../contexts/Theme';
import Navigation from '../components/misc/Navigation';
import { useEffect, useState } from 'react';
import Filter from '../components/misc/Filter';
import SportFilter from '../components/misc/SportFilter';
import styles from './styles/Explore.module.scss';
import MatchUpCard from '../components/cards/MatchUp.Card';
import { createMap } from 'maplibre-gl-js-amplify';
import 'maplibre-gl/dist/maplibre-gl.css';
import 'maplibre-gl-js-amplify/dist/public/amplify-map.css';
import { drawPoints } from 'maplibre-gl-js-amplify';
import { useQuery } from 'react-query';
import { getMatchUpsByFilter } from '../utils/Query/getMatchUpsByFilter.util';
import { cityLatLong, TAddress } from '../utils/types/Address.Type';
import { initializeMapExplorer } from '../utils/Maps/initializeMapExplorer.util';

import LoadingSpinner from '../components/misc/LoadingSpinner';
import { MatchUp, TCity, TSportCategories } from '../utils/types/MatchUp.Type';
import MapButton from '../components/misc/MapButton';
import { getNextDayOfTheWeek } from '../utils/getNextDayOfTheWeek';
import moment from 'moment';

import { getOrganizerMatchUps } from '../utils/Query/getOrganizerMatchUps.util';

const Home: NextPage = () => {
  const { colors } = useTheme();
  const [showMap, setShowMap] = useState<boolean>(false);

  /* FILTER STATE */
  const [categories, setCategories] = useState<TSportCategories[]>([]);
  const [city, setCity] = useState<TCity>('berlin');
  const [address, setAddress] = useState<TAddress>(cityLatLong[city]);

  const start = new Date();
  start.setUTCHours(0, 0, 0, 0);

  const end = getNextDayOfTheWeek('sun');
  end.setHours(23, 59, 59, 999);
  const [timeFrame, setTimeFrame] = useState<{ from: string; to: string }>({
    from: start.toISOString(),
    to: end.toISOString(),
  });

  /* DATA FETCHING */
  const { isError, isLoading, isRefetching, isSuccess, refetch, data } = useQuery(
    ['matchups', categories],
    () => getMatchUpsByFilter(city, categories, timeFrame.from, timeFrame.to)
  );

  function mapToggle() {
    setShowMap(!showMap)
    console.log(data.items)
    initializeMapExplorer(address, city)
  }

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
              color: colors.background[100],
            }}
          >
            <svg viewBox="0 0 20 20" fill="white">
              <path
                xmlns="http://www.w3.org/2000/svg"
                d="M18.3393 7.31427L4.33927 0.314269C3.78676 0.0392781 3.16289 -0.0586206 2.55271 0.0339206C1.94252 0.126462 1.37573 0.404939 0.929602 0.831385C0.483474 1.25783 0.179724 1.81149 0.0597636 2.41688C-0.0601964 3.02227 0.00947219 3.64992 0.259271 4.21427L2.65927 9.58427C2.71373 9.7141 2.74177 9.85348 2.74177 9.99427C2.74177 10.1351 2.71373 10.2744 2.65927 10.4043L0.259271 15.7743C0.055971 16.231 -0.0299735 16.7313 0.00924794 17.2296C0.0484693 17.728 0.211613 18.2087 0.483853 18.628C0.756092 19.0473 1.1288 19.3919 1.56809 19.6305C2.00739 19.8691 2.49935 19.9941 2.99927 19.9943C3.4675 19.9896 3.92876 19.8803 4.34927 19.6743L18.3493 12.6743C18.8459 12.4245 19.2633 12.0416 19.555 11.5683C19.8466 11.0951 20.0011 10.5502 20.0011 9.99427C20.0011 9.43838 19.8466 8.89342 19.555 8.42019C19.2633 7.94696 18.8459 7.56408 18.3493 7.31427H18.3393ZM17.4493 10.8843L3.44927 17.8843C3.26543 17.9725 3.059 18.0025 2.85766 17.9701C2.65631 17.9377 2.46968 17.8446 2.32278 17.7031C2.17589 17.5617 2.07575 17.3787 2.0358 17.1787C1.99585 16.9787 2.018 16.7713 2.09927 16.5843L4.48927 11.2143C4.52021 11.1426 4.54692 11.0691 4.56927 10.9943H11.4593C11.7245 10.9943 11.9788 10.8889 12.1664 10.7014C12.3539 10.5138 12.4593 10.2595 12.4593 9.99427C12.4593 9.72905 12.3539 9.4747 12.1664 9.28716C11.9788 9.09963 11.7245 8.99427 11.4593 8.99427H4.56927C4.54692 8.91944 4.52021 8.84598 4.48927 8.77427L2.09927 3.40427C2.018 3.21723 1.99585 3.00982 2.0358 2.80984C2.07575 2.60986 2.17589 2.42687 2.32278 2.28542C2.46968 2.14396 2.65631 2.0508 2.85766 2.01842C3.059 1.98604 3.26543 2.016 3.44927 2.10427L17.4493 9.10427C17.6131 9.18819 17.7505 9.31568 17.8465 9.47271C17.9425 9.62975 17.9933 9.81022 17.9933 9.99427C17.9933 10.1783 17.9425 10.3588 17.8465 10.5158C17.7505 10.6729 17.6131 10.8004 17.4493 10.8843Z"
              />
            </svg>
          </div>
        </div>
        {isRefetching && (
          <div className={styles.refetchWrapper}>
            <LoadingSpinner />
          </div>
        )}
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
    </>
  );
};

export default Home;
