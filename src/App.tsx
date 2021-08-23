import React, { useState } from "react";
import "./App.css";
import {
  MuiThemeProvider,
  createTheme,
  Box,
  Grid,
  Typography,
  Button,
} from "@material-ui/core";
import {
  makeStyles,
  Theme,
  createStyles,
  withStyles,
  useTheme,
} from "@material-ui/core/styles";
import { themeOption } from "./theme/defaults";

const MyButton = withStyles((theme: Theme) => ({
  root: {
    borderRadius: 5,
    backgroundColor: theme.palette.primary.main,
  },
  contained: {
    backgroundColor: theme.palette.secondary.main,
  },
}))(Button);

const useStyle = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      width: "100%",
      height: "5rem",
    },
  })
);

function App() {
  const classes = useStyle();
  const [state, setState] = useState(0);
  const changeNumber = () => {
    setState((pervNum) => {
      console.log(pervNum);
      return pervNum + 1;
    });
  };

  return (
    <>
      <Grid
        container
        className={classes.root}
        justifyContent="center"
        alignItems="center"
        spacing={3}
      >
        <Grid item>
          <Typography variant={"h4"} component="h3">
            Game of Thrones API
          </Typography>
        </Grid>
        <Grid item>
          <MyButton variant="contained" onClick={changeNumber}>
            Refresh
          </MyButton>
        </Grid>
        <Grid item>{state}</Grid>
      </Grid>
    </>
  );
}

export default App;
