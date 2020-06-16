export const GET_USERS ='GET_USERS'
export const   UPDATE_USER ='UPDATE_USER'

export function getUsers (users){
    return {
        type: GET_USERS,
        users,

    }
}
export function updateUserAnswer ({qid, authedUser, answer}) {
    return{
        type: UPDATE_USER,
        qid,
        authedUser,
        answer
    }
   
}