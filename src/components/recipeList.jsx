import { useState } from "react";

export default function RecipeList({ recipes }) {
  // 각 레시피에 대한 상태를 저장하는 배열
  const [openRecipeIndex, setOpenRecipeIndex] = useState(null);

  const handleToggle = (index) => {
    // 이미 열려있는 레시피를 클릭하면 닫기, 아니면 해당 레시피 열기
    if (openRecipeIndex === index) {
      setOpenRecipeIndex(null);
    } else {
      setOpenRecipeIndex(index);
    }
  };

  return (
    <div>
      {recipes.map((recipe, index) => (
        <div key={index} className="recipeList">
          <h2 onClick={() => handleToggle(index)} style={{ cursor: "pointer" }}>
            {recipe.name}
          </h2>

          {/* openRecipeIndex가 현재 index와 일치하면 내용 표시 */}
          {openRecipeIndex === index && (
            <div>
              <h3>재료</h3>
              <div className="ingredient-container">
                {recipe.ingredients.map((ingredient, idx) => (
                  <span key={idx} className="ingredient">
                    {ingredient.name} {ingredient.amount}
                  </span>
                ))}
              </div>

              <h3>만드는 방법</h3>
              <ol>
                {recipe.steps.map((step, idx) => (
                  <li key={idx}>{step}</li>
                ))}
              </ol>
            </div>
          )}
        </div>
      ))}
    </div>
  );
}
