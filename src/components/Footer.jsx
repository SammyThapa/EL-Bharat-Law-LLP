import style from "../components/Footer.module.css";
import logo from "../assets/logo.png";
import { MdOutlineFacebook } from "react-icons/md";
import { FaLinkedinIn } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <footer className={style.footerCon}>
      <div className={style.mainCon}>
        <div className={style.socials}>
          <img src={logo} alt="logo" />
          <div className={style.icons}>
            <a href="https://www.facebook.com/people/El-Bharat-Law-LLP/61575475182155/?rdid=uvLQAtssMwc9oKD8&share_url=https%3A%2F%2Fwww.facebook.com%2Fshare%2F1KenAd4fnR%2F">
              <MdOutlineFacebook />
            </a>

            <a
              href="https://www.linkedin.com/company/elbharat-law-llp/home/"
              target="_blank"
            >
              <FaLinkedinIn />
            </a>
            <a href="https://www.instagram.com/elbharatlawllp?igsh=bzltbnd2MWVwMDY0">
              <FaInstagram />
            </a>
          </div>
        </div>
        <div className={style.quickLinks}>
          <h3>Quick Links</h3>

          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/about">About us</Link>
            </li>
            <li>
              <Link to="/blogs">Blogs</Link>
            </li>
            <li>
              <Link to="/people">People</Link>
            </li>

            <li>
              <Link to="/contact">Contact </Link>
            </li>
          </ul>
        </div>
        <div className={style.subscribe}>
          <h3>Stay Updated</h3>

          <p>Follow our latest legal articles, updates and insights.</p>

          <Link to="/news" className={style.subscribeButton}>
            Explore Legal Updates →
          </Link>
        </div>
      </div>
      <div className={style.copyright}>
        <p>© EL Bharat Law LLP . All rights reserved</p>
      </div>
    </footer>
  );
}

export default Footer;
