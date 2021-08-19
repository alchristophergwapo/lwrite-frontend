import {
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
} from "@material-ui/core";
import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Text from "./Text";
import { Colors } from "../constants";
import CustomAvatar from "./CustomAvatar";
import CustomButton from "./CustomButton";
import { CameraEnhance } from "@material-ui/icons";

export default (props) => {
  let { cardImage, contents, profilePicture } = props;
  const styles = useStyles();

  return (
    <div>
      <Card className={styles.root}>
        <CardActionArea>
          <div>
            {cardImage && (
              <CardMedia
                className={styles.media}
                image={cardImage.imageSource}
                title={cardImage.title}
              />
            )}
            <CustomButton
            size="large"
              variant="contained"
              text="Edit Cover Photo"
              style={{ position: "absolute", right: 20, top: 400, elevation: 5 }}
              startIcon={CameraEnhance}
            />
          </div>
          <CardContent>
            <div
              style={{
                display: "flex",
                flexDirection: "row",
                justifyContent: "center",
                marginTop: -250,
              }}
            >
              {profilePicture && (
                <CustomAvatar
                  jumbo
                  isIcon={false}
                  imageSource={profilePicture}
                />
              )}
            </div>
            {contents?.map((cont, index) => {
              return cont.text && <Text key={index} {...cont} />;
            })}
          </CardContent>
        </CardActionArea>
      </Card>
    </div>
  );
};

const useStyles = makeStyles({
  root: {
    maxWidth: "100%",
    borderRadius: 0,
    backgroundColor: Colors.customLightGray,
  },
  media: {
    height: 460,
  },
});
