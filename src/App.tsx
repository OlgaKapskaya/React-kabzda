import React from 'react';
import './App.css';
import Accordion from "./components/Accordion";
import Rating from "./components/Rating";
import {OnOff} from "./components/OnOff/OnOff";




function App() {
    console.log("App rendering");
    return (
        <div>
            {/*<PageTitle title={"This is APP component"}/>
            Article 1
            <Rating value={4} />
            Article 2
            <Rating value={3} />
            Article 3
            <Rating value={2} />
            <Accordion title={"Menu"} collapsed={true}/>*/}

            <OnOff/>

        </div>
    );
}

type PageTitlePropsType = {
    title: string;
}
function PageTitle(props: PageTitlePropsType) {
    return (
        <h1> {props.title} </h1>
    )
}




export default App;
