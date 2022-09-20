class CategoriesButton extends HTMLElement {
    connectedCallback(){
        this.className = "flex flex-col py-3"
    }

    set categories(categories){
        this._categories = categories
        this.render()
    }
    
    set clickEvent(event){
        this._clickEvent = event
        
    }

    render(){
        this.innerHTML = `
        <p class="text-md font-medium text-slate-500 mb-3">Select categories</p>
        <div class="flex overflow-scroll pb-6">
        ${this._categories.map(category => {
            return `
            <div>
            <input 
            id=${category.strCategory}
            type="radio"
            class="hidden peer input-categories"
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
        
        //listen user click in categories
        this.addEventListener('click', this._clickEvent)
        
        //click the Beef categories when page load
        document.getElementById('Beef').click()
        // document.getElementById('Beef').unbind('click')
    }

}

customElements.define('categories-button', CategoriesButton)