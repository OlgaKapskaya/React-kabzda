import React, {useEffect, useState} from "react";

export default {
    title: 'useEffect demo'
}

export const SetTimeoutExample = () => {
    const [counter, setCounter] = useState(0)

    useEffect(() => {
        setTimeout(() => {
            document.title = counter.toString()
        }, 1000)
    }, [counter])

    return (
        <div>
            <button onClick={() => setCounter(counter + 1)}> +</button>
            <div>{counter}</div>
        </div>
    )
}

export const SetIntervalExample = () => {
    const [counter, setCounter] = useState(0)

    useEffect(() => {
        const intID = setInterval(() => {
            setCounter((s ) => s + 1)
        }, 1000)
    }, [])

    return (
        <div>
            <div>{counter}</div>
        </div>
    )
}
export const TimeExample = () => {
    const [hours, setHours] = useState(new Date().getHours())
    const [min, setMin] = useState(new Date().getMinutes())
    const [sec, setSec] = useState(new Date().getSeconds())
    useEffect(() => {
        setInterval(() => {
           setHours(new Date().getHours())
           setMin(new Date().getMinutes())
           setSec(new Date().getSeconds())
        }, 1000)
    }, [])

    return (
        <div>
            <div>{hours + ':' + min + ':' + sec}</div>
        </div>
    )
}
export const ResetEffectExample = () => {
    const [counter, setCounter] = useState(0)
    console.log('set timeout example')
    useEffect(() => {
        console.log('Effect occurred '+ counter)
        return () => {
            console.log('Reset effect ' + counter)
        }
    }, [counter])

    return (
        <div>
            Hello, counter: {counter}
            <button onClick={() => setCounter(counter + 1)}> + </button>
        </div>
    )
}
export const KeyTrackerExample = () => {
    const [text, setText] = useState('')
    console.log('set timeout example')

    const handler = (e: KeyboardEvent) => {
        console.log(e.key)
        setText(() => text + e.key)
    }

    useEffect(() => {
        window.addEventListener('keypress', handler)
        return () => {
            window.removeEventListener('keypress', handler)
        }
    }, [text])

    return (
        <div>
            Typed text: {text}
        </div>
    )
}