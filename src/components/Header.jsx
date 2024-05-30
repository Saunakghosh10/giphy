import { useState } from "react";
import { Link } from "react-router-dom";
import { HiEllipsisVertical } from "react-icons/hi2";
import { HiMiniBars3BottomRight } from "react-icons/hi2";
const Header = () => {
  const [categories, setcategories] = useState([]);
  const [showcategories, setshowcategories] = useState(false);

  return (
    <nav>
      <div className="relative flex gap-4 justify-between items-center mb-2">
        <Link to={"/"} className="flex gap-2">
          <img src="/logo.svg" alt="Giphy Logo" className="w-8" />
          <h1 className="text-5xl font-bold tracking-tight cursor-pointer">
            GIPHY
          </h1>
        </Link>

        {/* render categories */}
        <Link className="px-4 py-1 hover:gradient border-b-4 hidden lg:block">
          Reactions
        </Link>
        <button onClick={() => setshowcategories(!showcategories)}>
          <HiEllipsisVertical
            size={35}
            className={`py-0.5 transition ease-in-out hover:gradient ${
              showcategories ? "gradient" : ""
            } border-b-4 cursor-pointer hidden lg:block`}
          />
        </button>
        <div className="h-9 bg-gray-700 pt-1.5 px-6 cursor-pointer rounded">
          <Link to="/favorites">Favorite GIFs</Link>
        </div>

        {/* mobile ui --------- */}
        <button onClick={() => setshowcategories(!showcategories)}>
          <HiMiniBars3BottomRight
            className="text-sky-400 block lg:hidden"
            size={30}
          />
        </button>
      </div>
      
    </nav>
  );
};

export default Header;
