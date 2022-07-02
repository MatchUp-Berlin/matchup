
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
        geometry: {point: [13.37691, 52.51]},
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
        geometry: {point: [9.99, 53.55]},
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
        addressNumber: undefined,
        country: "DEU",
        geometry: {point: [11.57, 48.13]},
        interpolated: false,
        label: "München, Bayern, Deutschland",
        municipality: "München",
        neighborhood: undefined,
        postalCode: "10117",
        region: "München",
        street: undefined,
        subRegion: "München",
        timeZone: {name: 'Europe/Berlin', offset: 7200},
    },
    cologne: {
        addressNumber: undefined,
        country: "DEU",
        geometry: {point: [6.95, 50.94]},
        interpolated: false,
        label: "Köln, Nordrhein-Westfalen, Deutschland",
        municipality: "München",
        neighborhood: undefined,
        postalCode: "50667",
        region: "Köln",
        street: undefined,
        subRegion: "Köln",
        timeZone: {name: 'Europe/Berlin', offset: 7200},
    },
    frankfurtamMain: {
        addressNumber: undefined,
        country: "DEU",
        geometry: {point: [8.68, 50.11]},
        interpolated: false,
        label: "Frankfurt am Main, Hessen, Deutschland",
        municipality: "Frankfurt am Main",
        neighborhood: undefined,
        postalCode: "60311",
        region: "Frankfurt am Main",
        street: undefined,
        subRegion: "Frankfurt am Main",
        timeZone: {name: 'Europe/Berlin', offset: 7200},
    },
    stuttgart: {
        addressNumber: undefined,
        country: "DEU",
        geometry: {point: [9.17, 48.76]},
        interpolated: false,
        label: "Stuttgart, Baden-Württemberg, Deutschland",
        municipality: "Stuttgart",
        neighborhood: undefined,
        postalCode: "70178",
        region: "Stuttgart",
        street: undefined,
        subRegion: "Stuttgart",
        timeZone: {name: 'Europe/Berlin', offset: 7200},
    },
    dortmund: {
        addressNumber: undefined,
        country: "DEU",
        geometry: {point: [7.45, 51.51]},
        interpolated: false,
        label: "Dortmund, Nordrhein-Westfalen, Deutschland",
        municipality: "Dortmund",
        neighborhood: undefined,
        postalCode: "44137",
        region: "Dortmund",
        street: undefined,
        subRegion: "Dortmund",
        timeZone: {name: 'Europe/Berlin', offset: 7200},
    },
    düsseldorf: {
        addressNumber: undefined,
        country: "DEU",
        geometry: {point: [6.77, 51.21]},
        interpolated: false,
        label: "Düsseldorf, Nordrhein-Westfalen, Deutschland",
        municipality: "Düsseldorf",
        neighborhood: undefined,
        postalCode: "44137",
        region: "Düsseldorf",
        street: undefined,
        subRegion: "Düsseldorf",
        timeZone: {name: 'Europe/Berlin', offset: 7200},
    },
    bremen: {
        addressNumber: undefined,
        country: "DEU",
        geometry: {point: [8.8, 53.07]},
        interpolated: false,
        label: "Bremen, Deutschland",
        municipality: "Düsseldorf",
        neighborhood: undefined,
        postalCode: "28195",
        region: "Bremen",
        street: undefined,
        subRegion: "Bremen",
        timeZone: {name: 'Europe/Berlin', offset: 7200},
    },
    hanover: {
        addressNumber: undefined,
        country: "DEU",
        geometry: {point: [9.73, 52.37]},
        interpolated: false,
        label: "Hannover, Niedersachsen, Deutschland",
        municipality: "Hannover",
        neighborhood: undefined,
        postalCode: "30159",
        region: "Hannover",
        street: undefined,
        subRegion: "Hannover",
        timeZone: {name: 'Europe/Berlin', offset: 7200},
    }
}
