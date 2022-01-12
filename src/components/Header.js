import { Link } from "react-router-dom";

function Header(props) {
  return (
    <nav>
      <Link to="/cheese">
        <div>Cheese App</div>
      </Link>
    </nav>
  );
}

export default Header;
