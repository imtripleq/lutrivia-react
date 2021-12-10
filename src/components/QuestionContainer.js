import React, { Component } from "react";
import { Card } from "semantic-ui-react";
import Question from "./Question";

export default class QuestionContainer extends Component {
  shuffleArray = (array) => {
    let i = array.length - 1;
    for (; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      const temp = array[i];
      array[i] = array[j];
      array[j] = temp;
    }
    return array;
  };
  render() {
    // const qqq = this.props.question;
    // const shuffledQuestion = this.shuffleArray(qqq);
    return (
      <div>
        <Card.Group itemsPerRow={1}>
          {this.props.question.map((q, id) => {
            return <Question questions={q} key={id} />;
          })}
        </Card.Group>
      </div>
    );
  }
}
