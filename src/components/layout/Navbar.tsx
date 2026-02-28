import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="navbar">
      <NavLink to="/" className="navbar__logo">
        piero-aguilar
      </NavLink>
      <div className="navbar__tabs">
        <NavLink
          to="/"
          end
          className={({ isActive }) =>
            `navbar__tab ${isActive ? "navbar__tab--active" : ""}`
          }
        >
          _hello
        </NavLink>
        <NavLink
          to="/about-me"
          className={({ isActive }) =>
            `navbar__tab ${isActive ? "navbar__tab--active" : ""}`
          }
        >
          _about-me
        </NavLink>
        <NavLink
          to="/projects"
          className={({ isActive }) =>
            `navbar__tab ${isActive ? "navbar__tab--active" : ""}`
          }
        >
          _projects
        </NavLink>
        <NavLink
          to="/contact-me"
          className={({ isActive }) =>
            `navbar__tab navbar__tab--right ${isActive ? "navbar__tab--active" : ""}`
          }
        >
          _contact-me
        </NavLink>
      </div>
    </nav>
  );
};

export default Navbar;
