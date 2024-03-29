import { useGlobalContext } from "../../context";
import { Link, useNavigate } from "react-router-dom";
import logo from "../../assets/images/logo.png";
import "./Navbar.css";

const Navbar = () => {
  const { logout, user, loadHotels } = useGlobalContext();
  const navigate = useNavigate();

  async function handleLogout() {
    try {
      await logout();
      navigate("/login");
    } catch {
      alert("failed to logout");
    }
  }
  return (
    <nav className="navbar">
      <div className="nav-center">
        <Link onClick={loadHotels} to="/">
        <img src={logo} alt='Beach Resort'  height={100} width={170}/>
        </Link>
        <ul className="nav-links">
          <li>
            <Link to="/bookings"> Bookings</Link>
          </li>
          <li>
            <Link to="/checkout"> Cart</Link>
          </li>
          <li>
            {!user ? (
              <Link to="/login" state={{ from: "prev" }}>
                Login
              </Link>
            ) : (
              <Link to="#" onClick={handleLogout}>
                Log Out
              </Link>
            )}
          </li>
          <li>
            <Link to="/register"> Register</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
