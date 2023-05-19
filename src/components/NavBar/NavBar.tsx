import { Link } from "react-router-dom";
import { useState } from "react";

export default function NavBar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleNav = () => setIsOpen(!isOpen);

  const navLinks = [
    { title: "HOME", path: "/" },
    { title: "ROOMS", path: "/rooms" },
    { title: "CONTACT", path: "/contact" },
  ];

  return (
    <section className="relative bg-main-color p-5 w-full">
      <div className="sticky top-0 flex justify-between container mx-auto transition">
        <div>
          <Link
            className="border-2 border-secondary-color sm:p-3 p-1 hover:bg-secondary-color hover:text-white transition text-xl"
            to="/"
          >
            The Gem Hotel
          </Link>
        </div>
        <div className="hidden md:flex gap-2">
          {navLinks.map((link) => (
            <Link
              key={link.path}
              className="hover:text-secondary-color"
              to={link.path}
            >
              {link.title}
            </Link>
          ))}
        </div>

        <div className="md:hidden top-0 right-0 ">
          <span
            onClick={toggleNav}
            className="transition-all duration-1000 flex flex-end"
          >
            <div className="absolute right-0">
              <svg
                fill="currentColor"
                viewBox="0 0 16 16"
                height="1em"
                width="1em"
              >
                <path d="M4.5 9a3.5 3.5 0 100 7h7a3.5 3.5 0 100-7h-7zm7 6a2.5 2.5 0 110-5 2.5 2.5 0 010 5zm-7-14a2.5 2.5 0 100 5 2.5 2.5 0 000-5zm2.45 0A3.49 3.49 0 018 3.5 3.49 3.49 0 016.95 6h4.55a2.5 2.5 0 000-5H6.95zM4.5 0h7a3.5 3.5 0 110 7h-7a3.5 3.5 0 110-7z" />
              </svg>
            </div>
            <div className={`${!isOpen && "opacity-0 transition-all"}`}>
              <div className="flex flex-col mx-auto absolute right-[50%] translate-x-[50%] py-5 pl-5 pr-0 mr-0 z-50 bg-main-color top-10  w-[112%] md:w-[150%] text-center opacity-1 transition-opacity">
                {navLinks.map((link) => (
                  <Link key={link.path} to={link.path} onClick={toggleNav}>
                    {link.title}
                  </Link>
                ))}
              </div>
            </div>
          </span>
        </div>
      </div>
    </section>
  );
}
