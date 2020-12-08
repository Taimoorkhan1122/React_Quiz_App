import React, { Component } from "react";
import QuizArea from "./components/QuizArea";
import ScoreArea from "./components/ScoreArea";
import dataSet from "./data/QuizData";

export default class App extends Component {
  state = {
    current: 0,
    dataset: dataSet,
    correct: 0,
    incorrect: 0,
    isFinished: false,
  };

  handleClick = (choice) => {
    console.log(choice);
    // restarting
    if (choice === "play again") {
      return this.setState((prevState) => ({
        current: 0,
        dataset: dataSet,
        correct: 0,
        incorrect: 0,
        isFinished: false,
      }));
    }
    // Handling Correct/Incorrect count
    choice === dataSet[this.state.current].correct
      ? this.setState((prevState) => ({
          ...prevState,
          correct: prevState.correct + 1,
        }))
      : this.setState((prevState) => ({
          ...prevState,
          incorrect: prevState.incorrect + 1,
        }));

    // Handling current state and end messsage
    this.state.current === this.state.dataset.length - 1
      ? this.setState((prevState) => ({
          ...prevState,
          isFinished: true,
        }))
      : this.setState((prevState) => ({
          ...prevState,
          current: prevState.current + 1,
        }));
  };
  render() {
    return (
      <div>
        <h1>Quiz App</h1>
        <QuizArea
          isFinished={this.state.isFinished}
          dataSet={this.state.dataset}
          current={this.state.current}
          handleClick={this.handleClick}
          correct={this.state.correct}
          incorrect={this.state.incorrect}
        />
        <ScoreArea
          correct={this.state.correct}
          incorrect={this.state.incorrect}
        />
      </div>
    );
  }
}
