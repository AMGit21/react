import { Outlet, Link } from "react-router-dom";

const Layout = () => {
  return (
    <div>
      <div className="navbar">
        <div className="logo">My Logo</div>
        <nav>
          <ul className="navLinksWrapper">
            <li>
              <Link to="/" className="navLink">
                Home
              </Link>
            </li>
            <li>
              <Link to="/testapi" className="navLink">
                Test Api
              </Link>
            </li>
            <li>
              <Link to="/about" className="navLink">
                About
              </Link>
            </li>
            <li>
              <Link to="/contact" className="navLink">
                Contact
              </Link>
            </li>
          </ul>
        </nav>
      </div>
      <div style={{ backgroundColor: "#fbe8d3", marginTop: "50px" }}>
        <Outlet />
      </div>
      <div className="footer">Created by ESA Coding Lab - 2023</div>
    </div>
  );
};

export default Layout;
