import React, {useState} from "react";

type RatingProps = {
    value?: number;
}

function NewRating(props: RatingProps) {
    console.log("rating render");

    const [value, setValue] = useState(0);

    const [selected, setSelected] = useState(false);

    const addRating = () => {

        setValue(value + 1);
        if (selected) {
            setSelected(false);
            //setValue(value - 1)

        } else {
            setSelected(true);

        }
    }

    return (
        <div>
            <Star selected={value >= 1} addRating={addRating}/>
            <Star selected={value >= 2} addRating={addRating}/>
            <Star selected={value >= 3} addRating={addRating}/>
            <Star selected={value >= 4} addRating={addRating}/>
            <Star selected={value >= 5} addRating={addRating}/>

        </div>
    )
}


type StarProps = {
    selected: boolean;
    addRating: () => void
}

function Star(props: StarProps) {
    return props.selected ?
        <span onClick={() => props.addRating()}><b>Star *</b></span> :
        <span onClick={() => props.addRating()}>Star *</span>
}

export default NewRating;