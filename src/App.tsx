import React from 'react';
import './App.css';
import Technologies from "./Technologies";
import Header from "./Header";


function App() {
    console.log("App rendering");
    return (
        <div>
            <AppTitle/>
            <Header/>
            <Technologies/>
            <Rating/>
            <Accordion/>
        </div>
    );

    function Rating() {
        console.log("rating render");
        return (
            <div>
                <Star/>
                <Star/>
                <Star/>
                <Star/>
                <Star/>
            </div>
        )
    }
}

function Accordion() {
    console.log("accordion render");
    return (
        <div>
            <AccordionTitle/>
            <AccordionBody />
        </div>
    )
}

function Star() {
    console.log("star render");
    return (
        <div>Star *</div>
    )
}

function AppTitle() {
    return (
        <>This is APP component</>
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
        </ul>);
}


export default App;
