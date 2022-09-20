import MealData from "../data/meal-data"
import '../components/recipe-list'

const main = () => {
    //styling main element
    const main = document.querySelector('main')
    main.className = 'mx-6 mb-4 md:mx-14 lg:mx-20 lg:mt-10'

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

    // for Recipe list
    const recipeListElement = document.querySelector('recipe-list')
    const renderRecipeList = results => {
        recipeListElement.meal = results
    }
    const fallbackRecipeList = message => {
        recipeListElement.renderError(message)
    }
    
    const getRecipes = categoriesElement.addEventListener('click', async function(e) {
        try {
            if(e.pointerId === -1){
                const category = e.target.id
                const result = await MealData.getRecipes(category)
                renderRecipeList(result)
            }
        } catch (message){
            fallbackRecipeList(message)
        }
    })

    // to detect click in the categories list
    categoriesElement.clickEvent = getRecipes
}

export default main