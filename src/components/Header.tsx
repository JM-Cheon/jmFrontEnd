import { Link, useNavigate } from "react-router-dom";
function Header() {
  return (
    <h1>
      <li>
        <Link to={"/"}>Home</Link>
      </li>
      <li>
        <Link to={"/about"}>About</Link>
      </li>
    </h1>
  );
}
export default Header;
