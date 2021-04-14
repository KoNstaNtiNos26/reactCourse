import React, {useState, useCallback} from 'react';
import { Link } from 'react-router-dom';
import { addChat } from "../store/chats/actions";
import { useSelector, useDispatch } from "react-redux";
import Grid from '@material-ui/core/Grid';
import AddIcon from '@material-ui/icons/Add';
import Fab from '@material-ui/core/Fab';


const ChatList = () => {

    const [inputText, setInputText] = useState("");

    const chats = useSelector((state) => state.chats);


    const dispatch = useDispatch();

    const onChangeHandler = useCallback((e) => {
        setInputText(e.target.value);
    });

    const onSubmitHandler = useCallback((e) => {
        e.preventDefault();
        dispatch(addChat(inputText));
        setInputText('');
    });

    return (<Grid item xs={3}>
                <nav>
                    <ul>
                        {Object.keys(chats).map(chatId => (<li key={chatId}><Link to={`/chat/${chatId}`}>{chats[chatId].chatName}</Link></li>))}
                    </ul>
                </nav>
                <form onSubmit = {onSubmitHandler} className="form">
                    <input type="text" value = {inputText} onChange = {onChangeHandler} className="form__input"/>
                    <Fab color="primary" type="submit">
                        <AddIcon />
                    </Fab>
                </form>
            </Grid>);
}

export default ChatList;//