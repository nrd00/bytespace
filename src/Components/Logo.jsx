import { Link } from "react-router";
import LogoIcon from "../assets/images/bytespace-logo.png";

const Logo = ({ position, usage }) => {
  return (
    <Link to="/" className="flex gap-x-2 items-center">
      <img src={`${LogoIcon}`} />
      {usage !== "authForm" && (
        <span
          className={`logo ${position === "header" ? "text-[#F5F5F6]" : "text-black"} `}
        >
          ByteSpace
        </span>
      )}
    </Link>
  );
};

export default Logo;
