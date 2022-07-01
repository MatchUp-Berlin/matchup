import { Geo } from 'aws-amplify';
import React, { Dispatch, SetStateAction, useEffect, useState } from 'react';
import { useTheme } from '../../contexts/Theme';
import { TCity } from '../../utils/types/MatchUp.Type';
import { TCoordinates } from '../../utils/types/cityLatLong';
import StaticMap from '../maps/Static.Map';
import Switch from '../misc/Switch';
import styles from './styles/PrimaryInfo.Form.module.scss';
import { createMap } from "maplibre-gl-js-amplify";
import "maplibre-gl/dist/maplibre-gl.css";
import { callbackify } from 'util';

export interface IPrimaryInfoFormProps {
  title: string;
  date: string;
  location: TCity;
  coordinates: TCoordinates;
  indoor: boolean;

  setTitle: Dispatch<SetStateAction<string>>;
  setDate: Dispatch<SetStateAction<string>>;
  setLocation: Dispatch<SetStateAction<TCity>>;
  setCoordinates: Dispatch<SetStateAction<TCoordinates>>;
  setIndoor: Dispatch<SetStateAction<boolean>>;
}

const PrimaryInfoForm: React.FunctionComponent<IPrimaryInfoFormProps> = (props) => {
  const { colors, darkMode } = useTheme();
  const [LocationSearchResult, setLocationSearchResult] = useState(false);
  const [locationResult, setLocationResult] = useState([]);


  async function initializeMap() {
      const map = await createMap({
        container: "map", // An HTML Element or HTML element ID to render the map in https://maplibre.org/maplibre-gl-js-docs/api/map/
        center: [props.coordinates.longitude, props.coordinates.latitude], // [Longitude, Latitude]
        zoom: 12,
    })
}

useEffect(() => {
  initializeMap();
}, []);

function selectLocation(location) {
  props.setCoordinates({
    longitude: location.geometry.point[0],
    latitude: location.geometry.point[1]
  })
  console.log(location)
  props.setLocation(location.region.toLowerCase())
}

  async function searchLocation(event: any) {
    if (event.target.value.length === 0) return;
    const searchOptions = { maxResults: 5, language: 'en', countries: ["DEU"]};
    const results = await Geo.searchByText(event.target.value, searchOptions);
    console.log(results);
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
          value={props.location}
          onChange={(e) => props.setLocation(e.target.value as TCity)}
          onKeyUp={e => searchLocation(e)}
          placeholder="Where do you want to meet?"
          className={styles.input}
          style={{
            borderColor: darkMode ? colors.background[60] : '#DDDDDD',
            color: colors.text[60],
            marginBottom: '1em',
          }}
        ></input>
        <div>
          {locationResult.map((location) => (
              <div key={location.label}>
                  <li onClick={() => selectLocation(location)}>{location.label}</li>
        </div>
          ))}
          {/* {selectedLocationResult ? <div id="selectedlocation"><h5>Location&ensp;|</h5><p>&ensp;
          {selectedLocation}</p><TiDeleteOutline onClick={removeLocation}/></div> : ''} */}
      </div>
        <div id="map" className={styles.map}></div>
      </div>

      <div className={styles.indoor} style={{ color: colors.text[60] }}>
        <p>Is this taking place indoor?</p>
        <Switch callback={() => props.setIndoor(!props.indoor)} />
      </div>
    </form>
  );
};

export default PrimaryInfoForm;
function selectLocation(label: any): void {
  throw new Error('Function not implemented.');
}

