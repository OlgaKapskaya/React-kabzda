import React, {useState} from 'react';
import {action} from "@storybook/addon-actions";
import Accordion from "./Accordion";

export default {
    title: 'Accordion',
    component: Accordion
}
export const AccordionCollapsed = () => <Accordion title={'Accordion'} collapsed={true}/>
export const AccordionUncollapsed = () => <Accordion title={'Accordion'} collapsed={false}/>
