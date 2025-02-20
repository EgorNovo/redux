import { useSelector } from 'react-redux'
import RecipeItem from "./recipe-item/recipe-item";

function App() {

  const {favorites} = useSelector(store => store)

  return (
    <div>
      <span> Count my favorites recipes: {favorites.length}</span>
      <RecipeItem
        recipe={{
          id: 1,
          name: "Лазанья",
        }}
      />
      <RecipeItem
        recipe={{
          id: 2,
          name: "Каша",
        }}
      />
      <RecipeItem
        recipe={{
          id: 3,
          name: "Суп",
        }}
      />
    </div>
  );
}

export default App;
