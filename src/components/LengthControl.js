import "./LengthControl.css"

import { useSelector, useDispatch } from "react-redux"
import { incBreak, decBreak, incSession, decSession } from "../features/timerSlice"

const LengthControl = () => {
    const { breakLength, sessionLength } = useSelector( state => state.timer )
    const dispatch = useDispatch()


    return (
        <div className="controls-group">
            <div className="control">
                <h2 id="break-label">break length</h2>
                <h3 id="break-length">{breakLength}</h3>
                <button 
                    id="break-decrement"
                    onClick={ () => {
                        dispatch(decBreak())
                    }}>
                    B-
                </button>
                <button 
                    id="break-increment"
                    onClick={ () => {
                        dispatch(incBreak())
                    }}>
                    B+
                </button>
            </div>
            <div className="control">
                <h2 id="session-label">session length</h2>
                <h3 id="session-length">{sessionLength}</h3>
                <button 
                    id="session-decrement"
                    onClick={ () => {
                        dispatch(decSession())
                    }}>
                    S-
                </button>
                <button 
                    id="session-increment"
                    onClick={ () => {
                        dispatch(incSession())
                    }}>
                    S+
                </button>
            </div>
        </div>
    )
}

export default LengthControl