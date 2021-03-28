import React, { useCallback, useState, useEffect} from "react";
import Container from "./commentContainer";

const App = () => {
    const [flag, setFlag] = useState(true);
    const [texts, setTexts] = useState([]);
    const [inputText, setInputText] = useState("");

    useEffect(() => {
        setTexts((comments) => [...comments, inputText]);
    }, [flag]);

    const onClick = () => {
        setFlag(!flag);
    };

    const onChange = (e) => {
        e.preventDefault();
        setInputText(e.target.value);
    };

    return (<>
                <Container texts = {texts} />
                <input type="text" value = {inputText} onChange = {onChange}/>
                <button onClick = {onClick}>Отправить</button>
            </>
        );
}

export default App;