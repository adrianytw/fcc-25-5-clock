import "./LengthControl.css"

import { useSelector } from "react-redux"

const LengthControl = () => {
    const { breakLength, sessionLength } = useSelector( state => state.config )

    return (
        <div className="controls-group">
            <div className="control">
                <h2 id='break-label'>break length</h2>
                <h3 id='break-length'>{breakLength}</h3>
                <button id='break-decrement'>B-</button>
                <button id='break-increment'>B+</button>
            </div>
            <div className="control">
                <h2 id='session-label'>session length</h2>
                <h3 id='session-length'>{sessionLength}</h3>
                <button id='session-decrement'>S+</button>
                <button id='session-increment'>S-</button>
            </div>
        </div>
    )
}

export default LengthControl