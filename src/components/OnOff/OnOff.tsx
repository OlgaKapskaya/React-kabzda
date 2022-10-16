import React, {useState} from "react";
import s from './OnOff.module.css'

type OnOffProps = {
    on?: boolean;
    onClick: (on: boolean) => void
}


export const OnOff = (props: OnOffProps) => {

    const onclickOn = () => {
        props.onClick(true);
    }
    const onclickOff = () => {
        props.onClick(false);
    }
    const onStyle = {
        width: '50px',
        height: '30px',
        backgroundColor: props.on ? 'green' : 'white',
        border: '1px solid black'
    };
    const offStyle = {
        width: '50px',
        height: '30px',
        backgroundColor: !props.on ? 'red' : 'white',
        border: '1px solid black'
    };
    const indicatorStyle = {
        width: '20px',
        height: '20px',
        borderRadius: '10px',
        border: '1px solid black',
        marginLeft: '10px',
        marginTop: '5px',
        backgroundColor: props.on ? 'green' : 'red',
    };

    return (
        <div className={s.container}>
            <div style={onStyle} onClick={onclickOn}>ON</div>
            <div style={offStyle} onClick={onclickOff}>OFF</div>
            <div style={indicatorStyle}></div>
        </div>
    )
}