import React from "react";

const TextLink = ({ text, url, idType }) => {
  const typeStyle = {
    1: "text-black-950",
    2: "px-6 py-3 text-orange-400 border-orange-400 border-2 rounded-full bg-white ",
    3: "px-6 py-3 text-white border-orange-400 border-2 rounded-full bg-orange-400 shadow-lg",
  };

  return (
    <a
      className={`font-bold text-xl capitalize font-poppins ${typeStyle[idType]} `}
      href={url}
    >
      {text}
    </a>
  );
};

export default TextLink;
