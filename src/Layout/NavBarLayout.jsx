import { Outlet } from "react-router-dom";
import NavBar from "../components/NavigationBar/NavBar";
import Footer from "../components/Footer/Footer";

const NavBarLayout = () => {
  return (
    <div className="navbarlayout-container">
      <div className="navbar-layout">
        <header>
          <NavBar />
        </header>

        <div>
          <main>
            <Outlet />
          </main>
        </div>
      </div>

      <div className="footer-section">
        <Footer />
      </div>
    </div>
  );
};

export default NavBarLayout;
