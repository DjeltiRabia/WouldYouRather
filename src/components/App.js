import React, { Component, Fragment } from "react";
import "../index.css";
import NavBar from "./NavBar";
import SignIn from "./SignIn";
import AddQuestion from "./AddQuestion";
import LeaderBoard from "./LeaderBoard";
import questions from "./questions";
import Home from "./Home";
import { Redirect } from "react-router-dom";
import { connect } from "react-redux";
import { handleInitialData } from "../actions/shared";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Page404 from "./Page404";
import LoadingBar from "react-redux-loading";

class App extends Component {
  componentDidMount() {
    this.props.dispatch(handleInitialData());
  }
  render() {
    return (
      <Router>
        <Fragment>
          <NavBar />
          <Switch>
            <Route exact path="/">
              <div>
                <LoadingBar />
               {console.log("the loading state", this.props.loading)} 
                { 
                this.props.loading 
                ? null 
                : <SignIn /> }
              </div>
            </Route>
            <Route path="/Home">
              <Home />
            </Route>
            <Route path="/add">
              <AddQuestion />
            </Route>
            <Route path="/LeaderBoard">
              <LeaderBoard />
            </Route>
            <Route path="/questions/:id" component={questions}></Route>
            <Route path="/404" component={Page404} />
            <Redirect from="*" to="/404" />
          </Switch>
        </Fragment>
      </Router>
    );
  }
}
function mapStateToProps({ users }) {
  return {
    loading: users === null
  };
}
export default connect(mapStateToProps)(App);
