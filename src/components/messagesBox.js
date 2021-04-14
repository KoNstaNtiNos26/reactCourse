import React, {useEffect} from "react";
import Message from "./message";
import { useParams } from "react-router-dom";
import {useSelector, useDispatch} from "react-redux";
import AUTHORS from "../utils/const";
import {addMessage} from "../store/chats/actions";
// import '../scss/main.scss';

const MessagesBox = () => {

    const dispatch = useDispatch();
    const { id } = useParams();
    const botMessages = useSelector((state) => state.chats[id].messagesBot);
    const chatMessages = useSelector((state) => state.chats[id].chatMessages);

    useEffect(() => {
        if(chatMessages.length > 0 && chatMessages[chatMessages.length - 1].author === AUTHORS.ME) {
            setTimeout(() => {
                dispatch(addMessage(botMessages[Math.floor(Math.random() * 3)], AUTHORS.BOT, id));
            },1000);
        }
    },[chatMessages]);
    
    return (<div className="messageBox messageBox_maxHeight">{chatMessages.map((message, i) => <Message key={i} message = {message.text} author = {message.author}/>)}
            </div>);
}

export default MessagesBox;