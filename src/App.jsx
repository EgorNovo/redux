import { Header } from "./components/header/header";
import RecipeItem from "./components/recipe-item/recipe-item";
import User from "./components/user/user";
import { useGetRecipesQuery } from "./store/api/api";

function App() {
const { isLoading, data } = useGetRecipesQuery();

  return (
    <div>
      <User />
      <div></div>
      <Header />

      {isLoading ? (
        <div>...Loading</div>
      ) : (
        data.map((item, i) => <RecipeItem key={i} recipe={item} />)
      )}
    </div>
  );
}

export default App;
