import React, { Component } from "react";
import questions from "../data";
import QuestionContainer from "./QuestionContainer";
import { Container, Button } from "semantic-ui-react";
import "../Style.css";
import Form2 from "./Form";

export default class QuestionPage extends Component {
  constructor(props) {
    super(props);

    this.state = {
      questions: this.shuffled2,
      score: 0,
      savedUser: {
        name: "",
        score: 0,
      },
    };
  }

  shuffleQuestion = (arr) => {
    const shuffled = arr.sort(() => 0.5 - Math.random());
    shuffled.splice(0, 5);
    return shuffled;
  };

  componentDidMount() {
    console.log(questions.questions);
  }

  updateScore = () => {
    this.setState((preState) => ({ score: preState.score + 1 }));
  };

  saveScore = (e) => {
    this.setState({
      savedUser: {
        name: e,
        score: this.score,
      },
    });
    console.log("Saving...");
    console.log(this.state.savedUser);
  };

  render() {
    const shuffled2 = this.shuffleQuestion(questions.questions);
    return (
      <div>
        <Container className="section">
          <h1>Lutrivia</h1>
          <Button onClick={() => window.location.reload(false)}>
            New Game
          </Button>
          <span>
            <b>Score: {this.state.score}</b>
          </span>
          <QuestionContainer
            question={shuffled2}
            className="section"
            checkyCheck={this.checkAnswer}
            scorePlus={this.updateScore}
          />
          <span>
            <Form2 saveScore={this.saveScore} />
          </span>
        </Container>
      </div>
    );
  }
}
