/* eslint-disable react/prop-types */
import { NavLink } from "react-router-dom";
import logo from "../Images/logo.png";
import menu from "../Images/menu.svg";
import { navlinks } from "../Data/travigodata";
import PopMenu from "./PopMenu";
import { useEffect, useState } from "react";

const Navbar = ({ navlinks }) => {
  const [navState, setNavState] = useState(false);
  const [popUpState, setPopUpState] = useState(false);

  const onTriggerPopUp = () => setPopUpState(!popUpState);

  const onNavScroll = () => {
    window.scrollX > 180 ? setNavState(true) : setNavState(false);
  };

  useEffect(() => {
    window.addEventListener("scroll", onNavScroll);

    return () => {
      window.removeEventListener("scroll", onNavScroll);
    };
  }, []);

  return (
    <>
      <header className={`nav-default ${navState && "nav-sticky"}`}>
        <nav className="flex items-center justify-between travigo-container">
          <NavLink to={`/`} className="flex ic w-22 h-9 object-fill">
            <img src={logo} alt="Logo/img" className="" />
          </NavLink>

          <ul className="flex items-center gap-7  lg:hidden">
            {navlinks?.map((val, i) => (
              <li key={i}>
                <NavLink to={"#"} className="text-lg text-slate-900">
                  {val.link}
                </NavLink>
              </li>
            ))}
          </ul>
          <ul className="flex items-center lg:hidden">
            <li>
              <button
                type="button"
                className="button-emrald px-7 text-base py-1"
              >
                Join Us
              </button>
            </li>
          </ul>

          <ul className="hidden lg:flex items-center">
            <li>
              <button
                type="button"
                className="flex items-center cursor-pointer justify-center transition-all duration-200 active:scale-90"
                onClick={onTriggerPopUp}
              >
                <img
                  src={menu}
                  alt="menu/svg"
                  className="object-cover shadow-sm filter"
                />
              </button>
            </li>
          </ul>
        </nav>
      </header>
      <PopMenu navlinks={navlinks} popUpState={popUpState} />
    </>
  );
};

export default Navbar;
