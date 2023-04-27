import { useState } from "react";
import hotelRooms from "../data/rooms.json";

export default function SearchRooms() {
  const [rooms, setRooms] = useState(hotelRooms);
  const [filteredRooms, setFilteredRooms] = useState(hotelRooms);

  const sortedByPriceAce = () => {
    setRooms(
      [...filteredRooms].sort((a, b) => a.price - b.price || a.id - b.id)
    );
  };
  const sortedByPriceDec = () => {
    setRooms(
      [...filteredRooms].sort((a, b) => b.price - a.price || a.id - b.id)
    );
  };

  const allowedPetsHandler = () => {
    setRooms([...filteredRooms].filter((room) => room.pets_allowed));
  };

  const notAllowedPetsHandler = () => {
    setRooms([...filteredRooms].filter((room) => !room.pets_allowed));
  };

  return (
    <section className="py-10">
      <article>
        <div className="text-center">
          <h2 className="text-4xl tracking-wider">Services</h2>
          <span className="w-20 bg-secondary-color h-1 mx-auto block"></span>
        </div>
      </article>
      <article>
        <div>
          <div className="flex flex-col">
            <button onClick={sortedByPriceAce}>ACE</button>
            <button onClick={sortedByPriceDec}>DEC</button>
            <button onClick={allowedPetsHandler}>Allowed Pets</button>
            <button onClick={notAllowedPetsHandler}>Not Allowed Pets</button>
          </div>

          {rooms.map((room) => {
            return (
              <div key={room.id} className="w-[250px]">
                <img src={room.images[0]} alt={room.description} />
                <p>{room.features}</p>
                <p>{room.price}</p>
              </div>
            );
          })}
        </div>
      </article>
    </section>
  );
}
