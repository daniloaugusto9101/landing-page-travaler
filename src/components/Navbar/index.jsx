import React from "react";
import TextLink from "../TextLink";
import Logo from "../Logo";
import HamburgerMenu from "../HamburgerMenu";

const menu_data = [
  {
    text: "sobre nós",
    url: "#",
    idType: 1,
  },
  {
    text: "serviços",
    url: "#",
    idType: 1,
  },
  {
    text: "contato",
    url: "#",
    idType: 1,
  },
  {
    text: "login",
    url: "#",
    idType: 2,
  },
  {
    text: "criar conta",
    url: "#",
    idType: 3,
  },
];

const Navbar = () => {
  return (
    <nav className="w-full px-8 relative z-50 bg-red-400">
      <div className="bg-blue-400 max-w-6xl m-auto flex justify-between items-center px-2 py-8 xl:px-10 relative z-10">
        <Logo w="w-36" />
        <ul className="hidden gap-2 md:flex lg:gap-5 ">
          {menu_data.map((obj, index) => (
            <li key={index}>
              <TextLink {...obj} />
            </li>
          ))}
        </ul>
        <HamburgerMenu />
      </div>
    </nav>
  );
};

export default Navbar;
