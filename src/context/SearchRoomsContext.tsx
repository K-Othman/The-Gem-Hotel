import { FC, ReactNode, createContext } from "react";

type Props = {
  children: ReactNode;
};

export const RoomsContext = createContext({});

export const SearchRoomsContext: FC<Props> = ({ children }) => {
  return <div>{children}</div>;
};
