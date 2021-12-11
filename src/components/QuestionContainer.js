import React, { Component } from "react";
import { Card } from "semantic-ui-react";
import Question from "./Question";

export default class QuestionContainer extends Component {
  render() {
    return (
      <div>
        <Card.Group>
          {this.props.question.map((q, id) => {
            return (
              <Question
                questions={q}
                key={id}
                scorePlus={this.props.scorePlus}
              />
            );
          })}
        </Card.Group>
      </div>
    );
  }
}
