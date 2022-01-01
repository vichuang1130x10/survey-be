import { Router } from "@reach/router";

import Header from "./Components/Header";
import Landing from "./Pages/landing";
import Details from "./Pages/details";
import Output from "./Pages/output";

function App() {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
      }}
    >
      <Header />
      <Router>
        <Landing path="/" />
        <Details path="/details" />
        <Output path="/output" />
      </Router>
    </div>
  );
}

export default App;
