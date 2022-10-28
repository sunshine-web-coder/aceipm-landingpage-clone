import { Link } from "react-router-dom";
import { FaRegGrinStars } from "react-icons/fa";
import "./style.scss";

export default function CounselA() {
  return (
    <div className="section CounselA">
      <div className="container inCounselA">
        <div className="title">
          <h2>Ready to IPSUM?</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore
            ullam, eos quam praesentium provident asperiores in natus nesciunt
            quae dolorem!
          </p>
        </div>
        <div className="inCounselABtn">
          <Link className="siteBtn" to="/course">
            <FaRegGrinStars /> Reserve Your Slot
          </Link>
        </div>
      </div>
    </div>
  );
}
