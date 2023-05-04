import landing3 from "../../imgs/landing3.jpg";
import { Link } from "react-router-dom";

export default function LandingPage() {
  return (
    <section>
      <div>
        <div className="relative">
          <div>
            <img
              className="h-[calc(100vh-68px)] min-w-full"
              src={landing3}
              alt="landing foto for the hotel"
            />
          </div>
          <div className="text-center absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white bg-[rgb(0,0,0,0.5)] py-12 w-full md:max-w-[550px] md:mx-auto">
            <p className="text-5xl tracking-wider mb-5">Luxurious Rooms</p>
            <p className="text-xl tracking-widest mb-6">
              Deluxe Rooms Starting At £80
            </p>
            <Link
              className="bg-secondary-color py-2 px-3 tracking-wider"
              to="/rooms"
            >
              OUR ROOMS
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
