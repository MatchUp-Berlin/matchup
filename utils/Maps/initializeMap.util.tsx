import { createMap } from 'maplibre-gl-js-amplify';
import { drawPoints } from 'maplibre-gl-js-amplify';
import 'maplibre-gl/dist/maplibre-gl.css';
import { TAddress } from '../types/Address.Type';

function getPin() {
  var pin = document.createElement('img');
  pin.src =
    'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAA5CAYAAABwDahPAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAR1SURBVHgBzZrPbxtVEMe/s+bSoLYOqCeQ4hxAopemElI50fQG/RGC0iOimyIhbin8A3HEPwA3uNAtvaYiJGp7rOmpCKSWHsqBAxtBTwXigmgvtacza7tubMc7b/ftJh/Jkm3N+s337czbN/NM8MDWfFhFC/NgmiGiKYBn5Otq99Uj1hczfgFxAxXcmVyLYuSEkJGu0yGB3pOPs8gC4w4TfyliGlnFOAtQx4N2sMTMF7B9hnMhExG1K+0VVyFOAh7OnV/27fggEoL1g+vfrJjtLUYy6zU8oTUiHEE5xFzhE5a7EaQZ/Dv30Tlq0e0SnVdqOubWmXA+zXCsgIenzy+3uR2hwJAZQ1Xy4jsN23FGO4aQOi8rRB17gHF5MVKA3jpVj6wDHnoZmHoFeHFf54v/HwOPHoPv/YasBITwwPrFS0NjDX6hCavxB8ewocOvgd6UNHn7WN/xUYgI/uEW+OaPcKQpiX10MLFfGHKkRTfg4DzJTNOHZwERYEKF6uvsKfDqVRchVXqSRMXRbeM//8E17undE+L8AnJxvYH2t6tmc/FvZXI9qj/zofemGzq/wwh98gHo+FvwwuZ9tD//opMr6TT5P56ebERN/dBfRltUhxGddW/OKxKGwWcfW62rOIALvQ+JgGT2gXOWq2nhZBI63tG8MP4uMS1tzYZJnnbuQMu2m6RDL0nynURRJHd26lWLaRX7EeqbRIA8KJYsV9HCKRSNdVHobuMRJBs1xkzqBTL7OH4MhaPL8bjnSJ9ZDaNAwifV+YQ3jOu8B+gdY47tx3wg92LWYut11Ukby/pQlMgJJKNt22RbcvmhZhyLUNMkrqUaTuyzxqUfjONJIh+xCSjT+R4TExarampFtscxCnjwD0rnwd8mMxXQNFnGf6I0Nu1jmQXwr9mrKVc4vm81jQOGtPos/HwXpXHzltGQY3mQcWwy1Xr2Xgl3QfLNWjtrnzXQ/iSM8JVrKBq+ctVuTGgE0lhds9rrzPD1GyiMpOB3KPalwx1Ila9J3LBew6vXillW5TfbX12223OnPR903vP35gulv5PUrz5FqPOOv5m05dGryCqIYH0eZBzQ+29VOlHT70qcDutSmS3DES0xtU7OAv90F/z1ZWs3oj8mODq4ES123nfRg4tuW8W9kau1spSbZK3YNFllRcvaapQO3XSvQ7etsZX1LjxDhWjdcPj1pGPX2RZPJNsQ/ktCZPMPsD4QHWd8m/M7NbZ6NOcWb1tq5F0irm5cnH7+i6HdKAf8PlwSujy0uTtULA8J0NiSZfVT7DHEp8VRR04j64HJjSiSwzzzQVvRJHG/EY3cMYw95Mud1B4YTNpBUk8pd1NEmvOK7Zh1F0RYnFfMB91lirA6rzid1JchwsV5xf2/EgWKcHVeyfRvlSJEZHFeyf53G48isjqvZBag+BCRx3kllwAlj4i8ziu5BShZRPhwXvEiQHER4ct5xZsAxSLCp/OKVwHKOBG+nVe8C1BGiSjCeaUQAcrWmTDsnv43pYF8aaf9fF6eAhmL2VSxc3J2AAAAAElFTkSuQmCC';
  return pin;
}

export async function initializeMap(address: TAddress) {
  const map = await createMap({
    container: 'map',
    center: address.geometry?.point as [number, number],
    zoom: 12.5,
  });

  if (address.addressNumber !== undefined && address.street !== undefined) {
    const pin = getPin();
    map.on('load', function () {
      drawPoints(
        'mySourceName', // Arbitrary source name
        [
          {
            coordinates: address.geometry?.point as [number, number],
            title: 'MatchUp',
            address: address.label,
          },
        ],
        map,
        {
          showCluster: false,
          unclusteredOptions: {
            showMarkerPopup: false,
            markerImageElement: pin,
          },
        }
      );
    });
  }
  return map;
}
