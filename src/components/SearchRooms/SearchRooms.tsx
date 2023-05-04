import { useContext, useState } from "react";
// import hotelRooms from "../data/rooms.json";
import { RoomsContext } from "../../context/SearchRoomsContext";

export default function SearchRooms() {
  const [isOpen, setIsOpen] = useState(false);

  const {
    allowedPetsHandler,
    notAllowedPetsHandler,
    sortedByPriceAce,
    sortedByPriceDec,
    handleRoomTypeChange,
    rooms,
  } = useContext(RoomsContext);

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
          <div className="flex flex-col pb-48">
            <button onClick={sortedByPriceAce}>ACE</button>
            <button onClick={sortedByPriceDec}>DEC</button>
            <button onClick={allowedPetsHandler}>Allowed Pets</button>
            <button onClick={notAllowedPetsHandler}>Not Allowed Pets</button>
            <div>
              <button onClick={() => setIsOpen(!isOpen)}>Room Type</button>
              {isOpen && (
                <div className="flex flex-col justify-center items-start z-10">
                  <button onClick={() => handleRoomTypeChange("all")}>
                    All
                  </button>
                  <button onClick={() => handleRoomTypeChange("Single Deluxe")}>
                    Single
                  </button>
                  <button onClick={() => handleRoomTypeChange("Double Deluxe")}>
                    Double
                  </button>
                  <button onClick={() => handleRoomTypeChange("Triple Deluxe")}>
                    Triple
                  </button>
                  <button onClick={() => handleRoomTypeChange("Family Deluxe")}>
                    Family
                  </button>
                </div>
              )}
            </div>
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
