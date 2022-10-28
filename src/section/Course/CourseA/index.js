import { useLayoutEffect, useState } from "react";
import "./style.scss";

export default function CourseA() {
  const [changeStyle, setChangeStyle] = useState("Muny6Box_cont");
  const [changeStyle2, setChangeStyle2] = useState("Muny6Box_cont2");
  const [changeStyle3, setChangeStyle3] = useState("Muny6Box_cont3");
  const [changeStyle4, setChangeStyle4] = useState("Muny6Box_cont4");
  const [changeStyle5, setChangeStyle5] = useState("Muny6Box_cont5");
  const [changeStyle6, setChangeStyle6] = useState("Muny6Box_cont6");

  const [changeIconStyle, setChangeIconStyle] = useState("icon");
  const [changeIconStyle2, setChangeIconStyle2] = useState("icon2");
  const [changeIconStyle3, setChangeIconStyle3] = useState("icon3");
  const [changeIconStyle4, setChangeIconStyle4] = useState("icon4");
  const [changeIconStyle5, setChangeIconStyle5] = useState("icon5");
  const [changeIconStyle6, setChangeIconStyle6] = useState("icon6");

  useLayoutEffect(() => {
    const fixedDivOnScroll = () => {
      console.log(window.scrollY);
      if (window.scrollY > 1050) {
        setChangeStyle("Muny6Box_cont changeDivStyle");
        setChangeIconStyle("icon activeIcon");
      } else {
        setChangeStyle("Muny6Box_cont");
        setChangeIconStyle("icon");
      }

      if (window.scrollY > 1320) {
        setChangeStyle2("Muny6Box_cont changeDivStyle2");
        setChangeIconStyle2("icon activeIcon2");
      } else {
        setChangeStyle2("Muny6Box_cont");
        setChangeIconStyle2("icon");
      }

      if (window.scrollY > 1600) {
        setChangeStyle3("Muny6Box_cont changeDivStyle3");
        setChangeIconStyle3("icon activeIcon3");
      } else {
        setChangeStyle3("Muny6Box_cont");
        setChangeIconStyle3("icon");
      }

      if (window.scrollY > 1880) {
        setChangeStyle4("Muny6Box_cont changeDivStyle4");
        setChangeIconStyle4("icon activeIcon4");
      } else {
        setChangeStyle4("Muny6Box_cont");
        setChangeIconStyle4("icon");
      }

      if (window.scrollY > 2170) {
        setChangeStyle5("Muny6Box_cont changeDivStyle5");
        setChangeIconStyle5("icon activeIcon5");
      } else {
        setChangeStyle5("Muny6Box_cont");
        setChangeIconStyle5("icon");
      }

      if (window.scrollY > 2450) {
        setChangeStyle6("Muny6Box_cont changeDivStyle6");
        setChangeIconStyle2("icon activeIcon6");
      } else {
        setChangeStyle6("Muny6Box_cont");
        setChangeIconStyle6("icon");
      }
    };

    window.addEventListener("scroll", fixedDivOnScroll);
    return () => window.removeEventListener("scroll", fixedDivOnScroll);
  }, []);

  return (
    <div className="section CourseA">
      <div className="container inCourseA">
        <div className="title">
          <h2>What's Included?</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati
            ut repudiandae voluptas rerum eius distinctio earum vitae natus,
            consequuntur praesentium?
          </p>
        </div>

        <div className="c7ik0r">
          <div className="c7ik0rL">
            <div className="inC7ik0rL">
              <div className="c7ik0rLBox">
                <div className="box">
                  <i class="fa-solid fa-circle-play"></i>
                  <h4>Concept Videos</h4>
                  <p>
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                    Hic.
                  </p>
                </div>
                <div className="box">
                  <i class="fa-solid fa-book"></i>
                  <h4>Physical Books</h4>
                  <p>
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                    Hic.
                  </p>
                </div>
              </div>

              <div className="c7ik0rLBox">
                <div className="box">
                  <i class="fa-solid fa-video"></i>
                  <h4>Live Sessions</h4>
                  <p>
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                    Hic.
                  </p>
                </div>
                <div className="box">
                  <i class="fa-solid fa-handshake"></i>
                  <h4>Mock Tests & PIs</h4>
                  <p>
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                    Hic.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="c7ik0rR">
            <div className="inC7ik0rR">
              <div className="MunyInX">
                <div className="Muny6Box">
                  <div className="timeline-icon">
                    <div className={changeIconStyle}>
                      <i class="fa-sharp fa-solid fa-calendar-days"></i>
                    </div>
                  </div>
                  <div className={changeStyle}>
                    <p>150+ Hours of Content</p>
                    <h4>Lorem ipsum dolor sit, amet</h4>
                    <p>
                      Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                      Dolorem tempora esse tenetur aspernatur unde nostrum ex
                      odit sapiente totam laborum?
                    </p>
                  </div>
                </div>
                <div className="Muny6Box">
                  <div className="timeline-icon">
                    <div className={changeIconStyle2}>
                      <i class="fa-sharp fa-solid fa-calendar-days"></i>
                    </div>
                  </div>
                  <div className={changeStyle2}>
                    <p>21 Physical Books</p>
                    <h4>Lorem ipsum dolor sit, amet</h4>
                    <p>
                      Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                      Dolorem tempora esse tenetur aspernatur unde nostrum ex
                      odit sapiente totam laborum?
                    </p>
                  </div>
                </div>
                <div className="Muny6Box">
                  <div className="timeline-icon">
                    <div className={changeIconStyle3}>
                      <i class="fa-sharp fa-solid fa-calendar-days"></i>
                    </div>
                  </div>
                  <div className={changeStyle3}>
                    <p>6 Hours of Sessions Per Week</p>
                    <h4>Lorem ipsum dolor sit, amet</h4>
                    <p>
                      Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                      Dolorem tempora esse tenetur aspernatur unde nostrum ex
                      odit sapiente totam laborum?
                    </p>
                  </div>
                </div>
                <div className="Muny6Box">
                  <div className="timeline-icon">
                    <div className={changeIconStyle4}>
                      <i class="fa-sharp fa-solid fa-calendar-days"></i>
                    </div>
                  </div>
                  <div className={changeStyle4}>
                    <p>120+ Mocks & Sectional Tests</p>
                    <h4>Lorem ipsum dolor sit, amet</h4>
                    <p>
                      Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                      Dolorem tempora esse tenetur aspernatur unde nostrum ex
                      odit sapiente totam laborum?
                    </p>
                  </div>
                </div>
                <div className="Muny6Box">
                  <div className="timeline-icon">
                    <div className={changeIconStyle5}>
                      <i class="fa-sharp fa-solid fa-calendar-days"></i>
                    </div>
                  </div>
                  <div className={changeStyle5}>
                    <p>Access To 10+ Current IPM Students</p>
                    <h4>Lorem ipsum dolor sit, amet</h4>
                    <p>
                      Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                      Dolorem tempora esse tenetur aspernatur unde nostrum ex
                      odit sapiente totam laborum?
                    </p>
                  </div>
                </div>
                <div className="Muny6Box">
                  <div className="timeline-icon">
                    <div className={changeIconStyle6}>
                      <i class="fa-sharp fa-solid fa-calendar-days"></i>
                    </div>
                  </div>
                  <div className={changeStyle6}>
                    <p>Let Us Be Your Unfair Advantage</p>
                    <h4>Lorem ipsum dolor sit, amet</h4>
                    <p>
                      Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                      Dolorem tempora esse tenetur aspernatur unde nostrum ex
                      odit sapiente totam laborum?
                    </p>
                  </div>
                </div>
              </div>
              <div className="timeline__line">
                <div className="timeline__line__inner"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
