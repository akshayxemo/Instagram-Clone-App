import { useState } from "react";
import Logo from "../components/Logo";
import { FiSearch } from "react-icons/fi";
import { PiHouse, PiHouseFill } from "react-icons/pi";
import {
  FaRegCompass,
  FaCompass,
  FaHeart,
  FaRegHeart,
  FaBars,
} from "react-icons/fa6";
import {
  RiFolderVideoFill,
  RiFolderVideoLine,
  RiSendPlaneFill,
  RiSendPlaneLine,
} from "react-icons/ri";
import { BiMessageSquareAdd } from "react-icons/bi";

import { Link } from "react-router-dom";
import SideNavItem from "../components/SideNavItem";

const Sidebar = () => {
  const [active, setActive] = useState("home");
  const handleNavChange = (active: string) => {
    setActive(active);
    localStorage.setItem("activeNav", active);
  };
  return (
    <>
      <div className="w-60 px-3 py-8 h-full border-r border-gray-700/50 text-white flex flex-col justify-between">
        <div>
          <Logo height={"30"} class={"w-full px-4 py-2"} />
          <nav className="mt-8">
            <div className="flex flex-col gap-2">
              <SideNavItem
                text="Home"
                path="/"
                element={<PiHouse />}
                activeElement={<PiHouseFill />}
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
                element={<FaRegCompass />}
                activeElement={<FaCompass />}
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

              <div className="p-3 hover:bg-white/10 rounded-md">
                <Link to={`/`} onClick={() => handleNavChange("profile")}>
                  <div
                    className={
                      active === "profile"
                        ? `flex items-center justify-start gap-3 text-[15px] font-sans font-semibold`
                        : `flex items-center justify-start gap-3 text-[15px] font-sans`
                    }
                  >
                    <div className="p-3 rounded-full bg-white/30"></div>
                    <span>Profile</span>
                  </div>
                </Link>
              </div>
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
        </div>
      </div>
    </>
  );
};

export default Sidebar;
