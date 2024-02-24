import "./App.css";

import { servicesArray, ratingData, commentData } from "./dummyData";
import { Routes, Route } from "react-router-dom";
import CheckOut from "./pages/CheckOut";
import { Home } from "./pages/Home";

function App() {
  return (
    <Routes>
      {/* Home page */}
      <Route
        path="/"
        element={
          <Home
            servicesArray={servicesArray}
            ratingData={ratingData}
            commentData={commentData}
          />
        }
      />
      {/* checkout page */}
      <Route path="/:id" element={<CheckOut />} />
    </Routes>
  );
}

export default App;
