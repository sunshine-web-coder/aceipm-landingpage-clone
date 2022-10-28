import { FaRegGrinStars } from 'react-icons/fa';
import { Link } from "react-router-dom";
import "./style.scss";

export default function AboutD() {
  return (
    <div className="section AboutD">
      <div className="container inAboutD">
        <div className="title">
          <h2>Ready to Ace IPMAT?</h2>
          <p>
            Learn from your seniors who’ve been through the system than by
            someone in a random coaching institute with no background
            information about how this program is run.
          </p>
        </div>
        <div className="inAboutDBtn">
          <Link className="siteBtn" to="/course"><FaRegGrinStars /> Reserve Your Slot</Link>
        </div>
      </div>
    </div>
  );
}
