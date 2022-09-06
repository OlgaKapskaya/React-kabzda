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
            Article 1
            <Rating value={4}/>
            Article 2
            <Rating value={3}/>
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
