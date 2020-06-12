import React, { useEffect, useState } from 'react'
import { connect } from "react-redux"
import Smurf from './Smurf'
import { addSmurf, removeSmurf, getSmurfs } from '../actions/index'
import axios from 'axios'

const SmurfList = props => {
    // const [smurfs, setSmurfs] = useState(props.smurfs)
    useEffect(() => {
        //     //start of axios promise
        //     axios
        //         .get('http://localhost:3333/smurfs/')
        //         .then(res => {
        //             // console.log(res)
        //             setSmurfs(res.data)
        //         })
        //         .catch(err => {
        //             debugger
        //         })
        props.getSmurfs()

    }, [])
    return (
        <>
            {props.error ? props.error : props.smurfs.map((smurf) => {
                return <Smurf removeSmurf={props.removeSmurf} key={smurf.id} smurf={smurf} />
            })}
        </>

    )
}
const mapStateToProps = state => {
    return {
        smurfs: state.smurfs,
        error: state.error
    }
}

export default connect(mapStateToProps, { addSmurf, removeSmurf, getSmurfs })(SmurfList)