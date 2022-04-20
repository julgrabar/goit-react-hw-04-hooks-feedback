import PropTypes from "prop-types";
import { Button } from "./FeedbackOptions.styled"

export const FeedbackOptions = ({options, onLeaveFeedback}) => (
    options.map((option) =>(<Button key={option} onClick={onLeaveFeedback} name={option}>{option}</Button>))
)

FeedbackOptions.propTypes ={
    options: PropTypes.arrayOf(PropTypes.string).isRequired,
    onLeaveFeedback: PropTypes.func
}