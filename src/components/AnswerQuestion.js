import React, {Component} from 'react'
import { connect } from "react-redux";
import { handleAnswerQuestion } from "../actions/shared.js";
import { Redirect } from "react-router-dom";
import SignIn from './SignIn'
import Page404 from './Page404.js';
class AnswerQuestion extends Component {

  state ={
    option: "",
    toQuestionResult: false
  }
  handleSubmit =e=>{
  const { dispatch, id, authedUser}= this.props
  const {option}= this.state
  e.preventDefault();
  this.state.option !=="" ? (
    dispatch(handleAnswerQuestion({
      qid: id,
      answer:option , 
      authedUser,
    })),
    this.setState(() => ({
      option: "",
      toQuestionResult: true,
    }))
  )
  : alert('please choose an option')
  }
  handleChange =e =>{
    //e.preventDefault();
    this.setState({
      option: e.target.value
    })
  }
render(){
const {id, questions, users, authedUser} = this.props
if (this.state.toQuestionResult === true) {
  return <Redirect to={{pathname:`/questions/${id}`,
  state:{fromNotifications :true}}} />;
}
return(

<div>
{questions[id] === undefined ? <Page404/>:
        authedUser === null ?
        <SignIn answer= {false} />
        :
  <div className="answer">
    <div className="answerHeader">{users[questions[id].author].name} asks:</div>
    <div className="qst">
      <div className="qst-user">
           <img src={users[questions[id].author].avatarURL} alt="user Image" width="100px"/> 
    </div>
      <div className="qst-choices">
        <div className="title">Would you rather ...</div>
        <form>
          <div className="choice">
            <input type="radio" id="choice1" name="choice"  value="optionOne"  onChange= {this.handleChange} />
            <label htmlFor="choice1">{questions[id].optionOne.text}</label>
          </div>
          <div className="choice">
            <input type="radio" id="choice2"  name="choice"  value="optionTwo" onChange= {this.handleChange}/>
            <label htmlFor="choice2">{questions[id].optionTwo.text}</label>
          </div>
          <button className="btn-newQuestion" onClick={this.handleSubmit}>submit</button>
          <div>
          </div>  
        </form>
      </div>
    </div>
  </div>
}
</div>
        )
    }
}

  function mapStateToProps({  authedUser, questions, users }) {
   // const {id} = props.match.params
    return {
    authedUser,
     questions, 
     users
    };
  }

export default connect(mapStateToProps)(AnswerQuestion)