import React from 'react'
import useInput from './useInput'
import { addSmurf } from "../actions/index"
import { connect } from 'react-redux'

const SmurfForm = (props) => {
    const [name, handleName] = useInput('')
    const [age, handleAge] = useInput('')
    const [height, handleHeight] = useInput('')
    const [iD, handleiD] = useInput('')

    const handleSubmit = e => {
        e.preventDefault()
        const data = {
            name: name,
            age: Number(age),
            height: height,
            iD: Number(iD)

        }
        console.log(data)
        props.addSmurf(data)
    }
    return (
        <>
            <form onSubmit={handleSubmit}>
                <label>Name</label>
                <br/>
                <input type='text' name="name" value={name} onChange={e => handleName(e.target.value)} />
                <br/>
                <label>Age</label>
                <br/>
                <input type='number' name="age" value={age} onChange={e => handleAge(e.target.value)} />
                <br/>
                <label>Height</label>
                <div></div>
                <input type='number' name='height' value={height} onChange={e => handleHeight(e.target.value)} />
                <div></div>
                {/* <label>ID</label>
                <div></div>
                <input type='number' name='ID' value={iD} onChange={e => handleiD(e.target.value)} /> */}
                <div></div>
                <button type='submit'>Submit</button>
            </form>
        </>


    )
}


export default connect(null, { addSmurf })(SmurfForm);