import {useEffect, useState} from "react";
import s from './Clock.module.css'
import {AnalogClock} from "./AnalogClock";

const formatTime = (number: number) => {
    return number < 10 ? `0${number}` : number
}

type ClockPropsType = {
    type: 'digital' | 'analog'
}
export const Clock = (props: ClockPropsType) => {
    const [date, setDate] = useState(new Date())
    useEffect(() => {
        let timerID = setInterval(() => {
            setDate(new Date())
        }, 1000)
        return () => {
            clearInterval(timerID)
        }
    }, [])

    const hours = formatTime(date.getHours())
    const minutes = formatTime(date.getMinutes())
    const seconds = formatTime(date.getSeconds())


    return (
        <>
            {props.type === 'digital'
                ? <div>
                    <span> {hours} </span>:<span> {minutes} </span>:<span> {seconds} </span>
                </div>
                : <AnalogClock date={date}/>}


        </>

    )
}