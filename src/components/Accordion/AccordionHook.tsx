import React, {useReducer} from "react";

type AccordionProps = {
    title: string;
}
type ActionType = {
    type: string
}

function AccordionHook(props: AccordionProps) {

    const reducer = (state: boolean, action: ActionType) => {
        switch (action.type) {
            case 'COLLAPSE-ACCORDION': return !state
            default: throw new Error("Bad action type")
        }
    }

    const [collapsed, dispatch] = useReducer(reducer,false);

    const onClickExpand = () => {
        dispatch({type: 'COLLAPSE-ACCORDION'})
    }


    return (
        <div>
            <button onClick={onClickExpand}>{props.title}</button>
            {collapsed && <AccordionBody/>}
        </div>
    )
}



function AccordionBody() {
    console.log("AccordionBody render");

    return (
        <div>
            <ul>
                <li>1</li>
                <li>2</li>
                <li>3</li>
                <li>4</li>
            </ul>
        </div>
    );
}

export default AccordionHook;