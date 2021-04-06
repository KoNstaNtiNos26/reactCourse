import React from "react";
import Message from "./message";
import { useParams } from "react-router-dom";
// import '../scss/main.scss';

const MessagesBox = ({chats}) => {

    const { id } = useParams();
    
    return (<div className="messageBox messageBox_maxHeight">{chats[id].chatMessages.map((text, i) => <Message key={i} message = {text.newtext} author = {text.author}/>)}
            </div>);
}

export default MessagesBox;