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
  PhoneRounded,
  PersonPinCircleRounded,
  AssignmentInd,
  Mail,
} from "@material-ui/icons";
import NavigationAction from "../../navigation/NavigationAction";
import { createUser } from "../../utils/user";
import { CustomAvatar, CustomDialog, Spacer } from "../../components";
import { Colors, Metrics } from "../../constants";

export default function (props) {
  let { navigation } = props;
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const [firstName, setFirstName] = useState("");
  const [middleName, setMiddleName] = useState("");
  const [lastName, setLastName] = useState("");
  const [address, setAddress] = useState("");
  const [countryCode, setCountryCode] = useState("");
  const [mobileNumber, setMobileNumber] = useState("");
  const [confirmPasswords, setConfirmPasswords] = useState("");
  const [email, setEmail] = useState("");
  const [modalTitle, setModalTitle] = useState("");
  const [modalContent, setModalContent] = useState("");
  const [modalOpen, setModalOpen] = useState(false);

  const onSubmit = async () => {
    try {
      let data = {
        firstname: firstName,
        middlename: middleName,
        lastname: lastName,
        address: address,
        country_code: countryCode,
        mobile_number: mobileNumber,
        username: userName,
        password: password,
        email: email,
        confirm_passwords: confirmPasswords,
      };
      await createUser(data);
      navigation.push("/home");
    } catch (error) {
      console.log("error ", error.response);
      setModalTitle("Oops!");
      setModalContent(
        error.response ? error.response.data.error : error.message
      );
      openDialog();
    }
  };

  const openDialog = () => {
    setModalOpen(true);
  };
  const closeDialog = () => {
    setModalOpen(false);
  };

  return (
    <Container maxWidth="sm">
      <CustomDialog
        open={modalOpen}
        closeDialog={closeDialog}
        maxWidth="xs"
        modalTitle={modalTitle}
        modalContent={modalContent}
        okBtn={{ text: "Ok" }}
      />
      <Paper elevation={3}>
        <div style={styles.paper}>
          <CustomAvatar isIcon={true} icon={AccountCircle} lg iconSize={90} iconColor={Colors.primary} />
          <Spacer />
          <Typography component="h1" variant="h5">
            Register
          </Typography>
          <Spacer sm />
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <TextField
                variant="outlined"
                required
                fullWidth
                id="firstName"
                label="Firstname"
                name="firstName"
                autoComplete="firstName"
                onChange={(e) => setFirstName(e.target.value)}
                InputProps={{
                  endAdornment: (
                    <InputAdornment position="start">
                      <AssignmentInd color="primary" />
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
                id="middleName"
                label="Middlename"
                name="middleName"
                autoComplete="middleName"
                onChange={(e) => setMiddleName(e.target.value)}
                InputProps={{
                  endAdornment: (
                    <InputAdornment position="start">
                      <AssignmentInd color="primary" />
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
                id="lastName"
                label="Lastname"
                name="lastName"
                autoComplete="lastName"
                onChange={(e) => setLastName(e.target.value)}
                InputProps={{
                  endAdornment: (
                    <InputAdornment position="start">
                      <AssignmentInd color="primary" />
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
                id="address"
                label="Address"
                name="address"
                autoComplete="address"
                onChange={(e) => setAddress(e.target.value)}
                InputProps={{
                  endAdornment: (
                    <InputAdornment position="start">
                      <PersonPinCircleRounded color="primary" />
                    </InputAdornment>
                  ),
                }}
              />
            </Grid>
            <Grid item xs={4}>
              <TextField
                variant="outlined"
                required
                // fullWidth
                id="countryCode"
                label="Country Code"
                name="countryCode"
                autoComplete="countryCode"
                onChange={(e) => setCountryCode(e.target.value)}
              />
            </Grid>
            <Grid item xs={8}>
              <TextField
                variant="outlined"
                required
                fullWidth
                id="mobileNumber"
                label="Mobile No."
                name="mobileNumber"
                autoComplete="mobileNumber"
                onChange={(e) => setMobileNumber(e.target.value)}
                InputProps={{
                  endAdornment: (
                    <InputAdornment position="start">
                      <PhoneRounded color="primary" />
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
                id="email"
                label="Email"
                name="email"
                autoComplete="email"
                onChange={(e) => setEmail(e.target.value)}
                InputProps={{
                  endAdornment: (
                    <InputAdornment position="start">
                      <Mail color="primary" />
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
            <Grid item xs={12}>
              <TextField
                variant="outlined"
                required
                fullWidth
                name="confirmPassword"
                label="Confirm Password"
                type="password"
                id="confirmPassword"
                autoComplete="current-password"
                onChange={(e) => setConfirmPasswords(e.target.value)}
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
          <Button
            variant="contained"
            color="primary"
            style={styles.button}
            onClick={() => onSubmit()}
          >
            Register
            <DoneIcon style={{ marginLeft: "10%", position: "relative" }} />
          </Button>

          <div style={{ marginTop: "1vh" }}>
            Already have an account?{" "}
            <NavigationAction route="/login" text="Login" isText={true} />
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
    marginTop: "3vh",
  },
};
