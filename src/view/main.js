import MealData from "../data/meal-data"
import '../components/random-pick'

const main = () => {
    const randomPickElement = document.querySelector('random-pick')
    console.log(randomPickElement)
    console.log(MealData.pickRandomRecipe(a => a.strMeal))
    const renderResult = results => {
        randomPickElement.meal = results
    }
    
    const fallbackResult = message => {
    randomPickElement.renderError(message)
    }
    
    const pickRecipe = async () => {
        try {
            const result = await MealData.pickRandomRecipe()
            renderResult(result)
        } catch (message) {
            fallbackResult(message)
        }
    }
    pickRecipe()
}

export default main