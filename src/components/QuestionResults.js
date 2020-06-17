import React, { Component } from "react";
import { connect } from "react-redux";
import { Redirect } from "react-router-dom";
import Page404 from "./Page404";
import SignIn from "./SignIn";
import { Progress } from "antd";
import "antd/dist/antd.css";

class QuestionResults extends Component {
  yourVote = () => {
    let vote = "none";
    const { id, questions, authedUser } = this.props;
    questions[id].optionOne.votes.map((v) => {
      if (v === authedUser) vote = "optionOne";
    });
    this.props.questions[id].optionTwo.votes.map((v) => {
      if (v === this.props.authedUser) vote = "optionTwo";
    });
    return vote;
  };
  getVotes = () => {
    const { id, questions, users, authedUser } = this.props;
    const nbVotesOne = questions[id].optionOne.votes.length;
    const nbVotesTwo = questions[id].optionTwo.votes.length;
    const nbVotes = nbVotesOne + nbVotesTwo;
    return { nbVotes, nbVotesOne, nbVotesTwo };
  };

  render() {
    const { id, questions, users, authedUser } = this.props;

    return (
      <div>
        {authedUser === null ? (
          <div>
              <SignIn answer={true} />
          </div>
          
        ) : questions[id] === undefined || this.yourVote() === "none" ? (
          <Redirect to='/404' />
        ) : (
          <div className="answer">
            <div className="answerHeader">
              Asked by {users[questions[id].author].name}
            </div>
            <div className="qst">
              <div className="qst-user">
                <img
                  src={users[questions[id].author].avatarURL}
                  alt="user"
                  width="150px"
                />
              </div>
              <div className="qst-choices">
                <div className="title">Results: </div>
                <div
                  className={
                    this.yourVote() === "optionOne"
                      ? "questionResult yourVote"
                      : "questionResult"
                  }
                >
                  <h3>
                    <span>Would You rather </span>
                    {questions[id].optionOne.text} ?
                  </h3>
                  <Progress
                    strokeColor={{
                      "0%": "#108ee9",
                      "100%": "#87d068",
                    }}
                    percent={
                      Math.round((this.getVotes().nbVotesOne / this.getVotes().nbVotes) *
                      100)
                    }
                  />
                  <h4>
                    {this.getVotes().nbVotesOne} out of{" "}
                    {this.getVotes().nbVotes} votes
                  </h4>
                </div>

                <div
                  className={
                    this.yourVote() === "optionTwo"
                      ? "questionResult yourVote"
                      : "questionResult"
                  }
                >
                  <h3>
                    <span>Would You rather </span>
                    {questions[id].optionTwo.text} ?
                  </h3>
                  <Progress
                    strokeColor={{
                      "0%": "#108ee9",
                      "100%": "#87d068",
                    }}
                    percent={
                      Math.round((this.getVotes().nbVotesTwo / this.getVotes().nbVotes) *
                      100)
                    }
                  />
                  <h4>
                    {this.getVotes().nbVotesTwo} out of{" "}
                    {this.getVotes().nbVotes} votes
                  </h4>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    );
  }
}

function mapStateToProps({ authedUser, questions, users }) {
  //const { id } = props.match.params;
  return {
    authedUser,
    questions,
    users,
  };
}

export default connect(mapStateToProps)(QuestionResults);
