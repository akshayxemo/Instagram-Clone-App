import { Routes, Route, BrowserRouter } from "react-router-dom";
import Home from "../pages/home";
import Profile from "../pages/profile";

const Router = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          //Home Page Routes......
          <Route path="/" element={<Home />} />
          <Route path="/profile/:id" element={<Profile />} />
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default Router;
