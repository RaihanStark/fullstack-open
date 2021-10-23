import StatisticLine from "../StatisticLine/StatisticLine";

function Statistics({ stats }) {
  const countAll = () => {
    return stats.good + stats.neutral + stats.bad;
  };
  const countAverage = () => {
    return (stats.good * stats.bad - 1) / countAll();
  };

  const countPositive = () => {
    return (stats.good * 100) / countAll() + " %";
  };
  return (
    <table>
      <tbody>
        <StatisticLine text="Good" value={stats.good} />
        <StatisticLine text="Neutral" value={stats.neutral} />
        <StatisticLine text="Bad" value={stats.bad} />

        <StatisticLine text="All" value={countAll()} />
        <StatisticLine text="Average" value={countAverage()} />
        <StatisticLine text="Positive" value={countPositive()} />
      </tbody>
    </table>
  );
}

export default Statistics;
