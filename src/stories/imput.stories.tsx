import React, {useRef, useState} from "react";

export default {
    title: 'input'
}
export const UncontrolledInput = () => <input/>
export const UncontrolledInputTrackValue = () => {
    const [value, setValue] = useState("")
    return <><input onChange={(e) => setValue(e.currentTarget.value)}/> - {value} </>
}
export const ControlledInputWithFixedValue = () => <input value={'hello'}/>
export const UncontrolledInputButtonPress = () => {
    const [value, setValue] = useState("")
    const inputRef = useRef<HTMLInputElement>(null)
    const onClickHandler = () => {
       const el = inputRef.current as HTMLInputElement
        setValue(el.value)
    }


    return (
        <>
            <input ref={inputRef}/>
            <button onClick={onClickHandler}> SAVE</button>
             - actual value: {value}
        </>
    )
}