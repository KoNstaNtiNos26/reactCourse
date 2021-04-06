import React from "react";
import AUTHORS from '../utils/const'; 

const Message = ({message, author}) => {

    let messageMod = author === AUTHORS.ME ? "messageBox__message_me" : "messageBox__message_against";

    return (<div className={`messageBox__message ${messageMod}`}>
                <div className="messageBox__text">{message}</div>
                <div className="messageBox__author">{author}</div>
            </div>);
}
export default Message;