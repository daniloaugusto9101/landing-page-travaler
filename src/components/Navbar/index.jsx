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
    <nav className="max-w-6xl m-auto flex justify-between items-center px-2 xl:px-10">
      <Logo w="w-36" />
      <ul className="hidden gap-2 md:flex lg:gap-5 ">
        {menu_data.map((obj, index) => (
          <li key={index}>
            <TextLink {...obj} />
          </li>
        ))}
      </ul>
      <HamburgerMenu />
    </nav>
  );
};

export default Navbar;
