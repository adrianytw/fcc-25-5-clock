import { useSelector } from "react-redux"

const Timer = () => {

    const { time } = useSelector( state => state.timer)

    return (
        <div id="timer-wrap">
            <h3 id='timer-label'>time left</h3>
            <h3 id='time-left'>{time}</h3>
            <button id='start_stop'>start stop</button>
            <button id='reset'>reset</button>
        </div>
    )
}

export default Timer