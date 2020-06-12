import React from 'react'


const Smurf = (props) => {
    return (
        <div>
            <h1>Name: {props.smurf.name} </h1>
            <div>age: {props.smurf.age}</div>
            <div> Height: {props.smurf.height} CM</div>
            <div>ID: {props.smurf.id}</div>
            <button onClick={() => props.removeSmurf(props.smurf.id)}>remove smurff</button>
        </div>
    )
}

export default Smurf