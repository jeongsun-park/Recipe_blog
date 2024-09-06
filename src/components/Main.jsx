import RecipeList from "./recipeList";
import { recipes } from "../recipes";

export default function Main() {
  return (
    <main>
      <section>
        <h2>Recipe</h2>
        <RecipeList recipes={recipes} />
      </section>
    </main>
  );
}
