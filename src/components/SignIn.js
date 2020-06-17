import React, { Component } from "react";
import { connect } from "react-redux";
import { setAuthedUser } from "../actions/authedUser";
import { Redirect } from "react-router-dom";

class SignIn extends Component {
  componentDidMount(){
    console.log("the sign in compo did mount")
  }
  state = {
    authedUserState: "",
    toHome: false,
  };
  handleChange = (e) => {
    e.preventDefault();
    var b = document.getElementById("userSelect");
    var strUser = b.options[b.selectedIndex].value;
    this.setState(() => ({
      authedUserState: strUser,
    }));
  };
  handleSubmit = (e) => {
    e.preventDefault();
    this.state.authedUserState === "" ? alert("please choose a user")
    :(
      this.props.dispatch(setAuthedUser(this.state.authedUserState)),
      this.setState(() => ({
        authedUserState: "",
        toHome: true,
      }))
    )
    
  };
  render() {
   
    const { userId, users } = this.props;
    if (this.state.toHome === true) {
      if (window.location.pathname === "/") 
      return <Redirect to ='/Home' />
      else
      window.location.pathname
      return <Redirect to={{pathname:window.location.pathname,
      state:{fromNotifications: this.props.answer}}} />;
     
    }
    return (
      <div>
        <div>
          <div className="sign-in">
            <div className="header">
              <p className="title"> Welcome to the Would You Rather App!</p>
              <p className="subtitle">Please sign in to continue</p>
            </div>
            <div className="form">
              {/* <img src="reactredux.png" className="form-logo" alt="logo" /> */}
              <img src={require('../reactredux.png')} className="form-logo" alt="logo" />
              <h3> Sign in</h3>
              <form onSubmit={this.handleSubmit}>
                <select
                  id="userSelect"
                  onChange={this.handleChange}
                  defaultValue={"DEFAULT"}
                >
                  <option value="DEFAULT" disabled hidden>
                    Select User
                  </option>
                  {userId.map((id) => (
                    <option id="option" key={id} value={id}>
                      {users[id].name}
                    </option>
                  ))}
                </select>
                <button className="btn" type="submit">
                  Sign in
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
function mapStateToProps({ authedUser, users }) {
  
  return {
    loading: authedUser === null,
    userId: Object.keys(users),
    users,
  };
}
export default connect(mapStateToProps)(SignIn);
