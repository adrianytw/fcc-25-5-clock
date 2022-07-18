import './Timer.css'

import { useSelector, useDispatch } from "react-redux"
import { tickDown, toggleTick, rese, resetTimer } from '../features/timerSlice'
import { resetConfig } from '../features/configSlice'
import { useEffect } from 'react'

const Timer = () => {

    const { sec, tick } = useSelector( state => state.timer)
    const dispatch = useDispatch()

    useEffect( () => {
        const interval = setInterval( () => {
            if (tick === false) {
                return
            }
            dispatch( tickDown() )
        }, 1000);
        return () => clearInterval(interval)
    }, [tick])
    return (
        <div id="timer-wrap">
            <h2 id='timer-label'>time left</h2>
            <h3 id='time-left'>{`${Math.floor(sec/60)}:${(sec%60).toString().padStart(2,0)}`}</h3>
            <button id='start_stop'
                onClick={() => dispatch(toggleTick())}
                >
                start stop
            </button>
            <button id='reset'
                onClick={ () => {
                    dispatch(resetConfig())
                    dispatch(resetTimer())
                }}
                >
                reset
            </button>
        </div>
    )
}

export default Timer