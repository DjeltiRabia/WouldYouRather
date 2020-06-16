import React, { Component } from 'react'
import Question from './Question'
import {connect} from 'react-redux'

class Answered extends Component {
  
  render() {
    const { questions, users } = this.props;

    return (
        <div  className="tab">
          <ul>
            {this.props.answered.map((u) => (
              <li key={u}>
                <Question
                  answer={true}
                  id = {questions[u].id}
                  author={users[questions[u].author].name}
                  text={questions[u].optionOne.text}
                  avatar={users[questions[u].author].avatarURL}
                />
              </li>
            ))}
          </ul>
        </div>
    ) 
}
}
function mapStateToProps({  questions, users }) {
    return {
      questionId: Object.keys(questions),
      questions,
      users,
    };
}

export default connect(mapStateToProps)(Answered);