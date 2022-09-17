class CategoriesButton extends HTMLElement {
    set categories(categories){
        this._categories = categories
        this.render()
    }
    
    render(){
        this.innerHTML = `
            <div class="flex overflow-scroll py-5" >
                ${this._categories.map(category => {
                    return `
                        <div>
                            <input 
                                id=${category.strCategory}
                                type="radio"
                                class="hidden peer"
                                name="category"
                                
                            >
                            </input>
                            <label 
                                for=${category.strCategory}
                                class="bg-slate-200 font-bold mx-2 px-3 py-1 rounded-xl cursor-pointer peer-checked:bg-emerald-300 hover:bg-slate-300"
                            >
                                ${category.strCategory}
                            </label>
                        </div>
                    `
                }).join('')}
            </div>
        `
    }

}

customElements.define('categories-button', CategoriesButton)