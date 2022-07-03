import { createMap } from "maplibre-gl-js-amplify";
import { drawPoints } from "maplibre-gl-js-amplify";
import "maplibre-gl/dist/maplibre-gl.css";
import { TAddress, cityLatLong } from '../types/Address.Type'
import { MatchUp, TCity } from "../types/MatchUp.Type";

export async function initializeMapExplorer(matchUps: MatchUp[], city: TCity) {
    const center = cityLatLong[city]
    const markers = matchUps.map((matchUp) => (
        {
            coordinates: [matchUp?.address?.geometry?.point[0], matchUp?.address?.geometry?.point[1]],
            title:  matchUp.title,
            address: matchUp?.address?.label
        }
    ))

    const map = await createMap({
        container: "map",
        center: [center?.geometry?.point[0], center?.geometry?.point[1]], // [Longitude, Latitude]
        zoom: 12.5,
    })
    map.on("load", function () {
    drawPoints("mySourceName", // Arbitrary source name
        markers,
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
return map;
}