import { Typography } from "@material-ui/core";
import React from "react";

export default (props) => {
    let {className, component, text, variant, center} = props;
  return (
    <div style={center ? styles.center : styles.left}>
      <Typography variant={variant? variant : 'h6'} component={component} className={className}>{text}</Typography>
    </div>
  );
};

const styles = {
    center: {
        textAlign: 'center',
    }, 
    left: {
      textAlign: 'left',
    }
}
