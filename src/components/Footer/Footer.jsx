import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./footer.css";
import {
  faInstagram,
  faLinkedinIn,
  faTwitter,
  faWhatsapp,
  faFacebookF,
  faTiktok,
  faYoutube,
} from "@fortawesome/free-brands-svg-icons";

const Footer = () => {
  return (
    <div className="footer-container">
      <div className="footer-content">
        <div className="footer-socialmedias">
          <div className="footer-socialmedias-title">Follow Us</div>
          <div className="footer-socialmedias-logo">
            <div className="icon-container">
              <FontAwesomeIcon
                icon={faLinkedinIn}
                size="xl"
                style={{ color: "#ffffff" }}
              />
            </div>
            <div className="icon-container">
              <FontAwesomeIcon
                icon={faInstagram}
                size="xl"
                style={{ color: "#ffffff" }}
              />
            </div>
            <div className="icon-container">
              <FontAwesomeIcon
                icon={faFacebookF}
                size="xl"
                style={{ color: "#ffffff" }}
              />
            </div>
            <div className="icon-container">
              <FontAwesomeIcon icon={faTwitter} style={{ color: "#ffffff" }} />
            </div>
            <div className="icon-container">
              <FontAwesomeIcon
                icon={faWhatsapp}
                size="xl"
                style={{ color: "#f7f7f7" }}
              />
            </div>
            <div className="icon-container">
              <FontAwesomeIcon
                icon={faTiktok}
                size="xl"
                style={{ color: "#ffffff" }}
              />
            </div>
            <div className="icon-container">
              <FontAwesomeIcon
                icon={faYoutube}
                size="xl"
                style={{ color: "#ffffff" }}
              />
            </div>
          </div>
        </div>
        <div className="footer-legality">
          <p>Privacy Policy</p>
          <p>·</p>
          <p>Terms of Use</p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
