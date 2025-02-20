/* eslint-disable react/prop-types */
import { useSelector } from "react-redux";
import styles from "./recipe-item.module.css";
import { useActions } from '../hooks/useActions'

const RecipeItem = ({ recipe }) => {
  const favorites = useSelector((state) => state.favorites);

  const { toggleFavorites } = useActions();

  //Condition exist
  const isExist = favorites.some((r) => r.id === recipe.id);

  return (
    <div className={styles.item}>
      <h3>{recipe.name}</h3>
      <button
        onClick={() => {
          toggleFavorites(recipe);
        }}
      >
        {isExist ? "Remove from favorites" : "Add to favorites"}
      </button>
    </div>
  );
};

export default RecipeItem;
