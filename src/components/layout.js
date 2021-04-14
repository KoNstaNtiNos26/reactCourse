import React, { useCallback, useState } from "react";
import Grid from '@material-ui/core/Grid';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Modal from '@material-ui/core/Modal';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';
import CurrentChat from './currentChat';
import {BrowserRouter as Router, Link} from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";

import {changeName} from "../store/profile/actions";

import "../scss/main.scss";

const useStyles = makeStyles((theme) => ({
    modal: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
    },
    form: {
      backgroundColor: theme.palette.background.paper,
      boxShadow: theme.shadows[5],
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
    },
    form__item: {
        margin: '5px'
    }
  }));


const Layout = () => {

    const [isOpen, setOpen] = useState(true);
    const [inputText, setInputText] = useState("");
    const classes = useStyles();
    const profileName = useSelector(state => state.profile.name);
    console.log(profileName);
    const dispatch = useDispatch();

    const onSubmitHandler = useCallback(() => {
        dispatch(changeName(inputText));
        setOpen(false)
    });
    const onChangeHandler = useCallback((e) => {
        setInputText(e.target.value);
    });

    return (
        <Router>  
            <Grid container spacing={3}>
                <Grid item xs={12}>
                    <AppBar position="static">
                        <Toolbar>
                            <h1 className="logo">Best Messanger</h1>
                            <Link to="/profile" className="header__link">{profileName}</Link>
                        </Toolbar>
                    </AppBar>
                </Grid>
                <CurrentChat />
                <Modal open={isOpen} className={classes.modal}>
                    <form onSubmit = {onSubmitHandler} className={classes.form} >
                        <label htmlFor="name" className={classes.form__item}>Type your name:</label>
                        <input id="name" type="text" value = {inputText} onChange = {onChangeHandler} className={classes.form__item}/>
                        <Button variant="contained" color="primary" type="submit" className={classes.form__item}>Come in</Button>
                    </form>
                </Modal>
            </Grid>
        </Router> 
    );
}

export default Layout;//