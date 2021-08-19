import React, { useState } from "react";
import {
  Avatar,
  Button,
  CssBaseline,
  TextField,
  Grid,
  Typography,
  Paper,
  InputAdornment,
  Container,
} from "@material-ui/core";
import {
  AccountCircle,
  Lock as LockIcon,
  Done as DoneIcon,
} from "@material-ui/icons";
import NavigationAction from "../../navigation/NavigationAction";
import { loginUser } from "../../utils/user";
import { CustomAvatar, CustomDialog, Spacer } from "../../components";
import { Metrics } from "../../constants";

export default function (props) {
  let { navigation } = props;
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const [dialogOpen, setDialogOpen] = useState(false);
  const [modalTitle, setModalTitle] = useState("");
  const [modalContent, setModalContent] = useState("");

  const submit = async () => {
    try {
      const details = {
        username: userName,
        password: password,
      };
      let res = await loginUser(details);
      console.log(res.data);
      sessionStorage.setItem("session", res.data);
      navigation.push("/home");
    } catch (error) {
      setModalTitle("Oops!");
      error.response
        ? setModalContent(error.response.data.error)
        : setModalContent(error.message);
      openDialog();
    }
  };

  const openDialog = () => {
    setDialogOpen(true);
  };
  const closeDialog = () => {
    setDialogOpen(false);
  };

  return (
    <Container maxWidth="sm">
      <CustomDialog
        open={dialogOpen}
        closeDialog={closeDialog}
        maxWidth="xs"
        modalTitle={modalTitle}
        modalContent={modalContent}
        okBtn={{ text: "Ok" }}
      />
      <Paper elevation={3}>
        <div style={styles.paper}>
          <CustomAvatar isIcon={true} icon={AccountCircle} lg  iconSize={50}/>
          <Spacer sm />
          <Typography component="h1" variant="h4">
            Login
          </Typography>
          <Spacer rg />
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <TextField
                variant="outlined"
                required
                fullWidth
                id="userName"
                label="Username"
                name="userName"
                autoComplete="userName"
                onChange={(e) => setUserName(e.target.value)}
                InputProps={{
                  endAdornment: (
                    <InputAdornment position="start">
                      <AccountCircle color="primary" />
                    </InputAdornment>
                  ),
                }}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                variant="outlined"
                required
                fullWidth
                name="password"
                label="Password"
                type="password"
                id="password"
                autoComplete="current-password"
                onChange={(e) => setPassword(e.target.value)}
                InputProps={{
                  endAdornment: (
                    <InputAdornment position="start">
                      <LockIcon color="primary" />
                    </InputAdornment>
                  ),
                }}
              />
            </Grid>
          </Grid>
          <Spacer />
          <Button
            type="submit"
            variant="contained"
            color="primary"
            style={styles.button}
            onClick={() => {
              submit();
              //   this.handleOnClick()
              console.log("login button clicked");
            }}
          >
            Login
            <DoneIcon style={{ marginLeft: "10%", position: "relative" }} />
          </Button>
          <Spacer />
          <div style={{ marginTop: "1vh" }}>
            Don't have an account?{" "}
            <NavigationAction
              route="/register"
              text="Create account"
              isText={true}
            />
          </div>
        </div>
      </Paper>
    </Container>
  );
}

const styles = {
  paper: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    margin: "3vh",
    marginTop: Metrics.xxl,
    paddingTop: Metrics.md,
    paddingBottom: Metrics.md,
  },
  avatar: {
    backgroundColor: "#2196F3",
  },
  form: {
    width: "100%", // Fix IE 11 issue.
    justify: "center",
    alignItems: "center",
  },
  button: {
    width: "100%",
    marginTop: "3vh",
  },
};
