import React, { useCallback, useState, useEffect} from "react";
import { useParams, Switch, Route, Link} from "react-router-dom";
import Grid from '@material-ui/core/Grid';
import ChatList from "./chatList";
import Profile from "./profile";
import MessagesBox from "./messagesBox";
import MessageForm from "./messageInputForm";
import AUTHORS from "../utils/const";

const CurrentChat = () => {

    const [chatsInfo, setChatsInfo] = useState(
        {
            1: {
                    chatName: "first Chat",
                    messagesBot: ["I am bot", "I understand nothing", "buy"],
                    chatMessages: []
                },
            2: {
                    chatName: "second Chat",
                    messagesBot: ["Are you serious?", "show must go on!", "I know..."],
                    chatMessages: []
                },
            3: {
                    chatName: "third Chat",
                    messagesBot: ["I don't want to talk with you", "good night", "Hello"],
                    chatMessages: []
                }
        }
    );

    const [chatNumber, setChatNumber] = useState(1);
    const [inputText, setInputText] = useState("");

    useEffect(() => {
        if(chatsInfo[chatNumber]["chatMessages"].length > 0 && chatsInfo[chatNumber]["chatMessages"][chatsInfo[chatNumber]["chatMessages"].length-1].author === AUTHORS.ME) {
            console.log("hhiihihihih");
            setTimeout(() => {
                setChatsInfo(
                    {
                        ...chatsInfo,
                        [chatNumber]: {
                            ...chatsInfo[chatNumber],
                            ["chatMessages"]: [...chatsInfo[chatNumber]["chatMessages"], {newtext : chatsInfo[chatNumber]["messagesBot"][Math.floor(Math.random() * 3)], author : AUTHORS.BOT}]
                        }
                    });
            },1000);
        }
    }, [chatsInfo]);


    const onSubmitHandler = useCallback((e) => {
        e.preventDefault();
        setChatsInfo(
            {
                ...chatsInfo,
                [chatNumber]: {
                    ...chatsInfo[chatNumber],
                    ["chatMessages"]: [...chatsInfo[chatNumber]["chatMessages"], {newtext : inputText, author : AUTHORS.ME}]
                }
            });
        setInputText('');
    });

    const onChangeHandler = useCallback((e) => {
        setInputText(e.target.value);
    });

    const handleNumber = useCallback((number) => {
        setChatNumber(number);
    })

    const objectMap = useCallback((obj) => {
        const array = new Array();
        for (const [key, value] of Object.entries(obj)) {
            array.push({chatId: key, chatName: value.chatName});
        }
        return array;
    });

    return (
        
        <Grid item container spacing={3} xs={12}>
            <Grid item xs={9}>
                <Switch>
                    <Route  path="/chat/:id">
                        <MessagesBox chats = {chatsInfo} />
                        <MessageForm onSubmitHandler = {onSubmitHandler} 
                        onChangeHandler = {onChangeHandler} 
                        setNumber = {handleNumber}
                        inputText = {inputText} />
                    </Route>
                    <Route exact path="/profile"><Profile /></Route>
                </Switch>
            </Grid>
            <Grid item xs={3}>
                <ChatList chats = {objectMap(chatsInfo)}/>
            </Grid>
        </Grid>
    );
}




export default CurrentChat;