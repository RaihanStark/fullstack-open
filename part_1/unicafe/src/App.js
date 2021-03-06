import { useState } from "react";
import Statistics from "./components/Statistics/Statistics";
const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  return (
    <div>
      <h1>Give Feedback</h1>
      <button onClick={() => setGood(good + 1)}>Good</button>
      <button onClick={() => setNeutral(neutral + 1)}>Neutral</button>
      <button onClick={() => setBad(bad + 1)}>Bad</button>

      <h1>Statistics</h1>
      {good || neutral || bad ? (
        <Statistics stats={{ good, neutral, bad }} />
      ) : (
        <p>No feedback given</p>
      )}
    </div>
  );
};

export default App;
