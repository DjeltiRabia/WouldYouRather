import React, { Component } from "react";
import UserScore from "./UserScore";
import { connect } from "react-redux";
import SignIn from "./SignIn";

class LeaderBoard extends Component {

  // get the created questions by a given user
  getCreated = (user) => {
    const { questionId, questions } = this.props;
    return questionId.filter((q) => questions[q].author === user);
  };
  // get the answred questions by a given user
  getAnswered = (user) => {
    const { questions, questionId } = this.props;
    const answered = [];
    questionId.map(
      (q) => (
        questions[q].optionOne.votes.map((u) => u === user && answered.push(q)),
        questions[q].optionTwo.votes.map((u) => u === user && answered.push(q))
      )
    );
    return answered;
  };
  // get the score of a given user
  getScore =(user) => {
    return this.getAnswered(user).length + this.getCreated(user).length
  }
  render() {
    const { userId, users } = this.props;
    const userSorted= userId.sort((a, b)=> this.getScore(b) - this.getScore(a)) // sorting the users by score
    return (
      <div>
        {
          this.props.authedUser === null ?
          <SignIn />
          :
        <ul>
          {
            userSorted.map((user, i) => (
            <li key={user}>
              <UserScore
                name={users[user].name}
                avatar={users[user].avatarURL}
                answered= {this.getAnswered(user).length}
                created={this.getCreated(user).length}
                i={i}
              />
            </li>
          ))}
        </ul>
  }
      </div>
    );
  }
}
function mapStateToProps({ authedUser, questions, users }) {
 
  return {
    authedUser,
    questionId: Object.keys(questions),
    userId: Object.keys(users).sort((a, b)=>(users[b] -users[a])),
    users,
    questions,
  };
}
export default connect(mapStateToProps)(LeaderBoard);
