import { ReactNode } from "react";
import Sidebar from "./Sidebar";

interface Props {
  children: ReactNode;
}
const DesktopDashboard = ({ children }: Props) => {
  return (
    <>
      <div className="max-w-[100%] h-screen overflow-hidden flex dark:bg-black bg-white">
        <div className="dark:bg-black bg-white dark:text-white text-black">
          <Sidebar />
        </div>
        <div className="flex-1 overflow-y-hidden">{children}</div>
      </div>
    </>
  );
};

export default DesktopDashboard;
