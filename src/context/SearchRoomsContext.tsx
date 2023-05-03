import hotelRooms from "../data/rooms.json";

import {
  FC,
  ReactNode,
  createContext,
  useCallback,
  useMemo,
  useState,
} from "react";

type Props = {
  children: ReactNode;
};
export type HotelRooms = {
  id: number;
  price: number;
  size: string;
  max_capacity: string;
  description: string;
  pets_allowed: boolean;
  images: string[];
  features: string[];
};

export interface IRoomsContext {
  rooms: HotelRooms[];
  hotelRooms: HotelRooms[];
  allowedPetsHandler: () => void;
  notAllowedPetsHandler: () => void;
  sortedByPriceAce: () => void;
  sortedByPriceDec: () => void;
  handleRoomTypeChange: (roomType: string) => void;
}

export const RoomsContext = createContext<IRoomsContext>({} as IRoomsContext);

export const SearchRoomsContext: FC<Props> = ({ children }) => {
  const [rooms, setRooms] = useState<HotelRooms[]>(hotelRooms);
  const allowedPetsHandler = useCallback(() => {
    setRooms([...hotelRooms].filter((room) => room.pets_allowed));
  }, []);

  const notAllowedPetsHandler = useCallback(() => {
    setRooms([...hotelRooms].filter((room) => !room.pets_allowed));
  }, []);

  const sortedByPriceAce = useCallback(() => {
    setRooms([...rooms].sort((a, b) => a.price - b.price || a.id - b.id));
  }, [rooms]);
  const sortedByPriceDec = useCallback(() => {
    setRooms([...rooms].sort((a, b) => b.price - a.price || a.id - b.id));
  }, [rooms]);

  const handleRoomTypeChange = useCallback((roomType: string) => {
    if (roomType === "all") {
      setRooms(hotelRooms);
    } else {
      setRooms(
        [...hotelRooms].filter((room) => room.max_capacity === roomType)
      );
    }
  }, []);

  const RoomsContextValue = useMemo(
    () => ({
      allowedPetsHandler,
      notAllowedPetsHandler,
      sortedByPriceAce,
      sortedByPriceDec,
      handleRoomTypeChange,
      hotelRooms,
      rooms,
    }),
    [
      allowedPetsHandler,
      notAllowedPetsHandler,
      rooms,
      sortedByPriceAce,
      sortedByPriceDec,
      handleRoomTypeChange,
    ]
  );
  return (
    <RoomsContext.Provider value={RoomsContextValue}>
      {children}
    </RoomsContext.Provider>
  );
};
