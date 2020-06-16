import {GET_QUESTIONS, ADD_QUESTION, ANSWER_QUESTION} from '../actions/questions'

export default function questions (state={}, action ){
    switch(action.type){
        case GET_QUESTIONS :
            return {
                ...state,
                ...action.questions
            }
   
            case ADD_QUESTION:
                const { question } = action
                return {
                    ...state,
                    [action.question.id]: action.question
                }
            case ANSWER_QUESTION:
                
            return{
                ...state,
                     [action.qid]:{
                    ...state[action.qid],          
                    optionOne : action.answer === "optionOne"
                    ? {...state[action.qid].optionOne,
                        votes: state[action.qid].optionOne.votes.concat([action.authedUser])        
                        }
                        :state[action.qid].optionOne,

                    optionTwo : action.answer === "optionTwo"    
                    ?  {...state[action.qid].optionTwo,
                        votes: state[action.qid].optionTwo.votes.concat([action.authedUser])
                    } :state[action.qid].optionTwo
                }
            
        }
        default :
            return state
    }
}