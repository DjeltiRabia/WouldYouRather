import React, {Component} from 'react'
import { connect } from "react-redux";
import AnswerQuestion from "./AnswerQuestion";
import QuestionResults from "./QuestionResults";
import SignIn from './SignIn';
class questions extends Component {

 
render(){
const {id, s} = this.props
return(
<div>

{ s === undefined ?
  <SignIn />
:(s.fromNotifications ?
         <QuestionResults id={id} />
        : <AnswerQuestion id={id}/> )   
}
  
</div>
        )
    }
}

  function mapStateToProps({  authedUser, questions, users }, props) {
    const {id} = props.match.params
    const s = props.location.state
    return {
    authedUser,
     questions, 
     users,
     id,
     s
    };
  }

export default connect(mapStateToProps)(questions)