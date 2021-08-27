import {data} from './data.js';

const app = document.querySelector('.app');

let content;

function render(imagen1, imagen2, imagen3, layers,) {
    content =
    `
    <header class="header">
        <nav class="nav">
            <h1 class="nav__title">The Planets</h1>
            <ul class="nav__menu">
            <li>${data[0].name}</li>
            <li>${data[1].name}</li>
            <li>${data[2].name}</li>
            <li>${data[3].name}</li>
            <li>${data[4].name}</li>
            <li>${data[5].name}</li>
            <li>${data[6].name}</li>
            <li>${data[7].name}</li>
            </ul>
            <figure class="nav__menu-burger">
                <img src="./public/assets/icon-hamburger.svg" alt="menu">
            </figure>
        </nav>
    </header>

    <main class="main">
        <section>
            <figure>
            <img src="${imagen1}" alt="${data[0].name}">
            <img src="${imagen2}" alt="${data[0].name}">
            <img src="${imagen3}" alt="${data[0].name}">
            </figure>
            <div>
                <article>
                    <h2>${data[0].name}</h2>
                    <p>${data[0][layers].content}</p>
                    <div>
                        <p>Source:</p>
                        <a href="${data[0][layers].source}">Wikipedia</a>
                        <img src="./public/assets/icon-source.svg" alt="${data[0].name}">
                    </div>
                </article>
                <div>
                </div>
            </div>
        </section>
    </main>
    `
    app.innerHTML = content;
}

render("./public/assets/planet-mercury.svg", "./public/assets/geology-mercury.png", "./public/assets/planet-mercury-internal.svg", "overview");







