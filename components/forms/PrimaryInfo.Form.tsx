import { Geo } from 'aws-amplify';
import React, { Dispatch, SetStateAction } from 'react';
import { useTheme } from '../../contexts/Theme';
import { TCity } from '../../utils/types/MatchUp.Type';
import StaticMap from '../maps/Static.Map';
import Switch from '../misc/Switch';
import styles from './styles/PrimaryInfo.Form.module.scss';

export interface IPrimaryInfoFormProps {
  title: string;
  date: string;
  location: TCity;
  indoor: boolean;

  setTitle: Dispatch<SetStateAction<string>>;
  setDate: Dispatch<SetStateAction<string>>;
  setLocation: Dispatch<SetStateAction<TCity>>;
  setIndoor: Dispatch<SetStateAction<boolean>>;
}

const PrimaryInfoForm: React.FunctionComponent<IPrimaryInfoFormProps> = (props) => {
  const { colors, darkMode } = useTheme();

  async function searchLocation(event: any) {
    const searchOptions = { maxResults: 10, language: 'en' };
    const results = await Geo.searchByText(event, searchOptions);
    console.log(results);
    if (results.length > 0) {
      // setLocationSearchResult(true);
      props.setLocation(results);
    }
    if (results.length <= 0) {
      props.setLocation([]);
      // setLocationSearchResult(false);
    }
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
          value={props.location}
          onChange={(e) => props.setLocation(e.target.value as TCity)}
          placeholder="Where do you want to meet?"
          className={styles.input}
          style={{
            borderColor: darkMode ? colors.background[60] : '#DDDDDD',
            color: colors.text[60],
            marginBottom: '1em',
          }}
        ></input>
        <StaticMap latitude={15} longitude={50} zoom={15} />
      </div>

      <div className={styles.indoor} style={{ color: colors.text[60] }}>
        <p>Is this taking place indoor?</p>
        <Switch callback={() => props.setIndoor(!props.indoor)} />
      </div>
    </form>
  );
};

export default PrimaryInfoForm;
