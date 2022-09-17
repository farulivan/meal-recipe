import MealData from "../data/meal-data"
// import randomMeal from "../data/random_meal"
import '../components/random-pick'
import '../components/recipe-list'

const main = () => {
    //styling main element
    const main = document.querySelector('main')
    main.className = 'm-6'

    const categories = document.querySelector('categories-button')
    categories.addEventListener('click', (e) => e.pointerId === -1 && console.log(e.target.id))

    // const recipeListElement = document.querySelector('recipe-list')
    // const renderRecipes = results => {
    //     recipeListElement.meal = results
    // }
    
    // const fallbackRecipes = message => {
    // recipeListElement.renderError(message)
    // }

    //for Random Pick : 
    const randomPickElement = document.querySelector('random-pick')
    const renderOneRecipe = results => {
        randomPickElement.meal = results
    }
    const fallbackOneRecipe = message => {
        randomPickElement.renderError(message)
    }
    
    const pickRecipe = async () => {
        try {
            const result = await MealData.getOneRecipe()
            renderOneRecipe(result)
        } catch (message) {
            fallbackOneRecipe(message)
        }
    }
    pickRecipe()

    // for Categories :
    const categoriesElement = document.querySelector('categories-button')
    const renderCategories = results => {
        categoriesElement.categories = results
    }
    const fallbackCategories = message => {
        categoriesElement.renderError(message)
    }

    const pickCategories = async () => {
        try {
            const result = await MealData.getCategories()
            renderCategories(result)
        } catch (message){
            fallbackCategories(message)
        }
    }
    pickCategories()
}

export default main