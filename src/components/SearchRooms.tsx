import { useState } from "react";
import hotelRooms from "../data/rooms.json";

export default function SearchRooms() {
  const [rooms, setRooms] = useState(hotelRooms);
  const [filteredRooms, setFilteredRooms] = useState(hotelRooms);
  const [isOpen, setIsOpen] = useState(false);
  const [selectedRoomType, setSelectedRoomType] = useState("all");

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

  const handleRoomTypeChange = (roomType: string) => {
    if (roomType === "all") {
      setRooms(filteredRooms);
    } else {
      setRooms(
        [...filteredRooms].filter((room) => room.max_capacity === roomType)
      );
    }
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
          <div>
            <input type="checkbox" />
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

// <label htmlFor="type">Room Type</label>
// <select
//   name="type"
//   id="type"
//   value={selectedRoomType}
//   onChange={(e) => setSelectedRoomType(e.target.value)}
// >
//   <option value="all">All</option>
//   <option value="Single Deluxe">
//     <button>Single Deluxe</button>
//   </option>
//   <option value="Double Deluxe">Double Deluxe</option>
//   <option value="Triple Deluxe">Triple Deluxe</option>
//   <option value="Family Deluxe">Family Deluxe</option>
// </select>
// {/* <button onClick={filterByType}>Filter</button> */}
