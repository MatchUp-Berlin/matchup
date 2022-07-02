import { createMap } from 'maplibre-gl-js-amplify';
import { drawPoints } from 'maplibre-gl-js-amplify';
import 'maplibre-gl/dist/maplibre-gl.css';
import { TAddress } from '../types/Address.Type';

export async function initializeMap(address) {
  const map = await createMap({
    container: 'map',
    center: [address.geometry.point[0], address.geometry.point[1]], // [Longitude, Latitude]
    zoom: 12.5,
  });
  if (address.addressNumber !== undefined && address.street !== undefined) {
    map.on('load', function () {
      drawPoints(
        'mySourceName', // Arbitrary source name
        [
          {
            coordinates: [address.geometry.point[0], address.geometry.point[1]], // [Longitude, Latitude]
            title: 'MatchUp Location',
            address: address.label,
          },
        ],
        map,
        {
          showCluster: true,
          unclusteredOptions: {
            showMarkerPopup: true,
          },
          clusterOptions: {
            showCount: true,
          },
        }
      );
    });
  }
}
