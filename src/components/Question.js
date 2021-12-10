import React, { Component } from "react";
import { Button, Card } from "semantic-ui-react";

export default class Question extends Component {
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
              <Button basic color="green">
                True
              </Button>
              <Button basic color="red">
                False
              </Button>
            </div>
          </Card.Content>
        </Card>
      </Card.Group>
    );
  }
}
