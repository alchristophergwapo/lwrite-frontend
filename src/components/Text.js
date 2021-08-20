import { Typography } from "@material-ui/core";
import React from "react";

export default (props) => {
    let {style, component, text, variant, center} = props;
  return (
    <div style={center ? styles.center : styles.left}>
      <Typography variant={variant? variant : 'h6'} component={component} style={style}>{text}</Typography>
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
