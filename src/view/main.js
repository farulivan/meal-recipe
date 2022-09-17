// import MealData from "../data/meal-data"
import randomMeal from "../data/random_meal"
import '../components/random-pick'
import '../components/recipe-list'

const main = () => {
    //styling main element
    const main = document.querySelector('main')
    main.className = 'm-6'

    const categories = document.querySelector('categories-button')
    categories.addEventListener('click', (e) => e.pointerId === -1 && console.log(e.target.id))

    const recipeListElement = document.querySelector('recipe-list')
    const renderRecipes = results => {
        recipeListElement.meal = results
    }
    
    const fallbackRecipes = message => {
    recipeListElement.renderError(message)
    }

    const randomPickElement = document.querySelector('random-pick')
    const renderOneRecipe = results => {
        randomPickElement.meal = results
    }
    
    const fallbackOneRecipe = message => {
    randomPickElement.renderError(message)
    }
    
    const pickRecipe = async () => {
        try {
            const result = await randomMeal.meals
            renderOneRecipe(result)
            renderRecipes(result)
        } catch (message) {
            fallbackOneRecipe(message)
            fallbackRecipes(message)
        }
    }
    pickRecipe()
}

export default main