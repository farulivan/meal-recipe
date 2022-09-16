import axios from "axios"

const baseUrl = 'https://www.themealdb.com/api/json/v1/1/random.php'

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
    static pickRandomRecipe() {
        return axios.get(baseUrl)
            .then(response => response.data.meals)
            .catch(error => console.log(error.message))
    }
}

export default MealData