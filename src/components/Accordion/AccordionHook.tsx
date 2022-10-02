import React, {useState} from "react";

type AccordionProps = {
    title: string;
}


function AccordionHook(props: AccordionProps) {
    console.log("accordion render");
    const [collapsed, setCollapsed] = useState(false);

    const onClickExpand = () => {
        if (collapsed){
            setCollapsed(false);
        } else {
            setCollapsed(true);
        }

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