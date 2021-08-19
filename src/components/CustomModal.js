import { Container, Dialog, makeStyles, Paper } from "@material-ui/core";
import { Close } from "@material-ui/icons";
import React from "react";
import { Text } from ".";
import CustomIcon from "./CustomIcon";

export default (props) => {
  let { closeModal, modalTitle, open } = props;
  const styles = useStyles();

  return (
    <div>
      <Dialog fullWidth={true} maxWidth="md" open={open} onClose={closeModal}>
        <div className={styles.modal}>
          <div className={styles.flexRow}>
            <div style={{width: '90%'}}>
                <Text text={modalTitle} variant="h4" component="h3" center />
            </div>
            <CustomIcon icon={Close} onClick={closeModal} />
          </div>
        </div>
      </Dialog>
    </div>
  );
};

const useStyles = makeStyles((theme) => ({
  modal: {
    padding: theme.spacing(2),
  },
  flexRow: {
    display: "flex",
    flexDirection: "row",
    justifyContent: 'space-between',
  },
}));
