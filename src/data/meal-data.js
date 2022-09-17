import axios from "axios"

const oneRecipeUrl = 'https://www.themealdb.com/api/json/v1/1/lookup.php?i=52794'
const byCategoriesUrl = 'https://www.themealdb.com/api/json/v1/1/categories.php'
const listCategoriesUrl = 'https://www.themealdb.com/api/json/v1/1/list.php?c=list'

class MealData {
    // with Fetch
    // static async pickRandomRecipe() {
    //     try {
    //         const response = await fetch(`https://www.themealdb.com/api/json/v1/1/random.php`)
    //         const responseJson = await response.json()

    //         if(responseJson.meals) {
    //             return Promise.resolve(responseJson.meals)
    //         } else {
    //             return Promise.reject('Failed to get data')
    //         }
    //     } catch (error) {
    //         console.log(error)
    //     }
    // }

    // with Axios
    static getOneRecipe() {
        return axios.get(oneRecipeUrl)
            .then(response => response.data.meals)
            .catch(error => console.log(error.message))
    }

    static getCategories() {
        return axios.get(listCategoriesUrl)
            .then(response => response.data.meals)
            .catch(error => console.log(error.message))
    }
}

export default MealData