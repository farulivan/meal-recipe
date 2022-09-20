import axios from "axios"

class SearchBar extends HTMLElement {
    async showSearchRecipe(keyword) {
        const getSearchRecipe = async () => {
            return await axios.get(`https://www.themealdb.com/api/json/v1/1/search.php?s=${keyword}`)
                .then(response => response.data.meals)
                .catch(error => console.log(error.message))
        }
        getSearchRecipe().then(recipeArr => {
            const recipeList = document.querySelector('recipe-list')
            if(recipeArr === null){
                recipeList.innerHTML = `
                <div class="p-10 col-span-2 md:col-span-3">
                    <p class="font-bold text-xl">Oops, we don't have that recipe</p>
                    <p class="font-medium text-md text-slate-500">Please try another keyword or choose one of the categories</p>
                </div>
                `
            } else {
                recipeList.innerHTML = recipeArr.map(recipe => {
                    return `
                    <div id="${recipe.idMeal}" class="max-w-sm bg-white rounded-lg border border-gray-200 shadow-md">
                        <div class="overflow-hidden">
                        <img id="${recipe.idMeal}" class="rounded-t-lg hover:scale-110" src="${recipe.strMealThumb}" alt="${recipe.strMeal} picture">
                        </div>
                        <h5 id="${recipe.idMeal}" class="text-sm font-medium text-slate-500 p-3 md:text-xl lg:text-center">${recipe.strMeal}</h5>
                    </div>
                    `
                }).join('')
            }
        })
    }
    
    connectedCallback() {
        this.className = "flex items-center mt-4 lg:w-full"
        this.render()
        const keyword = this.querySelector('#simple-search')
        //listen to searchButton click
        this.querySelector('#submit-search')
            .addEventListener('click', (e) => {
                e.preventDefault()
                this.showSearchRecipe(keyword.value)
            })
        //listen to Enter keyboard input
        keyword.addEventListener('keyup', (e) => e.key === "Enter" && this.showSearchRecipe(keyword.value))
    }
  
    render() {
        this.innerHTML = `
            <label for="simple-search" class="sr-only">Search</label>
            <div class="relative w-full">
                <div class="flex absolute inset-y-0 left-0 items-center pl-3 pointer-events-none">
                    <svg aria-hidden="true" class="w-5 h-5 text-gray-500 dark:text-gray-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z" clip-rule="evenodd"></path></svg>
                </div>
                <input type="text" id="simple-search" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-emerald-500 focus:border-emerald-500 block w-full pl-10 p-2.5" placeholder="Search" required="">
            </div>
            <button type="submit" id="submit-search" class="p-2.5 ml-2 text-sm font-medium text-white bg-emerald-700 rounded-lg border border-emerald-700 hover:bg-emerald-800 focus:ring-4 focus:outline-none focus:ring-emerald-300 dark:bg-emerald-600">
                <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path></svg>
                <span class="sr-only">Search</span>
            </button>
    `
    }
}
     
customElements.define('search-bar', SearchBar);
  