import axios from 'axios'

export const SET_ERROR = "SET_ERROR"
export const ADD_SMURF = "ADD_SMURF"
export const REMOVE_SMURF = "REMOVE_SMURF"
export const GET_SMURF = "GET_SMURF"

//removed data from args and .post call ,data -- edit: reeeeeeeeeeeeedid to fix my catch :D
export const addSmurf = (data) => dispatch => {
    // dispatch({ type: FETCH_DATA})
    axios
        .post('http://localhost:3333/smurfs', data)
        .then(res => {
            console.log(res)
            dispatch({ type: ADD_SMURF, payload: res.data })

        })
        .catch(err => {
            // debugger
            console.error('error fetching data from API. error:', err)
            dispatch({ type: SET_ERROR, payload: 'error adding smurf: cannot use same name, also all fields must be filled out. Please refresh and try again' })
        })

}
export const getSmurfs = (data) => dispatch => {
    axios
        .get('http://localhost:3333/smurfs/')
        .then(res => {
            // console.log(res)
            dispatch({ type: GET_SMURF, payload: res.data })

        })
        .catch(err => {
            debugger
        })

}
//remove smurff
export const removeSmurf = (smurfID) => dispatch => {
    axios.delete(`http://localhost:3333/smurfs/${smurfID}`)
        .then(res => {
            console.log(res)
            dispatch({ type: REMOVE_SMURF, payload: res.data })

        })
        .catch(err => {
            debugger
        })
}