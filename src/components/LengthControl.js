import { useSelector } from "react-redux"

const LengthControl = () => {
    const { breakLength, sessionLength } = useSelector( state => state.config )

    return (
        <div className="controls-group">
            <div className="control">
                <h2 id='break-label'>Break Length</h2>
                <button id='break-decrement'>B-</button>
                <button id='break-increment'>B+</button>
                <h3 id='break-length'>{breakLength}</h3>
            </div>
            <div className="control">
                <h2 id='session-label'>Session Length</h2>
                <button id='session-decrement'>S+</button>
                <button id='session-increment'>S-</button>
                <h3 id='session-length'>{sessionLength}</h3>
            </div>
        </div>
    )
}

export default LengthControl