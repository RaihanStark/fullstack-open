function Total({ parts }) {
  let totalExercise = parts.reduce((accumulator, currentValue) => {
    return accumulator + currentValue.exercises;
  }, 0);

  return <p>Number of exercises {totalExercise}</p>;
}

export default Total;
