import React from "react";
import Message from "./message";
// import '../scss/main.scss';

const MessagesBox = ({texts}) => {
    
    return (<div className="messageBox messageBox_maxHeight">{texts.map((text, i) => <Message key={i} message = {text.newtext} author = {text.author}/>)}
            </div>);
}

export default MessagesBox;