import React from "react";
import { withStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";
import Typography from "@material-ui/core/Typography";
import DialogTitle from "@material-ui/core/DialogTitle";
import { DialogActions, DialogContent, Divider } from "@material-ui/core";

export default (props) => {
  const { open, closeDialog, maxWidth, modalTitle, modalContent, okBtn, cancelBtn } = props;

  return (
    <div>
      <Dialog
        fullWidth={true}
        maxWidth={maxWidth}
        onClose={closeDialog}
        aria-labelledby="customized-dialog"
        open={open}
      >
        <DialogTitle id="customized-dialog-title">
          {modalTitle}
        </DialogTitle>
        <DialogContent >
          <Typography gutterBottom>{modalContent}</Typography>
        </DialogContent>
        <Divider />
        <DialogActions>
          {cancelBtn && (
            <Button onClick={closeDialog} variant="contained" color="danger" >{cancelBtn.text}</Button>
          )}
          <Button
            autoFocus
            onClick={closeDialog}
            variant="contained"
            color="primary"
          >
            {okBtn.text}
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
};
