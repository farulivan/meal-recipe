class IntroSection extends HTMLElement {
    connectedCallback() {
        this.render()
    }
    
    render() { 
        this.innerHTML = `
            <p class="text-md font-medium text-slate-500 md:text-xl">Hello!</p>
            <h1 class="font-bold text-2xl pr-14 md:text-4xl">What do you want to cook today?</h1>
        `
    }
}

customElements.define('intro-section', IntroSection)
