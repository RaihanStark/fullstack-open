import Headers from "./containers/Headers/Headers";
import Content from "./containers/Content/Content";
import Total from "./components/Total/Total";

const App = () => {
  const course = {
    name: "Half Stack application development",
    parts: [
      {
        course: "Fundamentals of React",
        exercises: 10,
      },
      {
        course: "Using props to pass data",
        exercises: 7,
      },
      {
        course: "State of a component",
        exercises: 14,
      },
    ],
  };
  return (
    <div>
      <Headers course={course.name} />
      <Content parts={course.parts} />
      <Total parts={course.parts} />
    </div>
  );
};

export default App;
