import {GET_USERS, UPDATE_USER} from '../actions/users'

export default function users (state={}, action ){
    switch(action.type){
        case GET_USERS :
            return {
                ...state,
                ...action.users
            }

        case UPDATE_USER :
            const {user} = action
            return{
                ...state, 
                [action.authedUser]: {
                ...state[action.authedUser],
                     answers: {
                    ...state[action.authedUser].answers,
                        [action.qid]: action.answer
                    }
              
                }
            }
        default :
            return state
    }
}


