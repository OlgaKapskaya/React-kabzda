import React, {useState} from 'react';
import {action} from "@storybook/addon-actions";
import AccordionHook from "./AccordionHook";

export default {
    title: 'AccordionHook',
    component: AccordionHook
}
export const AccordionCollapsed = () => <AccordionHook title={'Accordion'}/>
