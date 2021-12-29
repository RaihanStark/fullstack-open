function Total({ parts }) {
  let totalExercise = parts.reduce((accumulator, currentValue) => {
    return accumulator + currentValue.exercises;
  }, 0);

  return (
    <p>
      <b>Total of {totalExercise} exercises</b>
    </p>
  );
}

export default Total;
