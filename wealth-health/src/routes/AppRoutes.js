import { BrowserRouter, Route, Routes } from "react-router-dom";
import CurrentEmployees from "../pages/CurrentEmployees/CurrentEmployees";
import Home from "../pages/Home/Home";

function AppRoutes() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/employee-list" element={<CurrentEmployees />} />
      </Routes>
    </BrowserRouter>
  );
}

export default AppRoutes;
