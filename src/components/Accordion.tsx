import React from "react";

type AccordionProps = {
    title: string;
}
type AccordionTitleProps = {
    title: string;
}
function Accordion(props: AccordionProps) {
    console.log("accordion render");
    return (
        <div>
            <AccordionTitle title={props.title}/>
            <AccordionBody />
        </div>
    )
}
function AccordionTitle(props: AccordionTitleProps) {
    console.log("AccordionTitle render");
    return <h3>{props.title}</h3>
}

function AccordionBody() {
    console.log("AccordionBody render");
    return (
        <ul>
            <li>1</li>
            <li>2</li>
            <li>3</li>
            <li>4</li>
        </ul>);
}

export default Accordion;