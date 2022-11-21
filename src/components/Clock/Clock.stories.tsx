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
export const AhalogClock = () => {
    return <Clock type='analog'/>
}