import Headers from "../Headers/Headers";
import Content from "../Content/Content";
import Total from "../../components/Total/Total";

function Course({ course }) {
  return (
    <div>
      <Headers course={course.name} />
      <Content parts={course.parts} />
      <Total parts={course.parts} />
    </div>
  );
}

export default Course;
