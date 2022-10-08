import React, {useState} from "react";

type RatingProps = {
    value: number;
}

function Rating(props: RatingProps) {
    const [value, setValue] = useState(props.value)
    console.log(value)
    return (
        <div>
            <Star selected={ value >= 1} value={value} setValue={setValue}/>
            <Star selected={ value >= 2} value={value} setValue={setValue}/>
            <Star selected={ value >= 3} value={value} setValue={setValue}/>
            <Star selected={ value >= 4} value={value} setValue={setValue}/>
            <Star selected={ value >= 5} value={value} setValue={setValue}/>
        </div>
    )
}


type StarProps = {
    selected: boolean;
    value: number
    setValue: (value: number) => void
}

function Star(props: StarProps) {
    const onClickSpanHandler = () => {
        if (props.value < 5) {
            props.setValue(props.value+1)
        }
    }

  return <span onClick={onClickSpanHandler}> {props.selected ? <b>star</b> : "star"} </span>
}

export default Rating;