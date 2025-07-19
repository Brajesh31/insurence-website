import { Link } from "react-router-dom";
import Styling from "./Header.module.css";
const Header = () => {
  return (
    <>
      <div>
        <img
          className={Styling.background}
          src="/Images/Background.png"
          alt="Background Image"
        />

        <img
          className={Styling.linearGradient}
          src="/Images/Gradient.png"
          alt="LinearGradient"
        />

        <div className={Styling.logoContainer}>
          <img
            className={Styling.logo}
            src="/Images/1-5-1-e1674190349590-1024x275.png.png"
            alt="Logo"
          />{" "}
        </div>
      </div>

      <div className={Styling.navItems}>
        <div className={Styling.ulContainer}>
          <ul className={Styling.ulofNaivItems}>
           

            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/Contact-us">Contact Us</Link>
            </li>
          </ul>{" "}
        </div>
      </div>
    </>
  );
};

export default Header;
