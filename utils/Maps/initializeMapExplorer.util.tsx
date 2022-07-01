import { createMap } from "maplibre-gl-js-amplify";
import { drawPoints } from "maplibre-gl-js-amplify";
import "maplibre-gl/dist/maplibre-gl.css";
import { TAddress, cityLatLong } from '../types/Address.Type'

export async function initializeMapExplorer(address, city) {
    const center = cityLatLong[city]

    console.log(address);

    const map = await createMap({
        container: "map",
        center: [center.geometry.point[0], center.geometry.point[1]], // [Longitude, Latitude]
        zoom: 12.5,
    })
    map.on("load", function () {
    drawPoints("mySourceName", // Arbitrary source name
        [
            {
              coordinates: [address.geometry.point[0], address.geometry.point[1]], // [Longitude, Latitude]
                title: "MatchUp Location",
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