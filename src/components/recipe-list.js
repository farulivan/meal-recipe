import axios from "axios";

class RecipeList extends HTMLElement {
    constructor(){
        super()
        this.showRecipeDetail = false
    }
    
    set meal(meal) {
        this._meal = meal;
        this.render()
    }

    async recipeDetail(e){
        const getDetail = async () => {
        return await axios.get(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${e}`)
                .then(response => response.data.meals[0])
                .catch(error => console.log(error.message))
        }
        getDetail().then(recipe => {
            this.innerHTML = `
            <div class="col-span-2" id="${recipe.idMeal}">
                <img class="rounded-xl" src="${recipe.strMealThumb}" />
                <h3 class="text-2xl font-extrabold text-emerald-700 mt-2">${recipe.strMeal}</h3>
                <p class="text-md font-bold text-slate-500">${recipe.strArea} Cuisine</p>
            </div>
            `
        })
    }

    connectedCallback(){
        const recipeList = document.querySelector('recipe-list')
        recipeList.addEventListener('click', (e) => this.recipeDetail(e.path[1].id))
    }

    render(){
        this.innerHTML = this._meal.map(recipe => {
            return `
                <div id="${recipe.idMeal}">
                    <img class="rounded-xl" src="${recipe.strMealThumb}" />
                    <p class="text-md font-bold text-slate-500">${recipe.strMeal}</p>
                </div>
            `
        }).join('')
        this.className = "grid grid-cols-2 gap-4 mt-5"
    }


}

customElements.define('recipe-list', RecipeList)

{/* <p class="text-sm font-semibold text-slate-400">${recipe.strArea}</p> */}