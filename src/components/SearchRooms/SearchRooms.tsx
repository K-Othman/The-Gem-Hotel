import { useContext, useState } from "react";
// import hotelRooms from "../data/rooms.json";
import { RoomsContext } from "../../context/SearchRoomsContext";
import { Link } from "react-router-dom";

export default function SearchRooms() {
  const [allowedPets, setAllowedPets] = useState(null);

  const {
    allowedPetsHandler,
    notAllowedPetsHandler,
    sortedByPriceAce,
    sortedByPriceDec,
    handleRoomTypeChange,
    rooms,
  } = useContext(RoomsContext);

  return (
    <section className="py-10 container mx-auto">
      <article>
        <div className="text-center">
          <h2 className="text-4xl tracking-wider">Services</h2>
          <span className="w-20 bg-secondary-color h-1 mx-auto block"></span>
        </div>
      </article>
      <article>
        <div>
          <div className="flex gap-10 mt-10">
            <div>
              <p>Price</p>
              <button onClick={sortedByPriceAce}>
                <svg
                  viewBox="0 0 1024 1024"
                  fill="currentColor"
                  height="1em"
                  width="1em"
                >
                  <path d="M868 545.5L536.1 163a31.96 31.96 0 00-48.3 0L156 545.5a7.97 7.97 0 006 13.2h81c4.6 0 9-2 12.1-5.5L474 300.9V864c0 4.4 3.6 8 8 8h60c4.4 0 8-3.6 8-8V300.9l218.9 252.3c3 3.5 7.4 5.5 12.1 5.5h81c6.8 0 10.5-8 6-13.2z" />
                </svg>
              </button>
              <button onClick={sortedByPriceDec}>
                <svg
                  viewBox="0 0 1024 1024"
                  fill="currentColor"
                  height="1em"
                  width="1em"
                >
                  <path d="M862 465.3h-81c-4.6 0-9 2-12.1 5.5L550 723.1V160c0-4.4-3.6-8-8-8h-60c-4.4 0-8 3.6-8 8v563.1L255.1 470.8c-3-3.5-7.4-5.5-12.1-5.5h-81c-6.8 0-10.5 8.1-6 13.2L487.9 861a31.96 31.96 0 0048.3 0L868 478.5c4.5-5.2.8-13.2-6-13.2z" />
                </svg>
              </button>
            </div>
            <div>
              <div>
                <div className="w-[50px] h-[20px] rounded-md relative bg-main-color text-black">
                  <button
                    className="absolute top-0 w-[50%] h-[100%] bg-secondary-color flex"
                    onClick={allowedPetsHandler}
                  >
                    {" "}
                  </button>
                  <button
                    className="absolute top-0 w-[50%] h-[100%] bg-secondary-color flex translate-x-[100%]"
                    onClick={notAllowedPetsHandler}
                  ></button>
                  {/* <button
                    onClick={
                      allowedPets ? notAllowedPetsHandler : allowedPetsHandler
                    }
                    className="w-[50px] h-[20px] rounded-md bg-main-color text-black"
                  >
                    {allowedPets ? (
                      <button
                        onClick={allowedPetsHandler}
                        className="absolute top-0 w-[50%] h-[100%] bg-secondary-color flex"
                      ></button>
                    ) : (
                      <button
                        onClick={notAllowedPetsHandler}
                        className="absolute top-0 w-[50%] h-[100%] bg-secondary-color flex translate-x-[100%]"
                      ></button>
                    )}
                  </button> */}
                </div>

                {/* {allowedPets ? (
                  <div className="w-[50px] h-[20px] rounded-md relative bg-main-color text-black">
                    <button
                      onClick={allowedPetsHandler}
                      className="absolute top-0 w-[50%] h-[100%] bg-secondary-color flex"
                    ></button>
                  </div>
                ) : (
                  <div className="w-[50px] h-[20px] rounded-md relative bg-main-color text-black">
                    <button
                      onClick={notAllowedPetsHandler}
                      className="absolute top-0 w-[50%] h-[100%] bg-secondary-color flex translate-x-[100%]"
                    ></button>
                  </div>
                )} */}
              </div>
              {/* the pets button */}

              <button onClick={allowedPetsHandler}>Allowed </button>
              <button onClick={notAllowedPetsHandler}>Not Allowed</button>
            </div>
            <div>
              <div className="flex flex-col w-fit">
                <label htmlFor="room-type">Room Type:</label>
                <select
                  id="room-type"
                  onChange={(e) => handleRoomTypeChange(e.target.value)}
                  className="bg-main-color"
                >
                  <option value="all">All</option>
                  <option value="Single Deluxe">Single</option>
                  <option value="Double Deluxe">Double</option>
                  <option value="Triple Deluxe">Triple</option>
                  <option value="Family Deluxe">Family</option>
                </select>
              </div>
            </div>
          </div>
          <div className="px-7 md:px-0 grid md:grid-cols-2 lg:grid-cols-3  grid-cols-1 gap-7 gap-y-10">
            {rooms.map((room) => {
              return (
                <div
                  key={room.id}
                  className="relative shadow-md shadow-[rgba(0,0,0,.5)] hover:shadow-xl transition hover:shadow-[rgba(0,0,0,.5)]"
                >
                  <img
                    src={room.images[0]}
                    alt={room.description}
                    className="w-[100%] h-64 object-cover"
                  />
                  <p className="absolute top-0 text-white bg-[rgba(0,0,0,.5)] p-4 rounded-r text-center">
                    £ {room.price} <br /> per night
                  </p>
                  <Link to={`/rooms/${room.id}`}>
                    <p className="text-center text-2xl bg-[#CFCFCF] py-2">
                      {room.max_capacity}
                    </p>
                  </Link>
                </div>
              );
            })}
          </div>
        </div>
      </article>
    </section>
  );
}
