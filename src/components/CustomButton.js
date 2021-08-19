import { Button } from "@material-ui/core";
import React from "react";

export default (props) => {
  let { text, variant, size, style, startIcon: StartIcon } = props;
  return (
      <Button
        size={size}
        variant={variant}
        style={style}
        startIcon={StartIcon ? <StartIcon /> : null}
      >
        {text}
      </Button>
  );
};
