import LogoWhite from "../assets/instagram_logo_white.png";

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
          src={LogoWhite}
          alt="instagram logo"
          style={props.height ? { height: props.height + "px" } : {}}
        />
      </div>
    </>
  );
};

export default Logo;
