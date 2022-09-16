class RandomPick extends HTMLElement {
    set meal(meal) {
        this._meal = meal;
        this.render()
    }
  
    render() {
        this.innerHTML = 
            this._meal !== undefined ?
                `<p>Hallo :${this._meal[0].strMeal}</p>` 
                    : `loading`
        
        this.className = "flex justify-center items-center m-6"
    }
    
  
  }
     
  customElements.define('random-pick', RandomPick);
  