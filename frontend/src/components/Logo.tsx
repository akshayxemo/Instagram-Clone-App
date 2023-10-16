import LogoDark from "../assets/instagram_logo_black.png";
interface Props {
  height?: string;
  class?: string;
}

const Logo = (props: Props) => {
  console.log(props);
  return (
    <>
      <div className={props.class}>
        <img
          src={LogoDark}
          alt="instagram logo"
          className="dark:filter dark:invert"
          style={props.height ? { height: props.height + "px" } : {}}
        />
      </div>
    </>
  );
};

export default Logo;
