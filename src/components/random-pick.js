class RandomPick extends HTMLElement {
    set meal(meal) {
        this._meal = meal;
        this.render()
    }

    connectedCallback() {
        this.render()
    }
  
    render() {
      this.innerHTML = `
        <p>Hallo :${this._meal[0].strMeal}</p>
      `
      this.className = "flex justify-center items-center m-6"
        console.log(this._meal[0].strMeal)
        
    }
    
  
  }
     
  customElements.define('random-pick', RandomPick);
  