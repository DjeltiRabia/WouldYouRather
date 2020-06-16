import React, {Component} from 'react'
import { connect } from "react-redux";
import AnswerQuestion from "./AnswerQuestion";
import QuestionResults from "./QuestionResults";
class questions extends Component {

 
render(){
const {id, answer} = this.props
return(
<div>

{ answer ? 
        <QuestionResults id={id} />
        : <AnswerQuestion id={id}/>    
}
  
</div>
        )
    }
}

  function mapStateToProps({  authedUser, questions, users }, props) {
    const {id} = props.match.params
    const answer = props.location.state.fromNotifications 
    return {
    authedUser,
     questions, 
     users,
     id,
     answer
    };
  }

export default connect(mapStateToProps)(questions)