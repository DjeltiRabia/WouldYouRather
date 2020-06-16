import React, { Component } from 'react'
import {connect} from 'react-redux'
import {handleNewQuestion  } from "../actions/questions";
import { Redirect } from "react-router-dom";
import SignIn from "./SignIn";

class AddQuestion extends Component {

  state ={
    optionOne:'',
    optionTwo:'',
    toHome: false
  }

  handleSubmit = e => {
    const {dispatch}= this.props
    e.preventDefault()
    dispatch(handleNewQuestion(
      this.state.optionOne, this.state.optionTwo
    ))
    this.setState(()=>({
      optionOne:'',
      optionTwo: '',
      toHome: true
    }))
  }

  handleChangeOne = e =>{
    e.preventDefault();
    this.setState({
      optionOne: e.target.value})      
}
handleChangeTwo = e =>{
  e.preventDefault();
  this.setState({
    optionTwo: e.target.value}) 
}
  render() {
    const {optionOne, optionTwo} =this.state
    if (this.state.toHome === true) {
      return <Redirect to="/Home" />;
    }
    return (
      <div>
         {
          this.props.authedUser === null ?
          <SignIn />
          :
      <div className="newQuestion">
          <div className="newQuestionHeader">
             create new question
         </div>
    <div className="questionCorp">
        <div className="title">Complete the question:</div>
        <div  className="wyr">Would you rather...</div>
        <div className="wyrQuestion">
            <form onSubmit={this.handleSubmit}>
                <input type="text"  value={optionOne} onChange={this.handleChangeOne} placeholder="would you rather option one"/>
                <p id="line">or</p>
                <input type="text"   value={optionTwo} onChange={this.handleChangeTwo} placeholder="would you rather option two"/>
                <button className="btn-newQuestion"  >Submit</button>
            </form>
        </div>
    </div>
  </div>
   
}
</div> )
}
}
function mapStateToProps({authedUser, questions }) {
  return {
      authedUser,
      questions,
  }
}
export default connect(mapStateToProps)(AddQuestion)