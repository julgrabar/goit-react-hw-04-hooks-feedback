import { Component } from "react";
import { Section } from "./Section/Section";
import { Statistics } from "./Statistics/Statistics";
import { FeedbackOptions } from "./Feedback options/FeedbackOptions";

export {Component} from "react";

class App extends Component {

  state = {
    good: 0,
    neutral: 0,
    bad: 0
  }

  onButtonClick = (event) =>{
    let {name : nameBtn} = event.target;
    this.setState((state)=>({
      [nameBtn]: state[nameBtn] + 1
    }))
  }

  countTotalFeedback = () =>{
    return (Object.values(this.state).reduce((sum,item)=>sum+=item, 0))
  }
  
  countPositiveFeedbackPercentage = () =>{
    let result = this.state.good / this.countTotalFeedback() * 100
    return (isNaN(result) ? 0 : result)
  }

  render (){
    const {good, bad, neutral} = this.state;

    return (
    <div>
      <Section title="Please leave feedback">
        <FeedbackOptions 
        options={Object.keys(this.state)} 
        onLeaveFeedback={this.onButtonClick}/>
      </Section>
      

      <Section title="Statistics">

      <Statistics 
        good={good} 
        neutral={neutral} 
        bad={bad} 
        total={this.countTotalFeedback()} 
        positivePercentage={this.countPositiveFeedbackPercentage()}

      />

      </Section>
      
    </div>
  );
  }
}

export {App};