class NavBar extends HTMLElement {
    connectedCallback() {
        this.className = "flex justify-center items-center p-6 lg:shadow-xl"
        this.render()
    }
  
    render() { this.innerHTML = `
        <h3 class="text-lg font-bold md:text-xl lg:text-2xl">
            meal<span class="font-extrabold">recipe</span>
        </h3>
    `}
}
     
customElements.define('nav-bar', NavBar);
  