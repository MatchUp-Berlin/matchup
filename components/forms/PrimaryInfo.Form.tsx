/* REACT, NEXT */
import React, { Dispatch, SetStateAction, useEffect, useState } from 'react';

/* STYLING */
import { useTheme } from '../../contexts/Theme';
import styles from './styles/PrimaryInfo.Form.module.scss';
import Switch from '../misc/Switch';
import { pin } from '../icons';

/* UTILS */
import { Geo } from 'aws-amplify';
import { TCity } from '../../utils/types/MatchUp.Type';
import { TAddress } from '../../utils/types/Address.Type';
import { initializeMap } from '../../utils/Maps/initializeMap.util';

export interface IPrimaryInfoFormProps {
  title: string;
  date: string;
  location: TCity;
  address: TAddress;
  indoor: boolean;

  setTitle: Dispatch<SetStateAction<string>>;
  setDate: Dispatch<SetStateAction<string>>;
  setLocation: Dispatch<SetStateAction<TCity>>;
  setAddress: Dispatch<SetStateAction<TAddress>>;
  setIndoor: Dispatch<SetStateAction<boolean>>;
}

const PrimaryInfoForm: React.FunctionComponent<IPrimaryInfoFormProps> = (props) => {
  const { colors, darkMode, shadows } = useTheme();
  const [locationResult, setLocationResult] = useState<any[]>([]);

  useEffect(() => {
    initializeMap(props.address);
  }, [props.address]);

  function selectLocation(loc: TAddress) {
    setLocationResult([]);
    props.setAddress(loc);
    loc.municipality && props.setLocation(loc.municipality.toLowerCase() as TCity)
    initializeMap(props.address);
  }

  async function searchLocation(event: any) {
    if (event.target.value.length === 0) {
      setLocationResult([]);
      return;
    }
    const searchOptions = { maxResults: 5, language: 'en', countries: ['DEU'] };
    const results = await Geo.searchByText(event.target.value, searchOptions);
    if (results.length > 0) setLocationResult(results);
  }

  return (
    <form className={styles.wrapper}>
      <div className={styles.inputGroup}>
        <label className={styles.label} style={{ color: colors.text[100] }}>
          Title
        </label>
        <input
          value={props.title}
          onChange={(e) => props.setTitle(e.target.value)}
          placeholder="Give your MatchUp a cool name"
          className={styles.input}
          style={{
            borderColor: darkMode ? colors.background[60] : '#DDDDDD',
            color: colors.text[60],
          }}
        ></input>
      </div>

      <div className={styles.inputGroup}>
        <label className={styles.label} style={{ color: colors.text[100] }}>
          Time
        </label>
        <input
          value={props.date}
          onChange={(e) => props.setDate(e.target.value)}
          placeholder="Choose a day and time to MatchUp"
          className={styles.input}
          type="datetime-local"
          style={{
            borderColor: darkMode ? colors.background[60] : '#DDDDDD',
            color: colors.text[60],
          }}
        ></input>
      </div>

      <div className={styles.inputGroup}>
        <label className={styles.label} style={{ color: colors.text[100] }}>
          Location
        </label>
        <input
          onKeyUp={(e) => searchLocation(e)}
          placeholder="Where do you want to meet?"
          className={styles.input}
          style={{
            borderColor: darkMode ? colors.background[60] : '#DDDDDD',
            color: colors.text[60],
            marginBottom: '1em',
          }}
        ></input>
        {locationResult.length > 0 && (
          <div
            className={styles.locationSuggestions}
            style={{ backgroundColor: colors.background[80], boxShadow: shadows.medium }}
          >
            {locationResult.map((location) => (
              <div className={styles.suggestion} key={location.label}>
                <svg viewBox={pin.viewBox} width="16" height="20" fill={colors.text[60]}>
                  {pin.path}
                </svg>
                <li style={{ color: colors.text[100] }} onClick={() => selectLocation(location)}>
                  {location.label}
                </li>
              </div>
            ))}
          </div>
        )}
      </div>
      <div id="map" className={styles.map}></div>

      <div className={styles.indoor} style={{ color: colors.text[60] }}>
        <p>Is this taking place indoor?</p>
        <Switch callback={() => props.setIndoor(!props.indoor)} />
      </div>
    </form>
  );
};

export default PrimaryInfoForm;
