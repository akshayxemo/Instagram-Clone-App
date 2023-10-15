import { ReactNode } from "react";
import { Link } from "react-router-dom";
interface Props {
  text: string;
  path: string;
  element: ReactNode;
  activeElement?: ReactNode;
  activationFunc: (params: string) => void;
  activeNav: ReactNode;
}
const SideNavItem = ({
  text,
  path,
  element,
  activeElement,
  activationFunc,
  activeNav: active,
}: Props) => {
  //   const active = localStorage.getItem("activeNav");
  console.log(active);
  return (
    <>
      <div className="p-3 dark:hover:bg-white/10 hover:bg-black/10 rounded-md side-nav">
        <Link to={path} onClick={() => activationFunc(text.toLowerCase())}>
          <div
            className={
              path === window.location.pathname
                ? `flex items-center justify-start gap-3 text-[15px] font-sans font-semibold`
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
            <span>{text}</span>
          </div>
        </Link>
      </div>
    </>
  );
};
export default SideNavItem;
