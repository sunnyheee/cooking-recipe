import "./RecipeSort.style.css";

import { Form } from "react-bootstrap";

const RecipeSort = ({ setSortBy }) => {
  const handleSortChange = (e) => {
    setSortBy(e.target.value);
  };
  return (
    <Form>
      <Form.Group controlId="sortRecipes">
        <Form.Select aria-label="Sort recipes" onChange={handleSortChange}>
          <option value="relevance">Select an option</option>
          <option value="label">Label (A-Z)</option>
          <option value="calories">Calories (Low to High)</option>
          <option value="time">Cooking Time (Short to Long)</option>
        </Form.Select>
      </Form.Group>
    </Form>
  );
};

export default RecipeSort;
