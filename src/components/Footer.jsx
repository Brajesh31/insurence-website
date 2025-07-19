import Styling from "./Footer.module.css";
import { FaFacebookF } from "react-icons/fa6";
import {
  FaTwitter,
  FaLinkedinIn,
  FaInstagram,
  FaPhoneAlt,
} from "react-icons/fa";

import MagzineMail from "./magzineMail.jsx";
import ServicesMail from "./ServicesMail.jsx";

const Footer = () => {
  return (
    <>
      <footer>
        <div className={Styling.upperPart}>
          <img
            className={Styling.footerLogo}
            src="/Images/Section footer.png"
            alt="Footer-Logo-Image"
          />

          <div className={Styling.sectionofLinks}>
            {/* <img
              className={Styling.gradientFooter}
              src="/Images/GradientforFooter.png"
              alt="gradientFooter"
            /> */}
            <div className={Styling.footerGradient}>
              <div className={Styling.footerItems}>
                <div>
                  <h3>Useful Links</h3>
                  <ul>
                    <li>Insurance Life Magazine</li> <li>UpWealth Magazine</li>
                    <li>Kaltech Consultancy</li>
                  </ul>
                  <div className={Styling.socialIcons}>
                    <a href="#">
                      <FaFacebookF />
                    </a>

                    <a href="#">
                      <FaTwitter />
                    </a>

                    <a href="#">
                      <FaLinkedinIn />
                    </a>

                    <a href="#">
                      <FaInstagram />
                    </a>
                  </div>
                </div>
                <div className={Styling.contacts}>
                  <h3>Useful Contacts</h3>
                  <ul>
                    <li>
                      <FaPhoneAlt /> +92(349) - 627 - 4499
                    </li>
                    <li>
                      <MagzineMail /> mediatechgseries@gmail.com
                    </li>
                    <li>
                      <ServicesMail /> mediatechgseries@outlook.com
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className={Styling.lowerPart}>
          <div className={Styling.liContainer}>
            <li>Designed by Code With Bitwizards</li>
            <li>Copyright 2023 UpWealth Magzine</li>
            <li>Terms and conditions</li>
            <li>Privacy Policies</li>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
