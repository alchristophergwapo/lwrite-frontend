import { AppBar, IconButton, Toolbar, Typography } from '@material-ui/core';
import React from 'react'
import MenuIcon from "@material-ui/icons/Menu";

export default props => {
    let {appBarStyle, menuButtonStyle, onClick, position, title} = props;

    return(
        <AppBar position={position} className={appBarStyle}>
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={onClick}
            className={menuButtonStyle}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" noWrap>
            {title}
          </Typography>
        </Toolbar>
      </AppBar>
    )
}
