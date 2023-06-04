import React from "react";

export interface IUser {
  name: string;
  email: string;
  role: string;
  address: string;
  phone: string;
  dob: Date;
}

export interface IUserState {
  user: IUser | null;
  setUser: React.Dispatch<React.SetStateAction<IUser | null>>;
}

const UserContext = React.createContext<IUserState | undefined>(undefined);

export default UserContext;
