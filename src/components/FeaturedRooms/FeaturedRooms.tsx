import { Link } from "react-router-dom";
import hotelRooms from "../../data/rooms.json";

interface Room {
  id: number;
  images: string[];
  max_capacity: string;
  price: number;
}

export default function FeaturedRooms() {
  return (
    <section>
      <article className="py-10">
        <div className="text-center pb-10">
          <h2 className="text-4xl tracking-wider">Featured - Rooms</h2>
          <span className="w-24 bg-secondary-color h-1 mx-auto block"></span>
        </div>
        <div className="container mx-auto px-7 md:px-0 grid md:grid-cols-2 lg:grid-cols-3  grid-cols-1 gap-7 gap-y-10">
          {hotelRooms.map((room: Room) => {
            return (
              <div
                key={room.id}
                className="relative shadow-md shadow-[rgba(0,0,0,.5)] hover:shadow-xl transition hover:shadow-[rgba(0,0,0,.5)]"
              >
                <img
                  className="w-[100%] h-64 object-cover"
                  src={room.images[0]}
                  alt={room.max_capacity}
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
      </article>
    </section>
  );
}
