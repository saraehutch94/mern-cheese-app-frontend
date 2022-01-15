import { Link } from "react-router-dom";
import { login, logout } from "../services/firebase";

function Header(props) {
  return (
    <nav>
      <Link to="/cheese">
        <div>Cheese App</div>
      </Link>
      <button onClick={login}>Login</button>
      <button onClick={logout}>Logout</button>
    </nav>
  );
}

export default Header;
