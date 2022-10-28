import { Link } from "react-router-dom";
import { BiCalendarCheck } from "react-icons/bi";
import { RiWhatsappLine } from "react-icons/ri";
import "./style.scss";

export default function Footer() {
  return (
    <div className="section Footer">
      <div className="inFooter container">
        <div className="FooterBtn">
          <Link className="siteBtn" to="/counselling">
            <BiCalendarCheck className="icon" /> Book Free Counselling Session
          </Link>
          <Link className="siteBtn" to="/">
            <RiWhatsappLine /> Reach out to us on WhatsApp
          </Link>
        </div>

        <div className="logo">
          <Link to="/">
            <img
              src="https://iili.io/bJzymB.png"
              alt=""
            />
          </Link>
        </div>
        <p>© LOREM eLearning Pvt Ltd. 2021 All Rights Reserved</p>
        <nav>
          <ul>
            <li>
              <Link to="/">Account</Link>
            </li>
            <li>
              <Link to="/privacy">Privacy</Link>
            </li>
            <li>
              <Link to="/refunds">Refund</Link>
            </li>
            <li>
              <Link to="/terms">Terms</Link>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
}
