class IntroSection extends HTMLElement {
    connectedCallback() {
        this.className = 'grid col-1 m-6'
        this.render()
    }
    // connectedCallback() {
    //     this.render()
    // }
    
    render() { 
        this.innerHTML = `
            <p class="text-md font-medium text-slate-500">Hello!</p>
            <h1 class="font-bold text-2xl">What do you want <br />to cook today?</h1>
        `
    }
}

customElements.define('intro-section', IntroSection)
