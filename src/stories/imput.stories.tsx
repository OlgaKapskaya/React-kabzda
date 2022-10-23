import React, {ChangeEvent, useRef, useState} from "react";
import {action} from "@storybook/addon-actions";

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
export const ControlledInput = () => {
    const [value, setValue] = useState('')
    return (
        <>
            <input value={value} onChange={(e) => setValue(e.currentTarget.value)}/>
            <span> {value} </span>
        </>
    )
}
export const ControlledCheckBox = () => {
    const [check, setCheck] = useState<boolean>(false)
    const onChangeInputHandler = (event: ChangeEvent<HTMLInputElement>) => {
        setCheck(event.currentTarget.checked)
    }
    return (
        <>
            <input type={'checkbox'} checked={check} onChange={onChangeInputHandler}/>
            <span> {String(check)} </span>
        </>
    )
}
export const ControlledSelect = () => {
    const [value, setValue] = useState<string | undefined>('')
    const onChangeHandler = (event: ChangeEvent<HTMLSelectElement>) => {
        setValue(event.currentTarget.value)
    }
    return (
        <>
            <select value={value} onChange={onChangeHandler}>
                <option value={'1'}>Minsk</option>
                <option value={'2'}>Kiev</option>
                <option value={'3'}>Moscow</option>
            </select>

        </>
    )
}