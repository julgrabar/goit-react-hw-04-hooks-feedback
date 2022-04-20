import PropTypes from 'prop-types';
import { Button } from './FeedbackOptions.styled';

export const FeedbackOptions = ({ onLeaveFeedback }) => (
  <>
    <Button onClick={onLeaveFeedback} name="good">
      Good
    </Button>
    <Button onClick={onLeaveFeedback} name="bad">
      Bad
    </Button>
    <Button onClick={onLeaveFeedback} name="neutral">
      Neutral
    </Button>
  </>
);

FeedbackOptions.propTypes = {
  onLeaveFeedback: PropTypes.func,
};
