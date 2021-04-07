import { react } from "react";
import ReactDOM from "react-dom";
import { Button, makeStyles } from "@material-ui/core";

const useStyles = makeStyles({
  buttonStyle: {
    color: "yellow",
    backgroundColor: "blue",
    fontWeight: "550"
  }
});

const App = () => {
  const classes = useStyles();
  return (
    <>
      <Button className={classes.buttonStyle} variant="contained">
        Small Button
      </Button>
    </>
  );
};

ReactDOM.render(<App />, document.getElementById("root"));
