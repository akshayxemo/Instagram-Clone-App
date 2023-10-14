import { Routes, Route, BrowserRouter } from "react-router-dom";
import Home from "../pages/home";

const Router = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          //Home Page Routes......
          <Route path="/" element={<Home />} />
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default Router;
