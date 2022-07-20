import "./Timer.css"

import { useSelector, useDispatch } from "react-redux"
import { tickDown, toggleTick,  resetTimer, setTIme, resetConfig, chgMode } from "../features/timerSlice"
import { useEffect } from "react"

const Timer = () => {

    const { sec, tick, breakMode, breakLength, sessionLength } = useSelector( state => state.timer )
    const dispatch = useDispatch()

    useEffect( () => {
        const interval = setInterval( () => {
            if (tick === false) {
                return
            }
            if (sec === 0) {
                dispatch(chgMode())
                if (breakMode) {
                    dispatch( setTIme(breakLength*60) )
                }
                if (!breakMode) {
                    dispatch( setTIme(sessionLength*60) )
                }
                let playPromise = sound.play()
                if (playPromise !== undefined) {
                    playPromise
                    .then( _ => {})
                    .catch( e => console.log(e))
                }
            }
            dispatch( tickDown() )
        }, 1000);
        return () => clearInterval(interval)
    }, [tick, sec])
    
    const sound = document.getElementById("beep")
    
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