import React, { Component } from 'react'

export default class Confirm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      questions: [
        {q: 'What is 3 + 5?', a: '8'}, 
        {q: 'What is 4 + 3?', a: '7'}, 
        {q: 'What is 2 + 4?', a: '6'}, 
        {q: 'What is 3 + 2?', a: '5'}, 
        {q: 'What is 7 + 2?', a: '9'}
      ],
      index: ''
    }
  }

  UNSAFE_componentWillMount() {
    // Choose a random number between 1 and the length of the number of questions and set to state.
    const index = Math.floor(Math.random() * this.state.questions.length)
    this.setState({ index: index })
  }

  handleCheckNumber = e => {
    e.preventDefault();

    const value = e.target.number.value;

    if(value === this.state.questions[this.state.index].a) {
      console.log('YES')
    } else {
      console.log('NO')
    }
  } 

  render() {
    return (
      <section>
        <form onSubmit={this.handleCheckNumber}>
          <fieldset>
            <legend></legend>
            <h1>{this.state.questions[this.state.index].q}</h1>
            <input required type="number" name="number" />
            <button className="check-number" type="submit">Go</button>
          </fieldset>
        </form>
      </section>
    )
  }
}