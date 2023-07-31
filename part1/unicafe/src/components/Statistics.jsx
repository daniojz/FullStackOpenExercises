import React from "react";
import StatisticLine from "./StatisticLine";

const Statistics = ({ good, neutral, bad }) => {
  const participation = () => {
    return good + neutral + bad;
  };
  const average = () => {
    return (good + neutral + bad) / 3;
  };
  const positive = () => {
    return (good * 100) / participation();
  };

  const participationTotal = participation();
  if (participationTotal === 0 || participationTotal === null) {
    return <p>No feedback given</p>;
  }

  return (
    <table>
      <tbody>
        <StatisticLine
          text={"good"}
          value={good}
          percentage={false}
        ></StatisticLine>
        <StatisticLine text={"neutral"} value={neutral}></StatisticLine>
        <StatisticLine text={"bad"} value={bad}></StatisticLine>
        <StatisticLine text={"all"} value={participationTotal}></StatisticLine>
        <StatisticLine text={"average"} value={average()}></StatisticLine>
        <StatisticLine
          text={"positive"}
          value={positive()}
          percentage={true}
        ></StatisticLine>
      </tbody>
    </table>
  );
};

export default Statistics;
