import { Link } from "react-router-dom";
import { FaShoppingCart } from 'react-icons/fa';
import { BiCalendarCheck } from 'react-icons/bi';
import "./style.scss";

export default function Banner() {
  return (
    <div className="section banner">
      <div className="overlay"></div>
      <div className="container inBanner">
        <div className="left">
          <h1>With COURSE Fill Blessed. 📝</h1>
          <p>Third set them, their also midst herb two all. Abundantly seasons days,  <span><b>greater set light had and isn't were land. Be light they're..</b></span></p>
          <div className="BannerLeftBtn">
            <Link className="siteBtn siteBtn2" to="/course"><FaShoppingCart className="icon" /> Purchase Course</Link>
            <Link className="siteBtn" to="/counselling"><BiCalendarCheck className="icon" /> Free Counselling</Link>
          </div>
        </div>
        <div className="right">
          <div className="skd">
            <div className="inSkd">
              <img className="imgWoman" src="https://iili.io/DsCEI1.png" alt="D6EjiQ.png" />
              <img className="imgBook" src="https://iili.io/D6P6Qf.md.png" alt="D6EjiQ.png" />
              <img className="imgCap" src="https://iili.io/Dine1f.png" alt="D6EjiQ.png" />
              <img className="imgHuman" src="https://iili.io/Di2iTG.png" alt="D6EjiQ.png" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
