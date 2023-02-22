export interface City {
  id: number;
  name: string
}
export interface Country {
  id: number;
  label: string;
  desc: string;
  cities: City[]
}
