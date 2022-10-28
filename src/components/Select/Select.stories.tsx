import React from 'react';

import {Select} from "./Select";
import {action} from "@storybook/addon-actions";

export default {
    title: 'Select',
    component: Select
}

export const BaseSelect = () => <Select value={"empty select component"}
                                               options={[
                                                   {id: "1", value: "1"},
                                                   {id: "2", value: "2"},
                                                   {id: "3", value: "3"}]}
                                               onChange={action('value changed')}/>