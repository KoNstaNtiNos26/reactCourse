import React, { useCallback, useState, useEffect} from "react";
import { useParams, Switch, Route, Link} from "react-router-dom";
import { addMessage } from "../store/chats/actions";

import Grid from '@material-ui/core/Grid';
import ChatList from "./chatList";
import Profile from "./profile";
import MessagesBox from "./messagesBox";
import MessageForm from "./messageInputForm";


const CurrentChat = () => {

    return (
        
        <Grid item container spacing={3} xs={12}>
            <Grid item xs={9}>
                <Switch>
                    <Route  path="/chat/:id">
                        <MessagesBox />
                        <MessageForm />
                    </Route>
                    <Route exact path="/profile"><Profile /></Route>
                </Switch>
            </Grid>
            <ChatList />
        </Grid>
    );
}




export default CurrentChat;