import React, { Component } from "react";
import { Button, Card } from "semantic-ui-react";

export default class Question extends Component {
  constructor(props) {
    super(props);

    this.state = { trueBtn: false, falseBtn: false, score: 0 };
  }

  checkAnswer = (e) => {
    const { answer } = this.props.questions;
    const scorePlus = this.props.scorePlus;
    this.setState({
      trueBtn: true,
      falseBtn: true,
      trueActive: false,
      falseActive: false,
    });

    const userAnswer = e.target.id === "ansTrue" ? true : false;
    const checkCorrect = userAnswer === answer ? true : false;

    if (checkCorrect) {
      scorePlus();
    }
    if (e.target.id === "ansTrue") {
      this.setState({ trueActive: checkCorrect ? true : false });
    } else {
      this.setState({ falseActive: checkCorrect ? true : false });
    }
  };
  render() {
    const { text } = this.props.questions;

    return (
      <Card.Group>
        <Card>
          <Card.Content>
            <Card.Description>{text}</Card.Description>
          </Card.Content>
          <Card.Content>
            <div className="ui two buttons">
              <Button
                inverted
                color="green"
                id="ansTrue"
                onClick={this.checkAnswer}
                disabled={this.state.trueBtn}
                active={this.state.trueActive}
              >
                True
              </Button>
              <Button
                inverted
                color="red"
                id="ansFalse"
                onClick={this.checkAnswer}
                disabled={this.state.falseBtn}
                active={this.state.falseActive}
              >
                False
              </Button>
            </div>
          </Card.Content>
        </Card>
      </Card.Group>
    );
  }
}
