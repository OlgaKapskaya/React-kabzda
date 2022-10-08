import React, {useState} from "react";


function NewRating() {
    console.log("rating render");

    const [value, setValue] = useState< 0 | 1 | 2 | 3 | 4 | 5 >(0);

    return (
        <div className={'rating'}>
                <Star selected={value >= 1} selectStar={setValue} value={1}/>
                <Star selected={value >= 2} selectStar={setValue} value={2}/>
                <Star selected={value >= 3} selectStar={setValue} value={3}/>
                <Star selected={value >= 4} selectStar={setValue} value={4}/>
                <Star selected={value >= 5} selectStar={setValue} value={5}/>
        </div>
    )
}


type StarProps = {
    selected: boolean
    value: 0 | 1 | 2 | 3 | 4 | 5
    selectStar: (value: 0 | 1 | 2 | 3 | 4 | 5) => void
}

function Star(props: StarProps) {
    const onClickHandler = () => {
            props.selectStar(props.value)

    }
    return <span onClick={onClickHandler}> {props.selected ? <b>Star</b> : 'Star'}</span>
}

export default NewRating;