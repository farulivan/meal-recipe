class HeaderIntro extends HTMLElement {
  // constructor() {
  //   super()
  //   this.innerHTML = `<h1>Hello World!</h1>`
  // }

  connectedCallback() {
    this.render()
  }

  render() {
    this.innerHTML = `
      <div 
        class="container flex w-full h-screen justify-center items-center"
      >
        <h1 
        class="bg-gradient-to-r from-green-400 to-blue-500 text-transparent text-9xl bg-clip-text font-extrabold"
        >
          Hello World yo!
        </h1>
      </div>
    `
  }
  

}
   
customElements.define('header-intro', HeaderIntro);
