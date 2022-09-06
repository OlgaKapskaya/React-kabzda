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
            <PageTitle title={"This is APP component"}/>

            <Header/>
            <Technologies/>
            Article 1
            <Rating value={4} />
            Article 2
            <Rating value={3} />
            Article 3
            <Rating value={2} />
            <Accordion title={"Menu"}/>
        </div>
    );
}


function PageTitle(props: any) {
    return (
        <h1> {props.title} </h1>
    )
}




export default App;
