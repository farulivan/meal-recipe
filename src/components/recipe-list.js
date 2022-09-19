import axios from "axios";
import _ from "lodash";

class RecipeList extends HTMLElement {
    set meal(meal) {
        this._meal = meal;
        this.render()
    }

    async recipeDetail(e){
        // get detail data from API
        const getDetail = async () => {
        return await axios.get(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${e}`)
                .then(response => response.data.meals[0])
                .catch(error => console.log(error.message))
        }

        // process the data and show in the UI
        getDetail().then(recipe => {
            window.scroll(0,0)

            // process the ingridients data 
            const ingridients = []
            const measures = []
            for(let [key, value] of Object.entries(recipe)){
                if(key.includes('strIngredient') && value !== ''){
                    ingridients.push(value)
                } else if(key.includes('strMeasure') && value !== ''){
                    measures.push(value)
                }
            }
            let ingridientsArr = ingridients.map((value, index) => [value, measures[index]]) 
            
            // show recipe detail
            this.innerHTML = `
            <div class="col-span-2" id="${recipe.idMeal}">
                <img class="rounded-xl" src="${recipe.strMealThumb}" />
                <h2 class="text-2xl font-extrabold text-emerald-700 mt-2">${recipe.strMeal}</h3>
                <p class="text-md font-bold text-slate-500">${recipe.strArea} Cuisine</p>
                <p class="bg-slate-100 w-full font-bold mt-2 p-2 text-center text-emerald-700 border-b-2 border-emerald-700">Ingridients</p>
                <ul>
                    ${ingridientsArr.map(ingridient => `
                        <li class="flex items-center space-x-3 my-3">
                        <svg class="flex-shrink-0 w-5 h-5 text-emerald-700" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path></svg>
                        <span>${ingridient[0]} : ${ingridient[1]}</span>
                        </li>
                    `).join('')}
                </ul>
                <p class="bg-slate-100 w-full font-bold mt-2 p-2 text-center text-emerald-700 border-b-2 border-emerald-700">Directions</p>
                <ol class="space-y-1 list-inside list-decimal">
                    ${
                        _.split(recipe.strInstructions, '\r\n').map(step => `
                            <li class="space-x-3 my-3">${step}</li>
                        `)
                    .join('')}
                </ol>
                <button id="back-button" class="bg-emerald-800 text-white font-bold text-xs rounded-lg py-2 px-4 mt-4">Back</button>
            </div>
            `
            
            // back action
            const backButton = document.querySelector('#back-button')
            const categoryButton = document.getElementById(recipe.strCategory)
            backButton.addEventListener('click', () => {
                this.innerHTML = ''
                categoryButton.click()
                window.scroll(0,0)
            })
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