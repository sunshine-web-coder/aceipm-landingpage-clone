import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { RiCloseLine } from "react-icons/ri";
import "./style.scss";

export default function Header() {
  const [navScrolBar, setNavScrolbar] = useState(false);
  const [navMenu, setNavMenu] = useState(false);

  const changeBackground = () => {
    console.log(window.scrollY);
    if (window.scrollY >= 66) {
      setNavScrolbar(true);
    } else {
      setNavScrolbar(false);
    }
  };

  useEffect(() => {
    changeBackground();
    // adding the event when scroll change background
    window.addEventListener("scroll", changeBackground);
  });

  return (
    <div className={navScrolBar ? "section header active" : "section header"}>
      <div className="inHeader container">
        <div className="logo">
          <Link to="/">
            <img
              src="https://iili.io/bJzymB.png"
              alt=""
            />
          </Link>
        </div>

        <div className="right">
          <div className={navMenu ? "overlay overlayActive" : "overlay"}></div>
          <nav className={navMenu ? "navMenu openMenu" : "navMenu"}>
            <div className="closeBtn">
              <RiCloseLine className="icon" onClick={() => setNavMenu(false)} />
            </div>
            <ul>
              <li onClick={() => setNavMenu(false)}>
                <Link to="/">Home</Link>
              </li>
              <li onClick={() => setNavMenu(false)}>
                <Link to="/about">About</Link>
              </li>
              <li onClick={() => setNavMenu(false)} className="courseLink">
                <Link to="/course">Course</Link>
              </li>
              <li onClick={() => setNavMenu(false)}>
                <Link to="/blog">Blog</Link>
              </li>
              <li onClick={() => setNavMenu(false)} className="MiNlist">
                <Link to="/course">Buy Course</Link>
              </li>
              <li onClick={() => setNavMenu(false)} className="MiNlist">
                <Link to="/counselling">Free Counselling</Link>
              </li>
              <li onClick={() => setNavMenu(false)} className="MiNlist">
                <Link to="/">YouTube</Link>
              </li>
            </ul>
          </nav>
          <div className="mIun8">
            <div className="hamburger" onClick={() => setNavMenu(true)}>
              <div></div>
              <div></div>
              <div></div>
            </div>
            <div className="headerBtn">
              <Link className="siteBtn" to="/counselling">
                Free Counselling
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
