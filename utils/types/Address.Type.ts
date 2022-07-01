
export interface TCoordinates {
    latitude: number;
    longitude: number;
}

export interface TAddress {
    addressNumber?: number
    country?: string;
    geometry?: {point: [number, number]};
    interpolated?: boolean;
    label?: string;
    municipality?: string;
    neighborhood?: string;
    postalCode?: string;
    region?: string;
    street?: string;
    subRegion?: string;
    timeZone?: Object;
}

export const cityLatLong = {
    berlin: {
        addressNumber: undefined,
        country: "DEU",
        geometry: {point: [13.37691, 52.51604]},
        interpolated: false,
        label: "Berlin, Deutschland",
        municipality: "Berlin",
        neighborhood: undefined,
        postalCode: "10117",
        region: "Berlin",
        street: undefined,
        subRegion: "Berlin",
        timeZone: {name: 'Europe/Berlin', offset: 7200},
    },
    hamburg: {
        addressNumber: undefined,
        country: "DEU",
        geometry: {point: [13.37691, 52.51604]},
        interpolated: false,
        label: "Hamburg, Deutschland",
        municipality: "Hamburg",
        neighborhood: undefined,
        postalCode: "10117",
        region: "Hamburg",
        street: undefined,
        subRegion: "Hamburg",
        timeZone: {name: 'Europe/Berlin', offset: 7200},
    },
    munich: {
        latitude: 48.1351,
        longitude: 11.5820
    },
    cologne: {
        latitude: 79.4,
        longitude: 101.1
    },
    frankfurtamMain: {
        latitude: 80.4,
        longitude: 101.1
    },
    stuttgart: {
        latitude: 79.4,
        longitude: 101.1
    },
    dortmund: {
        latitude: 100.4,
        longitude: 101.1
    },
    düsseldorf: {
        latitude: 78.4,
        longitude: 101.1
    },
    bremen: {
        latitude: 70.4,
        longitude: 101.1
    },
    hanover: {
        latitude: 70.4,
        longitude: 101.1
    }
}
