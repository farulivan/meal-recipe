class MealData {
    static async pickRandomRecipe() {
        try {
            const response = await fetch(`https://www.themealdb.com/api/json/v1/1/random.php`)
            const responseJson = await response.json()

            if(responseJson.meals) {
                return Promise.resolve(responseJson.meals)
            } else {
                return Promise.reject('Failed to get data')
            }
        } catch (error) {
            console.log(error)
        }
    }
}

export default MealData