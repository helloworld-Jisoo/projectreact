import react from "react";
import style from './recipe.module.css'

const Recipe = ({title, calories, image, ingredients,link}) => {
  return(
    <div className={style.recipe}>
      <h1>{title}</h1>
      <img src={image} alt=" " />
      <ol>
        {ingredients.map(ingredients=>(
          <li>{ingredients.text}</li>
        ))}
      </ol>
      <p>Calories: {calories}</p>
    </div>
  );
};

export default Recipe;