import { Container } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import React from "react";
import { DefaultProfileCard, Image, Text } from "../../components";
import { Colors } from "../../constants";

export default (props) => {
  const styles = useStyle();
  return (
    <div>
      <div className={styles.root}>
        <DefaultProfileCard
          cardImage={{
            imageSource:
              "https://images.unsplash.com/photo-1444703686981-a3abbc4d4fe3?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8cHJvZmlsZSUyMHBpY3R1cmV8ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
            title: "Cover Photo",
          }}
          contents={[
            { text: "Christopher Alonzo", variant: "h3", component: "h2" },
          ]}
          profilePicture={"https://images.unsplash.com/photo-1510771463146-e89e6e86560e?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MzZ8fHByb2ZpbGUlMjBwaWN0dXJlfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"}
        />
      </div>
      <div>Profile</div>
    </div>
  );
};

const useStyle = makeStyles((theme) => ({
  root: {
    backgroundColor: Colors.customLightGray,
  },
}));
