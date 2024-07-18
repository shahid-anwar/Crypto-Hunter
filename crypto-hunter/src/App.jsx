// import { BrowserRouter } from "react-router-dom";
import "./App.css";
import Header from "./Component/Header";
import AllRoutes from "./Routes/AllRoutes";
import { makeStyles } from "@material-ui/core/styles";
function App() {
  const useStyles = makeStyles({
    App: {
      backgroundColor: "#14161a",
      color: "white",
      minHeight: "100vh",
    },
  });
  const classes = useStyles();
  return (
    <div className={classes.App}>
      <Header />
      <AllRoutes />
    </div>
  );
}

export default App;
