import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Body from "./components/Body";

function App() {
  return (
    <>
      <BrowserRouter basename="/">
        <Routes>
          <Route path="/" element={<Body />}>
            <Route path="/main" element="main page" />
            <Route path="/login" element="login page" />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
