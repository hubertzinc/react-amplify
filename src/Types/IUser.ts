export interface IUser {
  email: string;
  id: string;
  givenName: string;
  familyName: string;
  identities: Identity[];
}

export interface Identity {
  userId: string;
  providerName: string;
  providerType: string;
  issuer: string;
  primary: string;
  dateCreated: number;
}