import "bootstrap/dist/css/bootstrap.min.css";

import "./App.css";
import { Route, Routes } from "react-router-dom";
import AppLayout from "./layout/AppLayout";
import NotFoundPage from "./pages/NotFound/NotFoundPage";
import SearchRecipe from "./pages/SearchRecipe/SearchRecipe";

function App() {
  return (
    <Routes>
      <Route path="/" element={<AppLayout />}>
        <Route path="/recipe">
          <Route index element={<SearchRecipe />} />
        </Route>
      </Route>
      <Route path="*" element={<NotFoundPage />}></Route>
    </Routes>
  );
}

export default App;
