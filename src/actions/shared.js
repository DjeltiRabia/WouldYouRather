import {getInitialData, saveQuestionAnswer} from '../utils/api'
import {getUsers, updateUserAnswer} from './users'
import {getQuestions, answerQuestion} from './questions'
import {showLoading, hideLoading} from 'react-redux-loading'


export function handleInitialData() {
       return (dispatch) => {
          dispatch(showLoading())
        return getInitialData()
        .then(({users, questions}) => {
            dispatch(getUsers(users))
            dispatch(getQuestions(questions))
            dispatch(hideLoading())
        });
    }

}

export function handleAnswerQuestion(info){

  return async(dispatch) => {
      dispatch(answerQuestion(info))
      dispatch(updateUserAnswer(info))
      return saveQuestionAnswer(info)
      .catch((e)=>{
          console.warn("Error in handleAnswerQuestion: ", e)
         //dispatch(answerQuestion(info))
          alert("there was an error saving the quenstion's answer")
      })
  }
}
