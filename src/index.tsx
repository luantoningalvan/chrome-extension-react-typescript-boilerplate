import React from "react";
import ReactDOM from "react-dom";

import App from "./App";
class Main extends React.Component {
  render() {
    return <App />;
  }
}

const app = document.createElement("div");
app.id = "my-extension-root";

document.body.appendChild(app);
ReactDOM.render(<Main />, app);
