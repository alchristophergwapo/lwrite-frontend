import { Container, CssBaseline, Grid, Paper } from "@material-ui/core";
import { AddCircle } from "@material-ui/icons";
import { makeStyles } from "@material-ui/core/styles";
import React, { useState } from "react";
import {
  CreatePostCard,
  CustomIcon,
  CustomModal,
  PostCard,
  Spacer,
  Text,
} from "../../components";
import { Colors, Metrics } from "../../constants";

export default (props) => {
  let { navigation } = props;
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
      >
        <CreatePostCard />
      </CustomModal>
      <Spacer xxl />
      <div>
        <Grid container spacing={3}>
          <Grid item xs={3}></Grid>
          <Grid item xs={5}>
            <Container>
              {[1, 2, 3, 4, 5].map((index) => {
                return <PostCard key={index} />;
              })}
            </Container>
          </Grid>
          <Grid item xs={4}></Grid>
        </Grid>
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
