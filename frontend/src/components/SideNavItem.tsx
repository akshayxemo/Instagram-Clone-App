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
  return (
    <>
      <div className="p-3 hover:bg-white/10 rounded-md">
        <Link to={path} onClick={() => activationFunc(text.toLowerCase())}>
          <div
            className={
              active === text.toLowerCase()
                ? `flex items-center justify-start gap-3 text-[15px] font-sans font-semibold`
                : `flex items-center justify-start gap-3 text-[15px] font-sans`
            }
          >
            {active === text.toLowerCase() && activeElement ? (
              <div className="text-[25px] aspect-square">{activeElement}</div>
            ) : (
              <div className="text-[25px] aspect-square">{element}</div>
            )}
            <span>{text}</span>
          </div>
        </Link>
      </div>
    </>
  );
};
export default SideNavItem;
