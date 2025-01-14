import { Outlet, useNavigate } from "react-router-dom";
import "./Header.css";
const Header = () => {
  const navigate = useNavigate();
  return (
    <>
      <header className="header">
        <div className="logo">Todos App</div>
        <nav className="nav-buttons">
          <button
            className="button"
            onClick={() => navigate("/auth?form=login")}
          >
            Login
          </button>
          <button
            className="button"
            onClick={() => navigate("/auth?form=signup")}
          >
            Signup
          </button>
        </nav>
      </header>
      <Outlet />
    </>
  );
};

export default Header;
