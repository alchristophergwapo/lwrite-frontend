import { Button, Link, ListItem, ListItemIcon, ListItemText } from "@material-ui/core";
import React from "react";
import { Link as RouterLink } from "react-router-dom";

export default (props) => {
  const { isButton, icon, isText, text, route } = props;

  const renderLink = React.useMemo(() =>
    React.forwardRef((itemProps, ref) => 
      <RouterLink to={route} ref={ref} {...itemProps} />
    ), [route]
  );
  return isButton ? (
    <Button color="primary" component={renderLink} to={route}>
    {text}
  </Button>
  ) : isText ? (
    <Link component={renderLink}>{text}</Link>
  ) : (
    <ListItem button component={renderLink}>
      {icon ? <ListItemIcon>{icon}</ListItemIcon> : null}
      <ListItemText primary={text} />
    </ListItem>
  );
};
