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
  nicknameText: {
    fontSize: 80,
  },
});

const ProfileViewer = ({ user }) => {
  console.log({ user });
  const classes = useStyles();
  const bull = <span className={classes.bullet}>•</span>;
  return (
    <React.Fragment>
      <Card className={classes.root}>
        <CardContent>
          <AccountBoxIcon style={{ fontSize: 80 }} />
          <Typography color="primary" className={classes.nicknameText}>
            {user.nickname}
          </Typography>
        </CardContent>
      </Card>
    </React.Fragment>
  );
};

export default ProfileViewer;
