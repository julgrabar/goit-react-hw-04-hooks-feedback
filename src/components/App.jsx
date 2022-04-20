import { useState } from 'react';
import { Section } from './Section/Section';
import { Statistics } from './Statistics/Statistics';
import { FeedbackOptions } from './Feedback options/FeedbackOptions';
import { Notification } from './Notification/Notification';

export { Component } from 'react';

const App = () => {
  const [good, setGood] = useState(0);
  const [bad, setBad] = useState(0);
  const [neutral, setNeutral] = useState(0);

  const onButtonClick = event => {
    console.log(event.target.name);
    switch (event.target.name) {
      case 'good':
        setGood(prev => prev + 1);
        break;

      case 'bed':
        setBad(prev => prev + 1);
        break;

      case 'neutral':
        setNeutral(prev => prev + 1);
        break;

      default:
        break;
    }
  };

  const countTotalFeedback = () => {
    const sum = bad + neutral + good;
    return sum;
  };

  const total = countTotalFeedback();

  const countPositiveFeedbackPercentage = () => {
    let result = (good / total) * 100;
    return Number(result.toFixed(1)) ?? 0;
  };

  return (
    <div>
      <Section title="Please leave feedback">
        <FeedbackOptions onLeaveFeedback={onButtonClick} />
      </Section>

      <Section title="Statistics">
        {total > 0 ? (
          <Statistics
            good={good}
            neutral={neutral}
            bad={bad}
            total={total}
            positivePercentage={countPositiveFeedbackPercentage()}
          />
        ) : (
          <Notification message="There is no feedback" />
        )}
      </Section>
    </div>
  );
};

export { App };
