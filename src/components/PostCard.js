import {
  Card,
  CardActions,
  CardContent,
  CardHeader,
  CardMedia,
  IconButton,
} from "@material-ui/core";
import {
  CommentRounded,
  FavoriteBorderRounded,
  ShareRounded,
} from "@material-ui/icons";
import { makeStyles } from "@material-ui/core/styles";
import React from "react";
import CustomAvatar from "./CustomAvatar";
import CustomIcon from "./CustomIcon";
import Text from "./Text";
import { Metrics } from "../constants";
import { red } from '@material-ui/core/colors';

export default (props) => {
  const styles = useStyles();
  return (
    <Card className={styles.root}>
      <CardHeader
        avatar={
          <CustomAvatar
            imageSource={
              "https://images.unsplash.com/photo-1510771463146-e89e6e86560e?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MzZ8fHByb2ZpbGUlMjBwaWN0dXJlfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
            }
            md
          />
        }
        title={<Text text={"Christopher Alonzo"} />}
        subheader={<Text text={"August 20, 2021"} variant="subtitle" />}
      />
      <CardContent>
        <Text text={"This is a description. Test description"} />
      </CardContent>
      <CardMedia
        style={{ height: 500 }}
        image={
          "https://images.unsplash.com/photo-1444703686981-a3abbc4d4fe3?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8cHJvZmlsZSUyMHBpY3R1cmV8ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
        }
      />
      <CardActions>
        <IconButton>
          <CustomIcon md icon={FavoriteBorderRounded} />
        </IconButton>
        <IconButton>
          <CustomIcon md icon={CommentRounded} />
        </IconButton>
        <IconButton>
          <CustomIcon md icon={ShareRounded} />
        </IconButton>
      </CardActions>
    </Card>
  );
};

const useStyles = makeStyles((theme) => ({
  root: {
    marginBottom: Metrics.md,
  },
  media: {
    height: 0,
    paddingTop: "56.25%", // 16:9
  },
  expand: {
    transform: "rotate(0deg)",
    marginLeft: "auto",
    transition: theme.transitions.create("transform", {
      duration: theme.transitions.duration.shortest,
    }),
  },
  expandOpen: {
    transform: "rotate(180deg)",
  },
  avatar: {
    backgroundColor: red[500],
  },
}));
