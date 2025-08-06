import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Body from "./components/Body";
import Login from "./components/pages/LogIn";
import Feed from "./components/Feed";
import Profile from "./components/pages/Profile";
import Connections from "./components/Connections";

function App() {
  return (
    <>
      <BrowserRouter basename="/">
        <Routes>
          <Route path="/" element={<Body />}>
            <Route path="/feed" element={<Feed />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="/main" element="main page" />
            <Route path="/login" element={<Login />} />
            <Route path="/connections" element={<Connections  />} />
            <Route path="/requests" element={<Login />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
