import React from "react";

type RatingProps = {
    value: number;
}

function Rating(props: RatingProps) {
    console.log("rating render");
    return (
        <div>
            <Star selected={ props.value >= 1}/>
            <Star selected={ props.value >= 2}/>
            <Star selected={ props.value >= 3}/>
            <Star selected={ props.value >= 4}/>
            <Star selected={ props.value >= 5}/>
        </div>
    )
}


type StarProps = {
    selected: boolean;
}

function Star(props: StarProps) {
    console.log("star render");
   if (props.selected === true){
       return (
           <span><b>Star *</b></span>
       )
   } else {
       return (
           <span>Star *</span>
       )
   }

}

export default Rating;