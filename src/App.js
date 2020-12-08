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

  HandleClick = () => {};
  render() {
    return (
      <div>
        <h1>Quiz App</h1>
        <QuizArea
          isFinished={this.state.isFinished}
          dataSet={this.state.dataset}
        />
        <ScoreArea />
      </div>
    );
  }
}
