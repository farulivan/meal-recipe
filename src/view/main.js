// import MealData from "../data/meal-data"
import randomMeal from "../data/random_meal"
import '../components/random-pick'

const main = () => {
    //styling main element
    const main = document.querySelector('main')
    main.className = 'm-6'


    const randomPickElement = document.querySelector('random-pick')
    const renderResult = results => {
        randomPickElement.meal = results
    }
    
    const fallbackResult = message => {
    randomPickElement.renderError(message)
    }
    
    const pickRecipe = async () => {
        try {
            const result = await randomMeal.meals
            renderResult(result)
        } catch (message) {
            fallbackResult(message)
        }
    }
    pickRecipe()
}

export default main