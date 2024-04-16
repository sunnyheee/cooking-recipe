import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import {Routes, Route} from "react-router-dom";
import Mainpage from "./pages/Mainpage/Mainpage.jsx";
import AppLayout from "./layout/AppLayout.jsx";
import SearchRecipe from "./pages/SearchRecipe/SearchRecipe.jsx";
import NotFoundPage from "./pages/NotFound/NotFoundPage.jsx";
import RecipeDetail from "./pages/RecipeDetail/RecipeDetail.jsx";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<AppLayout />}>
          <Route index element={<Mainpage />} />
          <Route path="recipe">
            <Route index element={<SearchRecipe />} />
            <Route path=":id" element={<RecipeDetail />} />
          </Route>
        </Route>
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </>
  );
}

export default App;
