import React from 'react';
import { useNavigate } from "react-router-dom";
import Divider from '@material-ui/core/Divider';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import Home from '@material-ui/icons/Home';
import Build from '@material-ui/icons/Build';
import useStyles from '.././Style/MenuUseStyles';

export default function SidebarMenuItems() {
    const classes = useStyles();
    const history = useNavigate();

    return (
        <div>
        <Divider />
            <ListItem button onClick={() => history('/')}>
            <ListItemIcon>
                <Home />
            </ListItemIcon>
            <ListItemText disableTypography className={classes.SideBarFont} primary="Home" />
            </ListItem >
                <div>
                <ListItem button onClick={() => history('newasset')}>
                <ListItemIcon>
                    <Build />
                </ListItemIcon>
                <ListItemText disableTypography className={classes.SideBarFont} primary="New asset" />
                </ListItem >
                </div>
        </div>
    );
}