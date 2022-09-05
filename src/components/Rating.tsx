import React from "react";

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




function Star() {
    console.log("star render");
    return (
        <div>Star *</div>
    )
}

export default Rating;