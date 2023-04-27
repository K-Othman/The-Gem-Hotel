import { Link } from "react-router-dom";
import { useState } from "react";

export default function NavBar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleNav = () => setIsOpen(!isOpen);

  return (
    <section className="relative bg-main-color p-5 w-full">
      <div className="sticky top-0 flex justify-between container mx-auto transition z-50">
        <div>
          <Link
            className="border-2 border-secondary-color sm:p-3 p-1 hover:bg-secondary-color hover:text-white transition text-xl"
            to="/"
          >
            The Gem Hotel
          </Link>
        </div>
        <div className="hidden sm:flex gap-2">
          <Link className=" hover:text-secondary-color" to="/">
            HOME
          </Link>
          <Link className=" hover:text-secondary-color" to="/rooms">
            ROOMS
          </Link>
          <Link className=" hover:text-secondary-color" to="/contact">
            CONTACT
          </Link>
        </div>

        <div className="sm:hidden">
          <button onClick={toggleNav} className="transition-all duration-1000">
            <svg
              fill="currentColor"
              viewBox="0 0 16 16"
              height="1em"
              width="1em"
            >
              <path d="M4.5 9a3.5 3.5 0 100 7h7a3.5 3.5 0 100-7h-7zm7 6a2.5 2.5 0 110-5 2.5 2.5 0 010 5zm-7-14a2.5 2.5 0 100 5 2.5 2.5 0 000-5zm2.45 0A3.49 3.49 0 018 3.5 3.49 3.49 0 016.95 6h4.55a2.5 2.5 0 000-5H6.95zM4.5 0h7a3.5 3.5 0 110 7h-7a3.5 3.5 0 110-7z" />
            </svg>
            <div
              className={
                isOpen
                  ? "flex flex-col gap-2 p-4 z-10 bg-[#F7F7F7] text-left w-[100%] transition-all duration-1000"
                  : "hidden transition-all duration-1000"
              }
            >
              <Link to="/">HOME</Link>
              <Link to="/rooms">ROOMS</Link>
              <Link to="/contact">Contact</Link>
            </div>
          </button>
        </div>
      </div>
    </section>
  );
}
