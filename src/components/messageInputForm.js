import React, {useState} from "react";
import Button from '@material-ui/core/Button';
import Fab from '@material-ui/core/Fab';
import SendIcon from "@material-ui/icons/Send";
import { useParams } from "react-router-dom";


const MessageForm  = ({onSubmitHandler, onChangeHandler, inputText, setNumber}) => {

    const { id } = useParams();
    setNumber(id);

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