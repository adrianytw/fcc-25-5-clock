import "./Timer.css"

import { useSelector, useDispatch } from "react-redux"
import { tickDown, toggleTick,  resetTimer, resetConfig, chgMode } from "../features/timerSlice"
import { useEffect } from "react"

const Timer = () => {

    const { sec, tick, breakMode } = useSelector( state => state.timer )
    const dispatch = useDispatch()

    useEffect( () => {
        const sound = document.getElementById("beep")
        const interval = setInterval( () => {
            if (tick === false) {
                return
            }
            if (sec === 0) {
                dispatch(chgMode())
                return
            }
            if (sec === 1) {
                sound.play()
            }
            dispatch( tickDown() )
        }, 1000);
        return () => clearInterval(interval)
    }, [tick, sec, dispatch])
    
    return (
        <div id="timer-wrap">
            <h2 id="timer-label">{breakMode ? "bweak time" : "work time"}</h2>
            <h3 id="time-left">{`${Math.floor(sec/60).toString().padStart(2,0)}:${(sec%60).toString().padStart(2,0)}`}</h3>
            <button id="start_stop"
                onClick={() => dispatch(toggleTick())}
                >
                start stop
            </button>
            <button id="reset"
                onClick={ () => {
                    dispatch(resetConfig())
                    dispatch(resetTimer())
                    const sound = document.getElementById("beep")
                    sound.pause();
                    sound.currentTime = 0;
                }}
                >
                reset
            </button>
            <audio
                id="beep"
                src="https://raw.githubusercontent.com/freeCodeCamp/cdn/master/build/testable-projects-fcc/audio/BeepSound.wav"
            />
        </div>
    )
}

export default Timer