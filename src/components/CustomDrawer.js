import React from "react";
import PropTypes from "prop-types";
import CssBaseline from "@material-ui/core/CssBaseline";
import Divider from "@material-ui/core/Divider";
import Drawer from "@material-ui/core/Drawer";
import Hidden from "@material-ui/core/Hidden";
import List from "@material-ui/core/List";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import {
  AccountCircle,
  AddCircle,
  ChevronLeft,
  ChevronRight,
  Home,
} from "@material-ui/icons";
import NavigationAction from "../navigation/NavigationAction";
import CustomAppBar from "./CustomAppBar";
import CustomAvatar from "./CustomAvatar";
import { IconButton } from "@material-ui/core";
import clsx from "clsx";

const drawerWidth = 300;

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
  },
  appBar: {
    transition: theme.transitions.create(["margin", "width"], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
  },
  appBarShift: {
    width: `calc(100% - ${drawerWidth}px)`,
    marginLeft: drawerWidth,
    transition: theme.transitions.create(["margin", "width"], {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  hide: {
    display: "none",
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
  },
  drawerPaper: {
    width: drawerWidth,
  },
  drawerHeader: {
    display: "flex",
    alignItems: "center",
    padding: theme.spacing(0, 1),
    // necessary for content to be below app bar
    ...theme.mixins.toolbar,
    justifyContent: "flex-end",
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
    transition: theme.transitions.create("margin", {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    marginLeft: -drawerWidth,
  },
  contentShift: {
    transition: theme.transitions.create("margin", {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
    marginLeft: 0,
  },
}));

export default (props) => {
  const { children, window } = props;
  const classes = useStyles();
  const theme = useTheme();
  const [open, setOpen] = React.useState(true);
  const drawerContents = [
    { text: "Home", route: "/home", icon: Home },
    { text: "Create Post", route: "/post/create", icon: AddCircle },
  ];

  const handleDrawerToggle = () => {
    setOpen(!open);
  };

  const drawer = (
    <div>
      <div className={classes.drawerHeader}>
        <IconButton onClick={handleDrawerToggle}>
          {theme.direction === "rtl" ? <ChevronLeft /> : <ChevronRight />}
        </IconButton>
      </div>
    <CustomAvatar isIcon lg icon={AccountCircle} />
      <Divider />
      <List>
        {drawerContents.map(({ text, route, icon: Icon }, index) => (
          <NavigationAction
            key={index}
            text={text}
            route={route}
            icon={<Icon />}
          />
        ))}
      </List>
    </div>
  );

  const container =
    window !== undefined ? () => window().document.body : undefined;

  return (
    <div className={classes.root}>
      <CssBaseline />
      <CustomAppBar
        position="fixed"
        appBarStyle={clsx(classes.appBar, {[classes.appBarShift] : open})}
        menuButtonStyle={clsx(classes.menuButton, open && classes.hide)}
        title="LWrite"
        onClick={handleDrawerToggle}
      />
      {/* The implementation can be swapped with js to avoid SEO duplication of links. */}
      <Hidden smDown implementation="css">
        <Drawer
          container={container}
          variant="persistent"
          anchor={theme.direction === "rtl" ? "right" : "left"}
          open={open}
          onClose={handleDrawerToggle}
          className={classes.drawer}
          classes={{
            paper: classes.drawerPaper,
          }}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
        >
          {drawer}
        </Drawer>
      </Hidden>
      <main className={clsx(classes.content, {
          [classes.contentShift]: open,
        })}>
        <div className={classes.drawerHeader} />
        {children}
      </main>
    </div>
  );
}
