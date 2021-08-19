import { CssBaseline } from "@material-ui/core";
import { AddCircle } from "@material-ui/icons";
import { makeStyles } from "@material-ui/core/styles";
import React, { useState } from "react";
import { CustomIcon, CustomModal, Text } from "../../components";
import { Colors, Metrics } from "../../constants";

export default (props) => {
    let { navigation} = props;
  const [modalOpen, setModalOpen] = useState(false);
  const classes = useStyles();

  const closeModal = () => {
    setModalOpen(false);
  };

  const openModal = () => {
    setModalOpen(true);
  };
  return (
    <div>
      <CustomIcon
        icon={AddCircle}
        onClick={openModal}
        xl
        style={styles.plusIcon}
        color={Colors.primary}
      />
      <CustomModal
        open={modalOpen}
        modalTitle="Create Post"
        closeModal={closeModal}
      />
      <div>
        <Text component="h1" text="Home" variant="h1" />
      </div>
    </div>
  );
};

const styles = {
  plusIcon: {
    position: "absolute",
    top: Metrics.xxl + Metrics.sm,
    right: Metrics.lg,
  },
};

const useStyles = makeStyles((theme) => ({
  root: {
    flex: 1,
  },
}));
