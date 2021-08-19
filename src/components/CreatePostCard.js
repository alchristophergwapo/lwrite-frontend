import { CardContent, CardHeader, IconButton } from "@material-ui/core";
import { CameraEnhance, PhotoRounded } from "@material-ui/icons";
import React from "react";
import CustomAvatar from "./CustomAvatar";
import CustomIcon from "./CustomIcon";
import Input from "./Input";
import Text from "./Text";

export default (props) => {
  return (
    <div>
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
        <Input
          children={
            <div>
              <IconButton>
                <CustomIcon md icon={PhotoRounded} />
              </IconButton>
              <IconButton>
                  <CustomIcon md icon={CameraEnhance} />
              </IconButton>
            </div>
          }
        />
      </CardContent>
    </div>
  );
};
