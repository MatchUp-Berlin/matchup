import type { NextPage } from 'next';
import { useTheme } from '../contexts/Theme';
import Navigation from '../components/misc/Navigation';
import { useEffect, useState } from 'react';
import Filter from '../components/misc/Filter';
import SportFilter from '../components/misc/SportFilter';
import styles from './styles/Explore.module.scss';
import MatchUpCard from '../components/cards/MatchUp.Card';
import StaticMap from '../components/maps/Static.Map';
import { useQuery } from 'react-query';

import { getMatchUpsByFilter } from '../utils/Query/getMatchUpsByFilter.util';
import LoadingSpinner from '../components/misc/LoadingSpinner';
import { MatchUp } from '../utils/types/MatchUp.Type';

const Home: NextPage = () => {
  const { colors, toggleDarkMode, shadows } = useTheme();

  /* FILTER STATE */
  const [categories, setCategories] = useState<
    Array<'basketball' | 'football' | 'tennis' | 'ultimate-frisbee' | 'beach-volleyball' | 'volleyball'>
  >(['football', 'volleyball', 'beach-volleyball']);

  const from = new Date();
  from.setUTCHours(0, 0, 0, 0); // Default From: Start of today

  const to = new Date();
  to.setUTCHours(23, 59, 59, 999); // Default To: End of today

  const [timeFrame, setTimeFrame] = useState<{ from: string; to: string }>({
    from: from.toISOString(),
    to: to.toISOString(),
  });
  const [city, setCity] = useState<string>('berlin');

  /* MAP VS CARD STATE */
  const [showMap, setShowMap] = useState<boolean>(false);

  /* DATA FETCHING */
  const { isError, isLoading, isSuccess, refetch, data } = useQuery(
    ['matchups', categories],
    () => getMatchUpsByFilter(city, categories, timeFrame.from, timeFrame.to),
    {
      onSuccess: () => {},
      onError: () => {},
    }
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
      <button
        className={styles.mapButton}
        style={{ boxShadow: shadows.medium }}
        onClick={() => setShowMap(!showMap)}
      >
        <p className="fat">{showMap ? 'List' : 'Map'}</p>
        {showMap ? (
          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="12" viewBox="0 0 20 12" fill="white">
            <rect width="10" height="2" rx="1" />
            <rect y="5" width="15" height="2" rx="1" />
            <rect y="10" width="20" height="2" rx="1" />
          </svg>
        ) : (
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="13" viewBox="0 0 16 13" fill="white">
            <path d="M15.456 11.5201L10.656 12.9637H10.6C10.5628 12.9671 10.5252 12.9671 10.488 12.9637H10.304H10.2H10.144L5.6 11.5562L1.056 12.9637C0.935694 12.9995 0.807685 13.009 0.682511 12.9914C0.557336 12.9739 0.438575 12.9297 0.336003 12.8626C0.232609 12.7962 0.148215 12.7086 0.0897905 12.6069C0.0313664 12.5053 0.000589563 12.3925 2.66683e-06 12.278V2.17313C-0.000430262 2.02181 0.0518578 1.8742 0.149476 1.75116C0.247095 1.62811 0.385106 1.53586 0.544003 1.48744L5.344 0.0438871C5.50516 -0.00352192 5.67884 -0.00352192 5.84 0.0438871L10.4 1.41526L14.944 0.00779915C15.0289 -0.00259972 15.1151 -0.00259972 15.2 0.00779915C15.3673 0.00567627 15.5305 0.0539341 15.664 0.144937C15.7674 0.211352 15.8518 0.299009 15.9102 0.400667C15.9686 0.502325 15.9994 0.615066 16 0.729575V10.8345C16.0004 10.9858 15.9481 11.1334 15.8505 11.2564C15.7529 11.3795 15.6149 11.4717 15.456 11.5201ZM4.8 1.73285L1.6 2.69281V11.2747L4.8 10.3148V1.73285ZM9.6 2.69281L6.4 1.73285V10.3148L9.6 11.2747V2.69281ZM14.4 1.73285L11.2 2.69281V11.2747L14.4 10.3148V1.73285Z" />
          </svg>
        )}
      </button>

      {showMap ? (
        '<StaticMap longitude={13} latitude={53} zoom={14}></StaticMap>'
      ) : isSuccess && data ? (
        <div className={styles.cardsWrapper}>
          {data.items.map((matchup: MatchUp) => (
            <MatchUpCard
              key={matchup.id}
              variant="large"
              timestamp={matchup.date}
              title={matchup.title}
              slots={matchup.attendanceMax}
              participating={/* matchup.users.length */ 3} // FIX THIS ONE
              location={matchup.location}
              sport={
                matchup.sportCategory as
                  | 'basketball'
                  | 'football'
                  | 'tennis'
                  | 'ultimate-frisbee'
                  | 'beach-volleyball'
                  | 'volleyball'
              }
              skill={matchup.skillLevel as 'beginner' | 'intermediate' | 'advanced'}
              imageUrl={matchup.image}
              paid={matchup.totalCost > 0}
              price={matchup.totalCost}
              rented={matchup.reservedCourt}
            ></MatchUpCard>
          ))}
        </div>
      ) : (
        <div
          style={{
            width: '100%',
            height: '100%',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            marginTop: '5em',
          }}
        >
          <LoadingSpinner />
        </div>
      )}

      {/* ------MENU------ */}
      <Navigation />
    </div>
  );
};

export default Home;
