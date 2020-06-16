import React, { Component } from 'react'


class UserScore extends Component {

  
  render() {
        const {name, avatar, answered, created, i}= this.props
    return (
      <div>
       <div className="leaderBoard">
        <div className="banner">
            {
                i===0 ? <img src="trophy.svg" width="20px" height="20px" alt="alt"/>:
                i===1 ?  <img src="silver-cup.svg" width="20px" height="20px" alt="alt"/>:
                i===2 && <img src="bronze-cup.svg" width="20px" height="20px" alt="alt"/>
            }
         </div>

      <div className="result">
          <div className="user-result-img"><img src={avatar} width="100px" height="100px" alt="user"/></div>
          <div className="user-result-info">
              <div className="user-info-name"> {name}</div>
              <ul>
                  <li className="user-result">Answered Questions      <span >{answered}</span></li>
                  <li className="user-result">Created Questions    <span >{created}</span></li>
              </ul>
          </div>
          <div className="score">
              <div className="headerScore">score</div>
              <div className="score-result">{answered+created}</div>
          </div>
      </div>
  </div>
</div>

   
    
     
    )
  
}
}

export default UserScore