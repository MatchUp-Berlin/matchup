export function getStaticMapLink(
  longitude: number,
  latitude: number,
  zoom: number,
  darkMode: Boolean = false
) {
  return `https://api.mapbox.com/styles/v1/mapbox/${
    darkMode ? 'dark' : 'light'
  }-v10/static/pin-s+555555(${longitude},${latitude})/${longitude},${latitude},${zoom},0/300x200@2x?access_token=${
    process.env.NEXT_PUBLIC_MAPBOX_ACCESS_TOKEN
  }`;
}
