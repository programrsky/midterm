import { useState } from "react";

export default function Midterm(){
    const [headerText, setHeaderText] = useState('당신은 어떤 과일을 좋아하나요? ');

    const onClick = (fruit) => {
        setHeaderText(`당신은 어떤 과일을 좋아하나요?  ${fruit}`);
    };

    return (
        <div>
            <h1>{headerText}</h1>
            <div className="first_box">
                <button className="st" onClick = {() => onClick('사과')}>사과</button>
                <button className="st" onClick = {() => onClick('오렌지')}>오렌지</button>
                <button className="st" onClick = {() => onClick('바나나')}>바나나</button>
            </div>
        </div>
    )
}
