import { useState } from "react";
import Link from "../link/Link";
import { IoMenuOutline as Menu } from "react-icons/io5";
import { RxCross2 as Cross } from "react-icons/rx";

function Navbar() {
  const routes = [
    { id: 1, name: "Home", path: "/" },
    { id: 2, name: "About", path: "/about" },
    { id: 3, name: "Services", path: "/services" },
    { id: 4, name: "Contact", path: "/contact" },
    { id: 5, name: "Not Found", path: "*" },
  ];

  const [open, setOpen] = useState(false);

  return (
    <nav className="px-10 my-5 relative w-full md:w-full bg-yellow-100 rounded-lg p-2 shadow-md">
      <div
        onClick={() => setOpen(!open)}
        className="md:hidden cursor-pointer bg-none text-2xl font-medium mb-2 rounded-lg p-1 shadow-md w-fit"
      >
        {open ? <Cross /> : <Menu />}
      </div>
      <ul
        className={`absolute md:static grid md:flex gap-2 
          ${open ? "top-12" : "top-[-350px]"}
         bg-yellow-100 md:block rounded-lg md:p-1 p-6 duration-1000 md:duration-0`}
      >
        {routes.map((route) => (
          <Link key={route.id} route={route}></Link>
        ))}
      </ul>
    </nav>
  );
}

export default Navbar;
