import React, {useState} from 'react';
import {action} from "@storybook/addon-actions";

import {OnOff} from "./OnOff";

export default {
    title: 'OnOff',
    component: OnOff
}

export const OnStatus = () => <OnOff on={true} onClick={action('click on or off')}/>
export const OffStatus = () => <OnOff on={false} onClick={action('click on or off')}/>

export const ChangeStatus = () => {
    const [on, setOn] = useState(false);
    return (
        <OnOff on={on} onClick={setOn}/>
    )
}