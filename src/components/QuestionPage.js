import React, { Component } from "react";
import questions from "../data";
import QuestionContainer from "./QuestionContainer";
import { Container } from "semantic-ui-react";
import "../Style.css";

export default class QuestionPage extends Component {
  constructor(props) {
    super(props);

    this.state = {
      question: {
        question: "",
        answer: null,
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

  render() {
    const shuffled2 = this.shuffleQuestion(questions.questions);
    return (
      <div>
        <Container className="section">
          <h1>Lutrivia</h1>
          <QuestionContainer question={shuffled2} className="section" />
        </Container>
      </div>
    );
  }
}
