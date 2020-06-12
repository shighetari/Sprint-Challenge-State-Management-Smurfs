import {useState} from 'react'

export const useInput = (initialValue) => {
    const [state, setState] = useState(initialValue)
    const handleChanges = updatedValue => {
        setState(updatedValue)
    }
    return [state,setState,handleChanges]

}

export default useInput;