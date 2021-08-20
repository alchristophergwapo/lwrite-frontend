import { InputAdornment, InputBase } from "@material-ui/core";
import { CameraEnhance } from "@material-ui/icons";
import React from "react";
import CustomIcon from "./CustomIcon";
import Spacer from "./Spacer";

export default (props) => {
    let {children, style} = props;
  return (
    <div>
      <InputBase
        style={style}
        placeholder="Start typing what is in your mind Christopher"
        inputProps={{ "aria-label": "naked" }}
        fullWidth
        multiline
        maxRows={6}
      />
      <Spacer />
      {children}
    </div>
  );
};
