import React, {useState} from 'react';
import './App.css';
import {AccordionWithDataProps} from "./components/Accordion/AccordionWithDataProps";
import {Select, OptionsSelectType} from "./components/Select/Select";
import {CustomSelect} from "./components/Select/CustomSelect";
import AccordionHook from "./components/Accordion/AccordionHook";
import {Clock} from "./components/Clock/Clock";

export type ItemType = {
    title: string
    value: any
}

function App() {
    let items:ItemType[] = [{title: 'Hello', value: "number 1"}, {title: 'Bye', value: "number 2"}]
    let optionsToSelect:OptionsSelectType[] = [{id: '1', value: '1'}, {id: '2', value: '2'}, {id: '3', value: '3'}]
    const [value, setValue] = useState("1")
    const [collapsed, setCollapsed] = useState<boolean>(false)
    const changeCollapsed = () => {
        setCollapsed(!collapsed)
    }
    const onChangeSelectItem = (value: string) => {
      setValue(value)
    }

    return (
        <div className={'App'}>
            {/*<AccordionWithDataProps*/}
            {/*    titleValue={'Items list'}*/}
            {/*    collapsed={collapsed}*/}
            {/*    onChange={changeCollapsed}*/}
            {/*    items={items}/>*/}
            {/*<AccordionHook title={"123"}/>*/}
            <CustomSelect value={value}
                          options={optionsToSelect}
                          onChange={onChangeSelectItem}/>
            <Clock type='analog'/>
        </div>

    );
}


export default App;
