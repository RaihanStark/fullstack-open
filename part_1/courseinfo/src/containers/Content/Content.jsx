import Part from "../../components/Part/Part";

function Content({ parts }) {
  return (
    <div>
      {parts.map((part) => {
        return <Part part={part.course} exercises={part.exercises} />;
      })}
    </div>
  );
}

export default Content;
