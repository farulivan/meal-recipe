import axios from "axios"

const oneRecipeUrl = 'https://www.themealdb.com/api/json/v1/1/lookup.php?i=52794'
const byCategoriesUrl = 'https://www.themealdb.com/api/json/v1/1/filter.php?c=Beef'
const listCategoriesUrl = 'https://www.themealdb.com/api/json/v1/1/list.php?c=list'

// const categories = document.querySelector('categories-button')
// const selectedCategories = categories.addEventListener('click', (e) => e.pointerId === -1 && e.target.id)
// const categories = document.querySelector('input-categories')
// console.log(categories)

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

    static getRecipes() {
        return axios.get(`${byCategoriesUrl}`)
            .then(response => response.data.meals)
            .catch(error => console.log(error.message))
    }
}

export default MealData