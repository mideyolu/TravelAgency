import { NavLink } from "react-router-dom";
import { navlinks } from "../Data/travigodata";

const PopMenu = ({ navlinks, popUpState }) => {
  return (
    <>
      <nav
        className={` 
        fixed top-14 right-14 bg-white bg-opacity-80 opacity-100 z-50 backdrop-filter backdrop:blur-md rounded-lg w-44 h-auto py-5 px-6 hidden lg:flex items-center justify-center ${popUpState ? 'lg:showpopup' : 'lg:noshowpopup'}`}
      >
        <ul className="flex items-start flex-col gap-3">
          {navlinks?.map((val, i) => (
            <li key={i}>
              <NavLink to={"#"}>{val.link}</NavLink>
            </li>
          ))}
          <li>
            <button
              type="button"
              className="button-light sm:w-auto shadow-slate-300 rounded-lg"
            >
              Join Us
            </button>
          </li>
        </ul>
      </nav>
    </>
  );
};

export default PopMenu;
