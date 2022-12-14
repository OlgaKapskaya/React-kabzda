import React, {ChangeEvent} from "react";

export type OptionsSelectType = {
    id: string
    value: string
}
type SelectProps = {
    value: string
    options: OptionsSelectType[]
    onChange: (value: string) => void
}
export const Select = (props: SelectProps) => {
    const onChangeHandler = (event: ChangeEvent<HTMLSelectElement>) => {
        props.onChange(event.currentTarget.value)
    }

    return (
        <select onChange={onChangeHandler}>
            {props.options.map( elem => {
                return (
                    <option key={elem.id}> {elem.value} </option>
                )
            })}
        </select>
    )
}