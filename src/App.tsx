import React from 'react';
import './App.css';
import Technologies from "./components/Technologies";
import Header from "./components/Header";
import Accordion from "./components/Accordion";
import Rating from "./components/Rating";




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
}


function AppTitle() {
    return (
        <>This is APP component</>
    )
}




export default App;
