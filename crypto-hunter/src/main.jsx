import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
// import { BrowserRouter } from "react-router-dom";
import CryptoContext from "./Context/CryptoContext.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <CryptoContext>
    <App />
  </CryptoContext>
);
