import { IAddress } from "./IAddress";

export interface IUserProfile {
  userName: string;
  email: string;
  phoneNumber: string;
  firstName: string;
  lastName: string;
  shippingAddress: IAddress | null;
}
