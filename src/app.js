import 'regenerator-runtime'
import './styles/style.css'
import './components/nav-bar.js'
import './components/random-pick'
import './components/categories-button'
import './components/recipe-list'
// import './components/header-intro.js'
import main from './view/main.js'

// const hello = document.createElement('h1');
// const wrapper = document.createElement('div');

// hello.textContent = 'Hello World!';
// hello.classList.add(
//   'bg-gradient-to-r', 'from-green-400', 'to-blue-500',
//   'text-transparent', 'text-9xl', 'bg-clip-text', 'font-extrabold'
//   );

// wrapper.classList.add(
//   'flex', 'w-full', 'h-screen',
//   'justify-center', 'items-center'
//   )

// wrapper.appendChild(hello);
// document.body.appendChild(wrapper);

document.addEventListener('DOMContentLoaded', main)