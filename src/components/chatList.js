import React from 'react';
import { Link } from 'react-router-dom';
import Grid from '@material-ui/core/Grid';

const ChatList = ({chats}) => {

    return (<Grid item xs={3}>
                <nav>
                    <ul>
                        {chats.map(chat => (<li><Link to={`/chat/${chat.chatId}`} key={chat.chatId}>{chat.chatName}</Link></li>))}
                    </ul>
                </nav>
            </Grid>);
}

export default ChatList;//