import { Link } from "react-router-dom";
import rooms from "../../../imgs/rooms.jpg";

export default function Rooms() {
  return (
    <article className="relative">
      <img
        style={{ height: "60vh" }}
        className="w-screen"
        src={rooms}
        alt="a picture of one of the rooms"
      />
      <div className="absolute top-1/2 left-1/2 translate-x-[-50%] translate-y-[-50%] bg-[rgba(0,0,0,.5)] py-8 md:px-24 px-[86px] text-center">
        <p className="text-white text-6xl tracking-widest :hover-text-secondary-color w-full">
          Our Rooms
        </p>
        <span className="w-28 bg-secondary-color h-1 mx-auto block mt-4 mb-10"></span>
        <Link
          className="bg-secondary-color py-3 px-5 tracking-widest font-normal border-secondary-color hover:border hover:border-secondary-color hover:bg-transparent hover:text-secondary-color transition-all"
          to="/"
        >
          Return Home
        </Link>
      </div>
    </article>
  );
}
