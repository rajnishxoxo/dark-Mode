import React, { useContext } from "react";
import theme from "../Context/theme";

const Header = () => {
  const { background, setBackGround } = useContext(theme);

  const handleThemeChange = () => {
    setBackGround(!background);
    console.log(background);
  };
  return (
    <div className="flex flex-row justify-between">
      <ul
        className={
          "flex flex-row justify-evenly w-full bg-gray-200" +
          (background ? "bg-gray-200" : " bg-black text-white")
        }
      >
        <li>Home</li>
        <li>about us</li>
        <li>contact us</li>
      </ul>
      <button
        onClick={handleThemeChange}
        className="bg-orange-500 w-40 p-2 rounded"
      >
        Dark-Mode
      </button>
    </div>
  );
};

export default Header;
