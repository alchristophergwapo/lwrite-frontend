import { Avatar } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import React from "react";
import CustomIcon from "./CustomIcon";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    "& > *": {
      margin: theme.spacing(1),
    },
  },
  small: {
    width: theme.spacing(5),
    height: theme.spacing(5),
  },
  medium: {
    width: theme.spacing(10),
    height: theme.spacing(10),
  },
  large: {
    width: theme.spacing(15),
    height: theme.spacing(15),
  },
  xlarge: {
    width: theme.spacing(20),
    height: theme.spacing(20),
  },
  jumbo: {
    width: theme.spacing(30),
    height: theme.spacing(30),
  }
}));

export default (props) => {
  let { imageSource, isIcon, icon: Icon, iconSize, md, lg, xl, jumbo } = props;
  const styles = useStyles();
  console.log(props);
  let avatarStyle = md
    ? styles.medium
    : lg
    ? styles.large
    : xl
    ? styles.xlarge
    : jumbo ? styles.jumbo
    : styles.small;

  return (
    <div className={styles.root}>
      {!isIcon ? (
        <Avatar src={imageSource} className={avatarStyle} />
      ) : (
        <Avatar className={avatarStyle}>
          <CustomIcon icon={Icon} size={iconSize} />
        </Avatar>
      )}
    </div>
  );
};
