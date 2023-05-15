import { useContext, useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import { RoomsContext, HotelRooms } from "../../context/SearchRoomsContext";

// interface SingleRoomParams {
//   roomId: number |undefined;
//   [key: string]: string | undefined;
// }
// interface SingleRoomParams {
//   roomId: number | undefined;
//   [key: string]: string | undefined;
// }

export default function SingleRoom() {
  const [filteredRooms, setFilteredRooms] = useState<HotelRooms[]>([]);
  const { rooms } = useContext(RoomsContext);
  const { roomId } = useParams();

  useEffect(() => {
    if (!roomId) return;

    setFilteredRooms(
      rooms.filter((room) => {
        return room.id === parseInt(roomId);
      })
    );
  }, [roomId, rooms]);

  return (
    <section>
      {filteredRooms.length > 0 ? (
        <article>
          {filteredRooms.map((room) => {
            return (
              <div key={room.id}>
                <article className="relative mb-10">
                  <img
                    className="h-[60vh] w-screen"
                    src={room.images[0]}
                    alt={room.description}
                  />
                  <div className="text-center absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white bg-[rgb(0,0,0,0.5)] py-12 w-full md:max-w-[550px] md:mx-auto">
                    <p className="text-white text-5xl tracking-widest :hover-text-secondary-color w-full">
                      {room.max_capacity} Room
                    </p>
                    <span className="w-28 bg-secondary-color h-1 mx-auto block mt-4 mb-10"></span>
                    <Link
                      className="bg-secondary-color py-3 px-5 tracking-widest font-normal border-secondary-color hover:border hover:border-secondary-color hover:bg-transparent hover:text-secondary-color transition-all"
                      to={"/rooms"}
                    >
                      BACK TO ROOMS
                    </Link>
                  </div>
                </article>
                <div className="container mx-auto">
                  <div className="w-[80wv] flex flex-wrap gap-10">
                    {room.images.map((image, index) => (
                      <img
                        className="md:w-[600px] w-[500px] mx-auto"
                        src={image}
                        alt={room.description}
                        key={index}
                      />
                    ))}
                  </div>
                  <article className="ml-0 px-2">
                    <article className="flex md:gap-14 flex-col md:flex-row mx-auto">
                      <div className="my-4">
                        <h3 className="text-3xl">Details</h3>
                        <p className="text-lg max-w-[600px] leading-8 pt-4">
                          {room.description}
                        </p>
                      </div>
                      <div className="my-4">
                        <h3 className="text-4xl">Information</h3>
                        <ul className="leading-8 tracking-widest">
                          <li>Price: £{room.price}</li>
                          <li>Size: {room.size}</li>
                          <li>Max Capaxity: {room.max_capacity}</li>
                          <li>
                            {room.pets_allowed
                              ? "Pets Are Allowed"
                              : "Pets Are Not Allowed"}
                          </li>
                        </ul>
                      </div>
                    </article>
                    <div className="">
                      <p className="text-4xl">Extras</p>
                      {room.features.map((feature) => (
                        <p className="leading-8">- {feature}</p>
                      ))}
                    </div>
                  </article>
                </div>
              </div>
            );
          })}
        </article>
      ) : (
        <p>Sorry No rooms found</p>
      )}
    </section>
  );
}
