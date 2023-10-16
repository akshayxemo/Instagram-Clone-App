import { useState } from "react";
import Logo from "../components/Logo";
import { FiSearch } from "react-icons/fi";
import { FaHeart, FaRegHeart, FaBars } from "react-icons/fa6";
import {
  RiFolderVideoFill,
  RiFolderVideoLine,
  RiSendPlaneFill,
  RiSendPlaneLine,
} from "react-icons/ri";
import { BiMessageSquareAdd, BiCompass, BiSolidCompass } from "react-icons/bi";
import { BsInstagram } from "react-icons/bs";
import { RiHome2Line, RiHome2Fill } from "react-icons/ri";

import Switcher from "../components/Switcher";
import SideNavItem from "../components/SideNavItem";

const Sidebar = () => {
  const [active, setActive] = useState("home");
  const [collapse, setCollapse] = useState(true);
  const handleNavChange = (active: string) => {
    setActive(active);
    localStorage.setItem("activeNav", active);
    handleNavCollapse();
  };
  const handleNavCollapse = () => {
    setCollapse(!collapse);
    const nav = document.getElementById("nav");
    const elements = document.querySelectorAll(".side-nav-text");
    const list = ["w-60"];
    if (collapse) {
      nav?.classList.remove(...list);
    } else {
      nav?.classList.add(...list);
    }
    elements.forEach((element) => {
      // console.log(element as HTMLElement);
      (element as HTMLElement).style.display = collapse ? "none" : "block";
      // console.log(element as HTMLElement);
    });
  };
  return (
    <>
      <div
        id="nav"
        className="w-60 px-3 py-8 h-full border-r dark:border-gray-700/50 border-gray-700/20 flex flex-col justify-between"
      >
        <div>
          {collapse ? (
            <Logo height={"33"} class={"w-full px-4 py-2"} />
          ) : (
            <div className="p-3 w-full">
              <BsInstagram className="dark:text-white text-black text-[26px] aspect-square" />
            </div>
          )}
          <nav className="mt-7">
            <div className="flex flex-col gap-2">
              <SideNavItem
                text="Home"
                path="/"
                element={<RiHome2Line />}
                activeElement={<RiHome2Fill />}
                activationFunc={handleNavChange}
                eventCollapse={collapse}
              />
              <div onClick={handleNavCollapse}>
                <SideNavItem
                  text="Search"
                  path={window.location.pathname}
                  element={<FiSearch />}
                  // activeElement={
                  //   <FiSearch className="border dark:border-white border-black" />
                  // }
                  // activationFunc={handleNavChange}
                  eventCollapse={collapse}
                  standAlone={true}
                />
              </div>
              <SideNavItem
                text="Explore"
                path="/explore"
                element={<BiCompass />}
                activeElement={<BiSolidCompass />}
                activationFunc={handleNavChange}
                eventCollapse={collapse}
              />
              <SideNavItem
                text="Reels"
                path="/reels"
                element={<RiFolderVideoLine />}
                activeElement={<RiFolderVideoFill />}
                activationFunc={handleNavChange}
                eventCollapse={collapse}
              />
              <SideNavItem
                text="Messages"
                path="/messages"
                element={<RiSendPlaneLine />}
                activeElement={<RiSendPlaneFill />}
                activationFunc={handleNavChange}
                eventCollapse={collapse}
              />
              <SideNavItem
                text="Notifications"
                path="/notifications"
                element={<FaRegHeart />}
                activeElement={<FaHeart />}
                activationFunc={handleNavChange}
                eventCollapse={collapse}
              />
              <SideNavItem
                text="Create"
                path="/"
                element={<BiMessageSquareAdd />}
                activationFunc={handleNavChange}
                eventCollapse={collapse}
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
                eventCollapse={collapse}
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
            eventCollapse={collapse}
          />
          <Switcher />
        </div>
      </div>
    </>
  );
};

export default Sidebar;
