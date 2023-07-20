import { useContext, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { RoomsContext } from "../../context/SearchRoomsContext";

// interface SingleRoomParams {
//   roomId: number |undefined;
//   [key: string]: string | undefined;
// }
interface SingleRoomParams {
  roomId: any | undefined;
  [key: string]: string | undefined;
}

export default function SingleRoom() {
  const { rooms } = useContext(RoomsContext);
  const { roomId } = useParams<SingleRoomParams>();

  const filteredRooms = rooms.filter((room) => {
    return room.id === parseInt(roomId);
  });

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
                  <div className="flex flex-wrap gap-10">
                    {room.images.map((image, index) => (
                      <img
                        className="w-[600px]"
                        src={image}
                        alt={room.description}
                        key={index}
                      />
                    ))}
                  </div>
                  <div className="flex gap-5">
                    <div className="w-1/2">
                      <p>Details</p>
                      <p>{room.description}</p>
                      <p>Price £{room.price}</p>
                      <p>{room.size}</p>
                      <p>{room.max_capacity}</p>
                      <p>
                        {room.pets_allowed
                          ? "Pets Are Allowed"
                          : "Pets Are Not Allowed"}
                      </p>
                    </div>
                    <div className="flex-1">
                      <p>Extras</p>
                      <div className="flex flex-col">
                        <p className="flex flex-col">{room.features}</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </article>
      ) : (
        <div>Sorry No rooms found</div>
      )}
    </section>
  );
}
