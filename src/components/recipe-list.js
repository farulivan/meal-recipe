class RecipeList extends HTMLElement {
    set meal(meal) {
        this._meal = meal;
        this.render()
    }
    render(){
        this.innerHTML = this._meal.map(recipe => {
            return `
                <div>
                    <img class="rounded-xl" src="${recipe.strMealThumb}" />
                    <p class="text-md font-bold text-slate-500">${recipe.strMeal}</p>
                    <p class="text-sm font-semibold text-slate-400">${recipe.strArea}</p>
                </div>
            `
        }).join('')
        this.className = "grid grid-cols-2 gap-4 mt-5"
    }


}

customElements.define('recipe-list', RecipeList)