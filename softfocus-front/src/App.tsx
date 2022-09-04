import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home/index";

import "./App.scss";
import Plans from "./pages/plans/index";
import CommunicationAndLosses from "./components/CommunicationAndLosses";

export default function App() {
  return (
    <div className="Landing-page">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/plans" element={<Plans />} />
        <Route
          path="/plans/communication-and-losses"
          element={<CommunicationAndLosses />}
        />
      </Routes>
    </div>
  );
}
