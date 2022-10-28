import "./style.scss";

export default function AboutBanner() {
  return (
    <div className="section AboutBanner">
      <div className="overlay"></div>
      <div className="container inBanner">
        <div className="MiMAb">
          <h1>About Us</h1>
          <div className="Mnyy8">
            <div className="inMnyy8">
              <div className="counterBox">
                <div className="top">
                  <span>350</span>
                  <span>+</span>
                </div>
                <div className="bottom">
                  Selections last <br /> Year
                </div>
              </div>
              <div className="counterBox">
                <div className="top">
                  <span>19</span>
                  <span>K+</span>
                </div>
                <div className="bottom">
                  Hours of Content <br /> Consumed
                </div>
              </div>
              <div className="counterBox">
                <div className="top">
                  <span>83</span>
                  <span>+</span>
                </div>
                <div className="bottom">
                  Mentors <br /> Onboarded
                </div>
              </div>
              <div className="counterBox">
                <div className="top">
                  <span>9</span>
                  <span>+</span>
                </div>
                <div className="bottom">
                  Years of Edtech <br /> Experience
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
