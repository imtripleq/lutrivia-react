import React, { Component } from "react";
import { Form, Button } from "semantic-ui-react";

export default class Form2 extends Component {
  constructor(props) {
    super(props);

    this.state = {
      name: "",
    };
  }

  handleClick = () => {
    const saveScore = this.props.saveScore;
    saveScore(this.state.name);
  };

  handleForm = (e) => {
    this.setState({
      name: e.target.value,
    });

    console.log(this.state);
  };

  render() {
    return (
      <Form>
        <Form.Field>
          <input placeholder="Your name" onChange={this.handleForm}></input>
          <Button onClick={this.handleClick}>Submit</Button>
        </Form.Field>
      </Form>
    );
  }
}
