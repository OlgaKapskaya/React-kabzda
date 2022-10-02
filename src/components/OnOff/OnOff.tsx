import React, {useState} from "react";
import s from './OnOff.module.css'

type OnOffProps = {
    on?: boolean;

}


export const OnOff = (props: OnOffProps) => {


    const [on, setOn] = useState(true);

        const onclickOn = () => {
            setOn(true);
        }
    const onclickOff = () => {
        setOn(false);
    }

        const onStyle = {
            width: '50px',
            height: '30px',
            backgroundColor: on ? 'green' : 'white',
            border: '1px solid black'
        };

        const offStyle = {
            width: '50px',
            height: '30px',
            backgroundColor: !on ? 'red' : 'white',
            border: '1px solid black'
        };

        const indicatorStyle = {
            width: '20px',
            height: '20px',
            borderRadius: '10px',
            border: '1px solid black',
            marginLeft: '10px',
            marginTop: '5px',
            backgroundColor: on ? 'green' : 'red',
        };

        return (
        <div className={s.container}>
        <div style={onStyle} onClick={onclickOn}>ON</div>
        <div style={offStyle} onClick={onclickOff}>OFF</div>
        <div style={indicatorStyle}> </div>
        </div>
        )
        }