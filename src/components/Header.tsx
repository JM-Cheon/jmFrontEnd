import { Link, useNavigate } from "react-router-dom";

function Header() {
  return (
    <div className="w-full h-10 px-3 flex flex-row justify-between items-center">
      <h1>JM's</h1>
      <ul className="w-1/2 flex flex-row justify-evenly">
        <li>
          <Link to={"/"}>PROJECT</Link>
        </li>
        <li>
          <Link to={"/about"}>ABOUT</Link>
        </li>
        <li>
          <Link to={"/connect"}>CONNECT</Link>
        </li>
        <li>
          <Link to={"/resume"}>RESUME</Link>
        </li>
      </ul>
    </div>
  );
}
export default Header;
