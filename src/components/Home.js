import React, { Component } from "react";
import { connect } from "react-redux";
import Answered from "./Answered";
import Unanswered from "./Unanswered";
import SignIn from "./SignIn";

class Home extends Component {
   state = {
     toggle: "unanswered",
     tabUnansewered:true,
     tabAnswered: false
  };

  toggleAnswered =(e) =>{
    e.preventDefault();
    this.state.toggle === "unanswered"
    && this.setState(()=>({
      toggle: "answered",
      tabUnansewered:false,
      tabAnswered: true
    }))
  }
  toggleUnanswered =(e) =>{
    e.preventDefault();
    this.state.toggle === "answered"
    && this.setState(()=>({
      toggle: "unanswered",
      tabUnansewered:true,
      tabAnswered: false
    }))
  }
  getUnanswered = () => {
    const { questionId } = this.props;
    let unanswered = [];
    const answered= this.getAnswered();
    unanswered= questionId.filter((q)=>(
        answered.indexOf(q)=== -1
    ))
    return unanswered;
  };
  getAnswered = () => {
    const { questions, questionId, authedUser } = this.props;
    const answered = [];
    questionId.map((q) => (
      questions[q].optionOne.votes.map(
        (user) => user === authedUser && answered.push(q)
      ),
      questions[q].optionTwo.votes.map(
        (user) => user === authedUser && answered.push(q)
      )
    ) 
    );
    return answered;
  };
  render() {
    
    return (
      <div >
        {
          this.props.authedUser === null ?
          <SignIn />
          : <div className="navBarcontainer">
             <div className="tabBar">
          <button className= {this.state.tabUnansewered ?  "tabBar-btn tabActive" : "tabBar-btn"}  onClick={this.toggleUnanswered}>
            Unanswered Questions
          </button>
          <button className={this.state.tabAnswered ?  "tabBar-btn tabActive" : "tabBar-btn"} onClick={this.toggleAnswered}>
            Answered Questions
          </button>
        </div>
            {this.state.toggle === "unanswered"  ?
            <Unanswered unanswered ={this.getUnanswered()} />
            :  <Answered answered={this.getAnswered()}/>
          }
          </div>
         
        }
        

      </div>
    );
  }
}

function mapStateToProps({ authedUser, questions }) {
  return {
    authedUser,
    questionId: Object.keys(questions).sort((a, b)=>questions[b].timestamp - questions[a].timestamp),
    questions
  };
}
export default connect(mapStateToProps)(Home);
