import React, { useCallback, useState, useEffect} from "react";
import MessagesBox from "./messagesBox";
import MessageForm from "./messageInputForm";
import AUTHORS from "../utils/const";

const CurrentChat = () => {
    const [texts, setTexts] = useState([]);
    const [inputText, setInputText] = useState("");

    useEffect(() => {
        if(texts.length > 0 && texts[texts.length-1].author === AUTHORS.ME) {
            setTimeout(() => {
                setTexts((messages) => [...messages, {newtext : 'отстань от меня, я робот', author : 'bot'}]);
            },1000);
        }
    }, [texts]);

    const onSubmitHandler = useCallback((e) => {
        e.preventDefault();
        setTexts((messages) => [...messages, {newtext : inputText, author : 'me'}]);
        setInputText('');
    });

    const onChangeHandler = useCallback((e) => {
        setInputText(e.target.value);
    });

    return (<>
                <MessagesBox texts = {texts} />
                <MessageForm onSubmitHandler = {onSubmitHandler} 
                onChangeHandler = {onChangeHandler} 
                inputText = {inputText} />
            </>
        );
}

export default CurrentChat;