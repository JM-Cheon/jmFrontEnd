import { Link, useNavigate } from "react-router-dom";
function Header() {
  const navigate = useNavigate();
  const onAboutClick = () => {
    navigate("/about");
  };
  return (
    <h1>
      <li>
        <Link to={"/"}>Home</Link>
      </li>
      <li>
        <button onClick={onAboutClick}>About</button>
      </li>
    </h1>
  );
}
export default Header;
