import React from "react";
import {ItemType} from "../../App";
type AccordionWithDataPropsType = {
    titleValue: string
    collapsed: boolean
    onChange: () => void
    items: ItemType[]
}
type AccordionBodyWithDataType = {
    items: ItemType[]
    onClick: (value: any) => void
}
export const AccordionWithDataProps = (props: AccordionWithDataPropsType) => {
    const onClickHandler = () => {
        props.onChange()
    }
    const onClickItem = (value: any) => {
        console.log(`click item ${value}`)
    }
    return (
        <div>
            <h4 onClick={onClickHandler}> {props.titleValue} </h4>
            {props.collapsed && <AccordionBodyWithData items={props.items} onClick={onClickItem}/>}
        </div>
    )
}

export const AccordionBodyWithData = (props: AccordionBodyWithDataType) => {
    return (
        <ul>
            {props.items.map((elem, index) => <li key={index} onClick={() => props.onClick(elem.value)}> {elem.title} </li>)}
        </ul>
    )
}