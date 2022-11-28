import React from "react";
import {Clock} from "./Clock";

export default {
    title: 'Clock demo'
}
export const DigitalClock = () => {
    return (
        <Clock type='digital'/>
    )
}
export const AnalogClock = () => {
    return <Clock type='analog'/>
}