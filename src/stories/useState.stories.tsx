import React, {useState} from "react";

export default {
    title: 'useState demo'
}
function generationData(){
    console.log('generationData')
    return 1
}
export const Example1 = () => {
    const [counter, setCounter] = useState(generationData)
    const changer = (state: number) => {
        console.log('changer')
        return state+1
    }

    return (
        <div>
            <button onClick={ () => setCounter(changer) }> + </button>
            <div>{counter}</div>
        </div>
    )
}