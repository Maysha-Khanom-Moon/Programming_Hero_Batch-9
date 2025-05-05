import { useState } from "react";
import Link from "../link/Link";
import { IoMenuOutline as Menu } from "react-icons/io5";

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
    <nav className="mx-10 my-5">
      <div onClick={() => setOpen(!open)} className="md:hidden cursor-pointer btn btn-square bg-white text-2xl border-1 mr-10">
        <Menu />
      </div>
      <ul className="md:flex hidden">
        {routes.map((route) => (
          <Link key={route.id} route={route}></Link>
        ))}
      </ul>
    </nav>
  );
}

export default Navbar;
