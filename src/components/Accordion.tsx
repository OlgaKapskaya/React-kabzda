import React from "react";

function Accordion() {
    console.log("accordion render");
    return (
        <div>
            <AccordionTitle/>
            <AccordionBody />
        </div>
    )
}
function AccordionTitle() {
    console.log("AccordionTitle render");
    return <h3>Menu</h3>
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