import { FaPhoneSquareAlt } from "react-icons/fa";

export default function FeedBackForm() {
  return (
    <>
      <form>
        <div className="form_field">
          <input type="text" placeholder="Name" />
          <select name="">
            <option value="Student">Student</option>
            <option value="Parent">Parent</option>
          </select>
          <input type="tel" placeholder="Phone" />
          <input type="email" placeholder="Email" />
          <select name="">
            <option value="Appearing in 2023">Appearing in 2023</option>
            <option value="Appearing in 2024">Appearing in 2024</option>
          </select>
          <select name="">
            <option value="Commerce">Commerce</option>
            <option value="Science">Science</option>
            <option value="Humanities">Humanities</option>
          </select>
        </div>
        <div className="form_btn">
          <button className="siteBtn">
            <FaPhoneSquareAlt /> Request A Feedback
          </button>
        </div>
      </form>
    </>
  );
}
