import React, {useState} from "react";

type RatingProps = {

}

function NewRating(props: RatingProps) {
    console.log("rating render");

    const [value, setValue] = useState(0);

    return (
        <div className={'rating'}>
            <span onClick={ () => setValue(1) }>
                <Star selected={value >= 1}/>
            </span>
            <span onClick={ () => setValue(2) }>
                <Star selected={value >= 2}/>
            </span>
            <span  onClick={ () => setValue(3) }>
                <Star selected={value >= 3}/>
            </span>
            <span onClick={ () => setValue(4) }>
                <Star selected={value >= 4}/>
            </span>
            <span  onClick={ () => setValue(5) }>
                <Star selected={value >= 5}/>
            </span>


        </div>
    )
}


type StarProps = {
    selected: boolean;

}

function Star(props: StarProps) {
    return props.selected ?
        <span className={'ratingSelected'}><b>Star *</b></span> :
        <span>Star *</span>
}

export default NewRating;