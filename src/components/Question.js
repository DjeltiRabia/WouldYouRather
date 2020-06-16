import React, {Component} from 'react'
import { Link} from "react-router-dom";
import { connect } from "react-redux";
import { Redirect } from "react-router-dom";

class Question extends Component {

  toDetail=(e)=> {
    //e.preventDefault()
   <Link to={{pathname:window.location.pathname,
    state:{fromNotifications: this.props.answer}}} />}
    render(){
      const { avatar, author, text, id, answer} =this.props
        return(

<div id="answered" className="tab">
          <div className="userQuestion">
            <div className="userHeader">{author}</div>
            <div className="questionBody">
              <div className="userImage">
                <img src={avatar} width="100px" height="100px" alt="avatar" />
              </div>
              <div className="question">
                <h4>Would you rather</h4>
                <p className="questionText">
                ...{text}...
                </p>
                <Link  to ={{pathname:`/questions/${id}`,
                        state:{fromNotifications :answer}}}>
                  <button className="btn" >
                  View Poll
                  </button> 
                </Link>  
              </div>  
            </div>
          </div>
        </div>
        )
    }
}

function mapStateToProps ({authedUser, users, questions}) {
  return {
    authedUser,
    questions,
    users
  }
}
export default connect(mapStateToProps) (Question)