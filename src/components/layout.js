import React from "react";
import Grid from '@material-ui/core/Grid';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import CurrentChat from './currentChat';
import "../scss/main.scss";

const chats = ["Chat 1", "Chat 2", "Chat 3"];


const Layout = () => {
    return (
        <>  
            <Grid container spacing={3}>
                <Grid item xs={12}>
                    <AppBar position="static">
                        <Toolbar>
                            <h1 className="logo">Best Messanger</h1>
                        </Toolbar>
                    </AppBar>
                </Grid>
                <Grid item container spacing={3} xs={12}>
                    <Grid item xs={9}>
                        <CurrentChat />
                    </Grid>
                    <Grid item xs={3}>
                        <List component="nav" aria-label="secondary mailbox folders">
                            {chats.map((chatName,i) => (
                                <ListItem  key={i}>
                                        <ListItemText primary={chatName} />
                                </ListItem>))}
                        </List>
                    </Grid>
                </Grid>
            </Grid>
            

        </>
    );
}

export default Layout;