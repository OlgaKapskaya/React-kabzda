import React, {useState} from 'react';

import {CustomSelect} from "./CustomSelect";
import {action} from "@storybook/addon-actions";

export default {
    title: 'CustomSelect',
    component: CustomSelect
}

export const BaseSelect = () => <CustomSelect value={"empty select component"}
                                              options={[
                                                  {id: "1", value: "1"},
                                                  {id: "2", value: "2"},
                                                  {id: "3", value: "3"}]}
                                              onChange={action('value changed')}/>
export const ActiveSelect = () => {
    const [value, setValue] = useState('')

    return (
        <>
            <CustomSelect value={value}
                          options={[
                              {id: "1", value: "1"},
                              {id: "2", value: "2"},
                              {id: "3", value: "3"}]}
                          onChange={setValue}/>

        </>
    )
}