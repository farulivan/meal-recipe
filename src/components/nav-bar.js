class NavBar extends HTMLElement {
    connectedCallback() {
      this.render()
    }
  
    render() {
      this.innerHTML = `
        <h3 
            class="text-lg font-bold"
        >
            meal<span class="font-extrabold">recipe</span>
        </h3>
      `
      this.className = "flex justify-center items-center m-6"
    }
    
  
  }
     
  customElements.define('nav-bar', NavBar);
  