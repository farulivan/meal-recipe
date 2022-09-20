class CategoriesButton extends HTMLElement {
    set categories(categories){
        this._categories = categories
        this.render()
    }
    
    set clickEvent(event){
        this._clickEvent = event
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