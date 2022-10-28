import { useState } from "react";
import { BiPlay } from "react-icons/bi";
import { Link } from "react-router-dom";
import "./style.scss";

export default function CourseC() {
  const [toggleSwitch, setToggleSwitch] = useState(false);

  return (
    <div className="section CourseC" id="pricing">
      <div className="title">
        <h2>Pricing</h2>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam sequi
          repellat earum quis? Voluptatibus repellat itaque tempora aliquam
          ipsum veritatis.
        </p>
      </div>

      <div className="container inCourseUh7">
        {/* <div className="left">
          <img
            src="https://cdn.shortpixel.ai/spai/w_1081+q_lossless+ret_img+to_webp/https://aceipm.com/wp-content/uploads/2021/10/AceIPM-Synergy-4-e1634550767715.png"
            alt=""
          />
        </div> */}
        <div className="priceBox">
          <div className="rImgCourseC">
            <img
              src="https://iili.io/bHTTe2.png"
              alt=""
            />
            <BiPlay className="play-icon" />
          </div>
          <div className="CourseCToggle">
            <div className="toggleText" onClick={() => setToggleSwitch(false)}>
              <h5>IPSU'23</h5>
            </div>
            <div className="toggleL">
              <div
                className="switch"
                onClick={() => setToggleSwitch(!toggleSwitch)}
              >
                <i
                  className={"fa-solid fa-circle " + (toggleSwitch && "active")}
                ></i>
              </div>
            </div>
            <div className="toggleText" onClick={() => setToggleSwitch(true)}>
              <h5>IPSU'24</h5>
            </div>
          </div>
          <div className="CourseCPrice">
            {toggleSwitch ? (
              <h6>
                <span>$10,000</span> <span> $7,997</span>
              </h6>
            ) : (
              <h6>
                <span>$12,000</span> <span> $997</span>
              </h6>
            )}
          </div>
          <div className="CourseLBtn">
            {toggleSwitch ? (
              <Link className="siteBtn" to="">
                Buy IPSU'24 Prep Course
              </Link>
            ) : (
              <Link className="siteBtn" to="">
                Buy IPSU'23 Prep Course
              </Link>
            )}
          </div>
          <div className="cListUi">
            <h6>This course includes:</h6>
            <ul>
              <li>
                <i class="fa-solid fa-video"></i>
                {toggleSwitch ? (
                  <span>Consequatur, illo.</span>
                ) : (
                  <span>Lorem ipsum dolor sit</span>
                )}
              </li>
              <li>
                <i class="fa-solid fa-calendar-days"></i>{" "}
                <span>Lorem ipsum dolor sit</span>
              </li>
              <li>
                <i class="fa-solid fa-book"></i>{" "}
                <span>Lorem ipsum dolor sit</span>
              </li>
              <li>
                <i class="fa-solid fa-pen-ruler"></i>{" "}
                <span>Lorem ipsum dolor sit</span>
              </li>
              <li>
                <i class="fa-solid fa-calculator"></i>{" "}
                <span>Lorem ipsum dolor sit</span>
              </li>
              <li>
                <i class="fa-solid fa-user-graduate"></i>{" "}
                <span>Lorem ipsum dolor sit</span>
              </li>
              <li>
                <i class="fa-regular fa-circle-user"></i>{" "}
                <span>PIWAT preparation</span>
              </li>
              <li>
                <i class="fa-regular fa-clock"></i>
                {toggleSwitch ? (
                  <span>Lorem ipsum dolor 2024</span>
                ) : (
                  <span>Lorem ipsum dolor 2023</span>
                )}
              </li>
            </ul>
          </div>
        </div>
        <div className="priceBox">
          <div className="rImgCourseC">
            <img
              src="https://iili.io/bHTTe2.png"
              alt=""
            />
            <BiPlay className="play-icon" />
          </div>
          <div className="CourseCToggle">
            <div className="toggleText" onClick={() => setToggleSwitch(false)}>
              <h5>IPSU'23</h5>
            </div>
            <div className="toggleL">
              <div
                className="switch"
                onClick={() => setToggleSwitch(!toggleSwitch)}
              >
                <i
                  className={"fa-solid fa-circle " + (toggleSwitch && "active")}
                ></i>
              </div>
            </div>
            <div className="toggleText" onClick={() => setToggleSwitch(true)}>
              <h5>IPSU'24</h5>
            </div>
          </div>
          <div className="CourseCPrice">
            {toggleSwitch ? (
              <h6>
                <span>$10,000</span> <span> $7,997</span>
              </h6>
            ) : (
              <h6>
                <span>$12,000</span> <span> $997</span>
              </h6>
            )}
          </div>
          <div className="CourseLBtn">
            {toggleSwitch ? (
              <Link className="siteBtn" to="">
                Buy IPSU'24 Prep Course
              </Link>
            ) : (
              <Link className="siteBtn" to="">
                Buy IPSU'23 Prep Course
              </Link>
            )}
          </div>
          <div className="cListUi">
            <h6>This course includes:</h6>
            <ul>
              <li>
                <i class="fa-solid fa-video"></i>
                {toggleSwitch ? (
                  <span>Consequatur, illo.</span>
                ) : (
                  <span>Lorem ipsum dolor sit</span>
                )}
              </li>
              <li>
                <i class="fa-solid fa-calendar-days"></i>{" "}
                <span>Lorem ipsum dolor sit</span>
              </li>
              <li>
                <i class="fa-solid fa-book"></i>{" "}
                <span>Lorem ipsum dolor sit</span>
              </li>
              <li>
                <i class="fa-solid fa-pen-ruler"></i>{" "}
                <span>Lorem ipsum dolor sit</span>
              </li>
              <li>
                <i class="fa-solid fa-calculator"></i>{" "}
                <span>Lorem ipsum dolor sit</span>
              </li>
              <li>
                <i class="fa-solid fa-user-graduate"></i>{" "}
                <span>Lorem ipsum dolor sit</span>
              </li>
              <li>
                <i class="fa-regular fa-circle-user"></i>{" "}
                <span>PIWAT preparation</span>
              </li>
              <li>
                <i class="fa-regular fa-clock"></i>
                {toggleSwitch ? (
                  <span>Lorem ipsum dolor 2024</span>
                ) : (
                  <span>Lorem ipsum dolor 2023</span>
                )}
              </li>
            </ul>
          </div>
        </div>
        <div className="priceBox">
          <div className="rImgCourseC">
            <img
              src="https://iili.io/bHTTe2.png"
              alt=""
            />
            <BiPlay className="play-icon" />
          </div>
          <div className="CourseCToggle">
            <div className="toggleText" onClick={() => setToggleSwitch(false)}>
              <h5>IPSU'23</h5>
            </div>
            <div className="toggleL">
              <div
                className="switch"
                onClick={() => setToggleSwitch(!toggleSwitch)}
              >
                <i
                  className={"fa-solid fa-circle " + (toggleSwitch && "active")}
                ></i>
              </div>
            </div>
            <div className="toggleText" onClick={() => setToggleSwitch(true)}>
              <h5>IPSU'24</h5>
            </div>
          </div>
          <div className="CourseCPrice">
            {toggleSwitch ? (
              <h6>
                <span>$10,000</span> <span> $7,997</span>
              </h6>
            ) : (
              <h6>
                <span>$12,000</span> <span> $997</span>
              </h6>
            )}
          </div>
          <div className="CourseLBtn">
            {toggleSwitch ? (
              <Link className="siteBtn" to="">
                Buy IPSU'24 Prep Course
              </Link>
            ) : (
              <Link className="siteBtn" to="">
                Buy IPSU'23 Prep Course
              </Link>
            )}
          </div>
          <div className="cListUi">
            <h6>This course includes:</h6>
            <ul>
              <li>
                <i class="fa-solid fa-video"></i>
                {toggleSwitch ? (
                  <span>Consequatur, illo.</span>
                ) : (
                  <span>Lorem ipsum dolor sit</span>
                )}
              </li>
              <li>
                <i class="fa-solid fa-calendar-days"></i>{" "}
                <span>Lorem ipsum dolor sit</span>
              </li>
              <li>
                <i class="fa-solid fa-book"></i>{" "}
                <span>Lorem ipsum dolor sit</span>
              </li>
              <li>
                <i class="fa-solid fa-pen-ruler"></i>{" "}
                <span>Lorem ipsum dolor sit</span>
              </li>
              <li>
                <i class="fa-solid fa-calculator"></i>{" "}
                <span>Lorem ipsum dolor sit</span>
              </li>
              <li>
                <i class="fa-solid fa-user-graduate"></i>{" "}
                <span>Lorem ipsum dolor sit</span>
              </li>
              <li>
                <i class="fa-regular fa-circle-user"></i>{" "}
                <span>PIWAT preparation</span>
              </li>
              <li>
                <i class="fa-regular fa-clock"></i>
                {toggleSwitch ? (
                  <span>Lorem ipsum dolor 2024</span>
                ) : (
                  <span>Lorem ipsum dolor 2023</span>
                )}
              </li>
            </ul>
          </div>
        </div>
     
      </div>
    </div>
  );
}
