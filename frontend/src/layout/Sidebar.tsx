import { useState } from "react";
import Logo from "../components/Logo";
import { FiSearch } from "react-icons/fi";
// import { PiHouse, PiHouseFill } from "react-icons/pi";
import { FaHeart, FaRegHeart, FaBars } from "react-icons/fa6";
import {
  RiFolderVideoFill,
  RiFolderVideoLine,
  RiSendPlaneFill,
  RiSendPlaneLine,
} from "react-icons/ri";
import { BiMessageSquareAdd, BiCompass, BiSolidCompass } from "react-icons/bi";
import { RiHome2Line, RiHome2Fill } from "react-icons/ri";
import Switcher from "../components/Switcher";

// import { Link } from "react-router-dom";
import SideNavItem from "../components/SideNavItem";

const Sidebar = () => {
  const [active, setActive] = useState("home");
  const handleNavChange = (active: string) => {
    setActive(active);
    localStorage.setItem("activeNav", active);
  };
  return (
    <>
      <div className="w-60 px-3 py-8 h-full border-r dark:border-gray-700/50 border-gray-700/20 flex flex-col justify-between">
        <div>
          <Logo height={"30"} class={"w-full px-4 py-2"} />
          <nav className="mt-7">
            <div className="flex flex-col gap-2">
              <SideNavItem
                text="Home"
                path="/"
                element={<RiHome2Line />}
                activeElement={<RiHome2Fill />}
                activationFunc={handleNavChange}
                activeNav={active}
              />
              <SideNavItem
                text="Search"
                path="/"
                element={<FiSearch />}
                activationFunc={handleNavChange}
                activeNav={active}
              />
              <SideNavItem
                text="Explore"
                path="/"
                element={<BiCompass />}
                activeElement={<BiSolidCompass />}
                activationFunc={handleNavChange}
                activeNav={active}
              />
              <SideNavItem
                text="Reels"
                path="/"
                element={<RiFolderVideoLine />}
                activeElement={<RiFolderVideoFill />}
                activationFunc={handleNavChange}
                activeNav={active}
              />
              <SideNavItem
                text="Messages"
                path="/"
                element={<RiSendPlaneLine />}
                activeElement={<RiSendPlaneFill />}
                activationFunc={handleNavChange}
                activeNav={active}
              />
              <SideNavItem
                text="Notifications"
                path="/"
                element={<FaRegHeart />}
                activeElement={<FaHeart />}
                activationFunc={handleNavChange}
                activeNav={active}
              />
              <SideNavItem
                text="Create"
                path="/"
                element={<BiMessageSquareAdd />}
                activationFunc={handleNavChange}
                activeNav={active}
              />
              <SideNavItem
                text="Profile"
                path={`/profile/${"ha_"}`}
                element={
                  <>
                    <div className="p-3 rounded-full dark:bg-white/30 bg-black/20"></div>
                  </>
                }
                activeElement={
                  <>
                    <div className="p-3 rounded-full dark:bg-white/30 bg-black/20 border dark:border-white border-black"></div>
                  </>
                }
                activationFunc={handleNavChange}
                activeNav={active}
              />
            </div>
          </nav>
        </div>

        <div>
          <SideNavItem
            text="More"
            path="/"
            element={<FaBars />}
            activationFunc={handleNavChange}
            activeNav={active}
          />
          <Switcher />
        </div>
      </div>
    </>
  );
};

export default Sidebar;
