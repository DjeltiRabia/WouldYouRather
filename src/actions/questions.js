import { saveQuestion } from "../utils/api";
export const GET_QUESTIONS = 'GET_QUESTIONS'
export const ADD_QUESTION = 'ADD_QUESTION'
export const   ANSWER_QUESTION = 'ANSWER_QUESTION'

export function getQuestions(questions){
    return {
        type:   GET_QUESTIONS,
        questions,
    }
}

export function addQuestion (question) {
    return{
        type: ADD_QUESTION,
        question
    }
    
}
export function answerQuestion({qid, authedUser, answer}){
    return{
        type: ANSWER_QUESTION,
        qid,
        authedUser,
        answer
    }
}

export function handleNewQuestion(optionOne, optionTwo){
    return async(dispatch, getState)=> {
        const {authedUser} = getState()
        return saveQuestion({
                optionOneText:optionOne,
                optionTwoText:optionTwo,
                author: authedUser,
            })
        .then((question) => (console.log(question),dispatch(addQuestion(question))
        ))
        
    }
}

