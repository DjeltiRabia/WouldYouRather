import React, { Component } from 'react'
import Question from './Question'
import {connect} from 'react-redux'

class Unanswered extends Component {
  componentDidMount(){
    console.log('component unanswered did mount')
  }
  render() {
    const { questions } = this.props;

    return (
        <div className="tab"   >
          <ul>
            { 
            this.props.unanswered.map((u) => (
              <li key={u}>
                <Question
                answer={false}
                 id = {questions[u].id}
                />
              </li>
            ))}
          </ul>
        </div>
    )
}
}
function mapStateToProps({  questions }) {
    return {
      questionId: Object.keys(questions),
      questions,
    };
}

export default connect(mapStateToProps)(Unanswered);