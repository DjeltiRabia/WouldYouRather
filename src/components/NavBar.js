import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import {connect} from 'react-redux'
import { setAuthedUser } from "../actions/authedUser";


class NavBar extends Component {
  render() {
    const { authedUser, users } = this.props;
    return (
      <nav className="navbar">
        <ul>
          <li >
            <NavLink to="/Home" exact activeClassName="active">
              Home
            </NavLink>
          </li>
          <li>
            <NavLink to="/add"  activeClassName="active">
              New Question
            </NavLink>
          </li>
          <li>
            <NavLink to="/LeaderBoard"  activeClassName="active">
              Leader Board
            </NavLink>
          </li>
          {authedUser && (  
        
          <li id="user">  
              Hello,  {users[authedUser].name} 
              <img  id='authedUser' src={users[authedUser].avatarURL} height="30" width="30px" alt="" /> 
            </li>         
          )}
          {authedUser && (  
        <li>
        <NavLink to="/" exact activeClassName="active" onClick={ ()=>( this.props.dispatch(setAuthedUser(null))
         )
          }>
          Logout
        </NavLink>
      </li>   
        )}
          
        </ul>
      </nav>
    );
  }
}
function mapStateToProps({  authedUser, users }) {
  return {
    authedUser,
    usersId: Object.keys(users),
    users,
  };
}
export default connect(mapStateToProps)(NavBar);
