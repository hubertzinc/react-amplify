export interface IAddress {
  id: number;
  firstName: string | null;
  lastName: string | null;
  phone: string | null;
  companyName: string | null;
  addressLine1: string | null;
  addressLine2: string | null;
  city: string | null;
  state: IState | null;
  country: ICountry | null;
}

export interface IState {
  id: number;
  name: string;
}

export interface ICountry {
  id: number;
  name: string;
  code: string;
}