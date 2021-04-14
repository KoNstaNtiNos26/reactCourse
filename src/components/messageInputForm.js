import React, {useState,useCallback} from "react";
import Fab from '@material-ui/core/Fab';
import SendIcon from "@material-ui/icons/Send";
import { useParams } from "react-router-dom";
import {useDispatch} from "react-redux";
import {addMessage} from "../store/chats/actions";
import AUTHORS from "../utils/const";


const MessageForm  = () => {

    const { id } = useParams();
    const [inputText, setInputText] = useState("");
    const dispatch = useDispatch();

    const onSubmitHandler = useCallback((e) => {
        e.preventDefault();
        dispatch(addMessage(inputText, AUTHORS.ME, id));
        setInputText('');
    });

    const onChangeHandler = useCallback((e) => {
        setInputText(e.target.value);
    });

    return (
        <>
            <form onSubmit = {onSubmitHandler} className="form">
                <input type="text" value = {inputText} onChange = {onChangeHandler} className="form__input"/>
                <Fab color="primary" type="submit">
                    <SendIcon />
                </Fab>
            </form>
        </>
    );
}

export default MessageForm;