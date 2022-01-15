import { Link } from "react-router-dom";
import { login, logout } from "../services/firebase";

function Header(props) {
  return (
    <nav>
      <Link to="/cheese">
        <div>Cheese App</div>
      </Link>
      {props.user ? (
        <>
          <img
            style={{
              height: "3.125rem",
              width: "3.125rem",
              borderRadius: "50%",
            }}
            src={props.user.photoURL}
            alt={props.user.displayName}
          />
          <button onClick={logout}>Logout</button>
        </>
      ) : (
        <button onClick={login}>Login</button>
      )}
    </nav>
  );
}

export default Header;
