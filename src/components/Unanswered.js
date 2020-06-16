import React, { Component } from 'react'
import Question from './Question'
import {connect} from 'react-redux'

class Unanswered extends Component {
  componentDidMount(){
    console.log('component unanswered did mount')
  }
  render() {
    const { questions, users } = this.props;

    return (
        <div className="tab"   >
          <ul>
            { 
            this.props.unanswered.map((u) => (
              <li key={u}>
                <Question
                answer={false}
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

export default connect(mapStateToProps)(Unanswered);