import "./style.scss";

export default function CourseF() {
  const CourseFDta = [
    {
      p1: "Lorem ipsum dolor sit?",
      p2: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo corrupti impedit odio nam nihil incidunt aliquid vero voluptate. Nisi, blanditiis.",
    },
    {
      p1: "Lorem ipsum dolor sit?",
      p2: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo corrupti impedit odio nam nihil incidunt aliquid vero voluptate. Nisi, blanditiis.",
    },
    {
      p1: "Lorem ipsum dolor sit?",
      p2: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo corrupti impedit odio nam nihil incidunt aliquid vero voluptate. Nisi, blanditiis.",
    },
    {
      p1: "Lorem ipsum dolor sit?",
      p2: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo corrupti impedit odio nam nihil incidunt aliquid vero voluptate. Nisi, blanditiis.",
    },
    {
      p1: "Lorem ipsum dolor sit?",
      p2: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo corrupti impedit odio nam nihil incidunt aliquid vero voluptate. Nisi, blanditiis.",
    },
    {
      p1: "Lorem ipsum dolor sit?",
      p2: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo corrupti impedit odio nam nihil incidunt aliquid vero voluptate. Nisi, blanditiis.",
    },
  ];
  return (
    <div className="section CourseF">
      <div className="title">
        <h2>Frequently Asked Questions</h2>
      </div>

      <div className="container inCourseUh7">
        {CourseFDta.map((item, i) => {
          return (
            <div>
              <p>{item.p1}</p>
              <p>{item.p2}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
}
