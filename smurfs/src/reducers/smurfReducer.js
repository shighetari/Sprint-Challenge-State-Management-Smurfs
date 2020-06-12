import { ADD_SMURF, REMOVE_SMURF, SET_ERROR, GET_SMURF } from '../actions'


//init state
const initialState = {
    smurfs: [],
    error: ''
}

//reducer
export const smurfReducer = (state = initialState, action) => {
    switch (action.type) {

        case ADD_SMURF:
            return {
                ...state,
                smurfs: action.payload
            }
        case REMOVE_SMURF:
            return {
                ...state,
                smurfs: action.payload


            }
        case SET_ERROR:
            return {
                ...state,

                error: action.payload
            }
        case GET_SMURF:
            return {
                ...state,
                smurfs: action.payload

            }

        default:
            return state


    }

}

export default smurfReducer