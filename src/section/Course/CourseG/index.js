import { Link } from "react-router-dom";
import "./style.scss";

export default function CourseG() {
  const CourseFDta = [
    {
      p1: "Are all BBA exams covered?",
      p2: "While the course is centred around IPMAT, we do cover the syllabus of all major BBA exams like DUJAT, NPAT, CUET, SET, etc",
    },
    {
      p1: "What is your past record like?",
      p2: "Last year, we had 75 final selections in IIM Rohtak and IIM Indore. Overall, we had a cumulative selection count of more than 100 across all IIMs.",
    },
    {
      p1: "Can I pay in installments?",
      p2: "You can make use of the EMI Card / Credit Card / Pay Later options available at the time of checkout.",
    },
    {
      p1: "How to access the content?",
      p2: "All the content can be accessed on our secured platform learn.aceipm.com. We also have Android and iOS apps available for mobile access.",
    },
    {
      p1: "What if I miss a session?",
      p2: "Recordings of all the sessions will be made available 24 hours after the session gets over. You can go through them however many times you want.",
    },
    {
      p1: "Am I too late to start?",
      p2: "As mentioned earlier, all the content will be made available on our platform regardless of when you join. Better late than never!",
    },
  ];
  return (
    <div className="section CourseG">
      <div className="title">
        <h2>Discounted pricing till:</h2>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed, quod.
        </p>
      </div>

      <div className="container inCourseUh7">
        <div className="timeCountdown">
          <div>
            <span>03</span>
            <span>Days</span>
          </div>
          <div>
            <span>11</span>
            <span>Hours</span>
          </div>
          <div>
            <span>30</span>
            <span>Minutes</span>
          </div>
          <div>
            <span>03</span>
            <span>Seconds</span>
          </div>
        </div>
        <div className="c6yM">
          <a href="#pricing">
            <span class="spanAnime"></span>
            <span>Lorem ipsum IPSUM Preparation With AMeT</span>
              <span>Lorem ipsum dolor sit amet consectetur</span>
          </a>
        </div>
      </div>
    </div>
  );
}
