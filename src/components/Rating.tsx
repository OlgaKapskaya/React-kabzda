import React from "react";

function Rating() {
    console.log("rating render");
    return (
        <div>
            <Star selected={true}/>
            <Star selected={true}/>
            <Star selected={false}/>
            <Star selected={false}/>
            <Star selected={false}/>
        </div>
    )
}




function Star(props: any) {
    console.log("star render");
   if (props.selected == true){
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