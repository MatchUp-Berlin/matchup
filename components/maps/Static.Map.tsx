import Image from 'next/image';
import React from 'react';
import { useQuery } from 'react-query';
import { useTheme } from '../../contexts/Theme';
import { getGoogleMapsLink } from '../../utils/Apis/getGoogleMapsLink';
import { getStaticMapLink } from '../../utils/Apis/getStaticMapLink';
import styles from './styles/Static.Map.module.scss';

export interface IStaticMapProps {
  longitude: number;
  latitude: number;
  zoom: number;
}

const StaticMap: React.FunctionComponent<IStaticMapProps> = (props) => {
  const { colors, darkMode } = useTheme();

  const googleLink = getGoogleMapsLink(props.longitude, props.latitude, props.zoom);
  const mapLink = getStaticMapLink(props.longitude, props.latitude, props.zoom, darkMode);

  // Request Map image from API
  const { isSuccess, isLoading, data } = useQuery(
    [props.longitude, props.latitude, props.zoom, darkMode],
    () =>
      fetch(mapLink) // MapBox API Call
        .then((res) => res.blob()) // transforming data to blob
        .then((res) => URL.createObjectURL(res)) // creating a src URL for image tag
  );

  return (
    <a href={googleLink}>
      <div
        onClick={() => {}}
        className={styles.wrapper}
        style={{ borderColor: darkMode ? colors.background[60] : '#DDDDDD' }}
      >
        {isLoading ? (
          <p>Loading...</p>
        ) : (
          isSuccess && (
            <Image src={data} alt="Map" objectFit="cover" layout="fill" width="100%" height="100%" />
          )
        )}
      </div>
    </a>
  );
};

export default StaticMap;

/* 

USAGE:

First, set up your NEXT_PUBLIC_MAPBOX_ACCESS_TOKEN= inside .env.local 

<StaticMap
  longitude={13.4712}
  latitude={52.4878}
  zoom={12}
></StaticMap>

*/
