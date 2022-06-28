export function getGoogleMapsLink(
  longitude: number,
  latitude: number,
  zoom: number,
) {
  return `https://www.google.com/maps/@${latitude},${longitude},${zoom}z`;
}
