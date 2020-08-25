import React from "react";
import AccountBoxIcon from "@material-ui/icons/AccountBox";
import styles from "../../styles/Profile.module.css";
import {
  Paper,
  Typography,
  makeStyles,
  CardActions,
  CardContent,
  Card,
} from "@material-ui/core";

const useStyles = makeStyles({
  root: {
    display: "block",
    textAlign: "inherit",
    marginTop: "3rem",
    marginLeft: "3rem",
    marginRight: "3rem",
    minWidth: 275,
  },
  bullet: {
    display: "inline-block",
    margin: "0 2px",
    transform: "scale(0.8)",
  },
  title: {
    fontSize: 14,
  },
  pos: {
    marginBottom: 12,
  },
  text: {
    fontSize: 25,
    display: "block",
  },
  textForm: {
    display: "block",
  },
  SoonDollTitle: {
      fontSize: '80px'
  }
});

const ProfileViewer = ({ user }) => {
  console.log({ user });
  const classes = useStyles();
  const bull = <span className={classes.bullet}>•</span>;
  return (
    <React.Fragment>
      <Card className={classes.root}>
        <CardContent>
          <Typography noWrap className = {classes.SoonDool}>SoonDoll Profile</Typography>
          <AccountBoxIcon style={{ fontSize: 60 }} />{" "}
          <Typography
            color="textPrimary"
            className={classes.nicknameText}
            noWrap
          >
            Username
          </Typography>
          {user.username}
          <Typography
            color="textPrimary"
            className={classes.nicknameText}
            noWrap
          >
            UserNickname
          </Typography>
          {user.nickname}
        </CardContent>
      </Card>
    </React.Fragment>
  );
};

export default ProfileViewer;
