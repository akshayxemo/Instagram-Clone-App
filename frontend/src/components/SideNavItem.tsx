import { ReactNode } from "react";
import { Link } from "react-router-dom";
interface Props {
  text: string;
  path: string;
  element: ReactNode;
  activeElement?: ReactNode;
  activationFunc?: (params: string) => void;
  eventCollapse?: boolean;
  standAlone?: boolean;
}
const SideNavItem = ({
  text,
  path,
  element,
  activeElement,
  activationFunc,
  eventCollapse,
  standAlone,
}: Props) => {
  return (
    <>
      <div className="p-3 dark:hover:bg-white/10 hover:bg-black/10 rounded-md side-nav cursor-pointer">
        <Link
          to={path}
          onClick={
            activationFunc
              ? () => activationFunc(text.toLowerCase())
              : () => console.log("No-activation")
          }
        >
          <div
            className={
              path === window.location.pathname
                ? standAlone
                  ? `flex items-center justify-start gap-3 text-[15px] font-sans`
                  : `flex items-center justify-start gap-3 text-[15px] font-sans font-semibold`
                : `flex items-center justify-start gap-3 text-[15px] font-sans`
            }
          >
            {path === window.location.pathname && activeElement ? (
              <div className="text-[26px] aspect-square element">
                {activeElement}
              </div>
            ) : (
              <div className="text-[26px] aspect-square element">{element}</div>
            )}
            {eventCollapse && <span className="side-nav-text">{text}</span>}
          </div>
        </Link>
      </div>
    </>
  );
};
export default SideNavItem;
