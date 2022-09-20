import axios from "axios"

const byCategoriesUrl = 'https://www.themealdb.com/api/json/v1/1/filter.php?c='
const listCategoriesUrl = 'https://www.themealdb.com/api/json/v1/1/list.php?c=list'

class MealData {
    // with Axios

    static getCategories() {
        return axios.get(listCategoriesUrl)
            .then(response => response.data.meals)
            .catch(error => console.log(error.message))
    }

    static getRecipes(category) {
        return axios.get(`${byCategoriesUrl}${category}`)
            .then(response => response.data.meals)
            .catch(error => console.log(error.message))
    }
}

export default MealData