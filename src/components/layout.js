import React, { useState } from "react";
import Grid from '@material-ui/core/Grid';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';

import CurrentChat from './currentChat';
import {BrowserRouter as Router, Link} from "react-router-dom";
import "../scss/main.scss";




const Layout = () => {

    return (
        <Router>  
            <Grid container spacing={3}>
                <Grid item xs={12}>
                    <AppBar position="static">
                        <Toolbar>
                            <h1 className="logo">Best Messanger</h1>
                            <Link to="/profile" className="header__link">Your profile</Link>
                        </Toolbar>
                    </AppBar>
                </Grid>
                <CurrentChat />
            </Grid>
        </Router>
    );
}

export default Layout;//