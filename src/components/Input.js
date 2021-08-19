import { InputAdornment, InputBase } from "@material-ui/core";
import { CameraEnhance } from "@material-ui/icons";
import React from "react";
import CustomIcon from "./CustomIcon";
import Spacer from "./Spacer";

export default (props) => {
    let {children} = props;
  return (
    <div>
      <InputBase
        style={{ fontSize: 30 }}
        placeholder="Naked input"
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
