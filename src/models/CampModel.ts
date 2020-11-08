export interface Camp {
    _id: number;
    image: string;
    name: string;
    description: string;
    location: Location;
    contact: number;
}

export interface Location {
    state: string;
    city: string;
    address: string;
}