class RandomPick extends HTMLElement {
    set meal(meal) {
        this._meal = meal;
        this.render()
    }
  
    render() {
        const data = this._meal[0]
        this.innerHTML = 
            this._meal !== undefined ?
                `
                    <div class="bg-emerald-800 rounded-xl flex w-full p-4 items-center justify-evenly text-white">
                        <div>
                            <p class="text-sm font-bold">${data.strMeal}</p>
                            <p class="text-xs font-medium">${data.strCategory}</p>
                            <button class="bg-white text-emerald-800 font-bold text-xs rounded-lg py-2 px-4 mt-4">Cook Now</button>
                        </div>
                        <div class="w-1/3">
                            <img class="w-full rounded-full" src="${data.strMealThumb}/preview" alt="picture of ${data.strMeal}"/>
                        </div>
                    </div>
                ` 
                    : `loading`
        
        this.className = "w-screen"
    }
    
  
  }
     
  customElements.define('random-pick', RandomPick);
  