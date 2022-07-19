import "./LengthControl.css"

import { useSelector, useDispatch } from "react-redux"
import { incBreak, decBreak, incSession, decSession } from "../features/configSlice"
import { setTIme } from "../features/timerSlice"

const LengthControl = () => {
    const { breakLength, sessionLength } = useSelector( state => state.config )
    const { breakMode } = useSelector( state => state.timer )
    const dispatch = useDispatch()

    const timeUpdate = () => {
        if (breakMode) {
            dispatch( setTIme(breakLength*60) )
        } else {
            dispatch( setTIme(sessionLength*60) )
        }
    }

    return (
        <div className="controls-group">
            <div className="control">
                <h2 id='break-label'>break length</h2>
                <h3 id='break-length'>{breakLength}</h3>
                <button 
                    id='break-decrement'
                    onClick={ () => {
                        dispatch(decBreak())
                        timeUpdate()
                    }}>
                    B-
                </button>
                <button 
                    id='break-increment'
                    onClick={ () => {
                        dispatch(incBreak())
                        timeUpdate()
                    }}>
                    B+
                </button>
            </div>
            <div className="control">
                <h2 id='session-label'>session length</h2>
                <h3 id='session-length'>{sessionLength}</h3>
                <button 
                    id='session-decrement'
                    onClick={ () => {
                        dispatch(decSession())
                        timeUpdate()
                    }}>
                    S-
                </button>
                <button 
                    id='session-increment'
                    onClick={ () => {
                        dispatch(incSession())
                        timeUpdate()
                    }}>
                    S+
                </button>
            </div>
        </div>
    )
}

export default LengthControl