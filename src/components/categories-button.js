class CategoriesButton extends HTMLElement {
    connectedCallback(){
        this.render()
    }

    render(){
        const categories = ['Pizza', 'Chicken', 'Beef', 'Seafood', 'Chicken2', 'Beef2', 'Seafood2']
        this.innerHTML = `
            <div class="flex overflow-scroll py-5" >
                ${categories.map(category => {
                    return `
                        <div>
                            <input 
                                id=${category}
                                type="radio"
                                class="hidden peer"
                                name="category"
                                
                            >
                            </input>
                            <label 
                                for=${category}
                                class="bg-slate-200 font-bold mx-2 px-3 py-1 rounded-xl cursor-pointer peer-checked:bg-emerald-300 hover:bg-slate-300"
                            >
                                ${category}
                            </label>
                        </div>
                    `
                }).join('')}
            </div>
        `
    }

}

customElements.define('categories-button', CategoriesButton)