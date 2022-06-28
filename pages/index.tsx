import type { NextPage } from 'next';
import StaticMap from '../components/maps/Static.Map';
import { useTheme } from '../contexts/Theme';
import { getGoogleMapsLink } from '../utils/Apis/getGoogleMapsLink';
import { getStaticMapLink } from '../utils/Apis/getStaticMapLink';

const Home: NextPage = () => {
  const { darkMode, toggleDarkMode } = useTheme();
  return (
    <>
      <StaticMap
        longitude={13.4712}
        latitude={52.4878}
        zoom={12}
      ></StaticMap>
      <button onClick={toggleDarkMode}>DarkMode</button>
    </>
  );
};

export default Home;
