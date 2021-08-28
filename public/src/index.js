import {data} from './data.js';


const header = document.querySelector('.header');
const main = document.querySelector('.main');
const headerContent =
`
    <nav class="nav">
        <h1 class="nav__title">The Planets</h1>
        <div class="nav__menu">
            <ul>
                <li class="option-mercury">
                    <div></div>
                    <h3>${data[0].name}</h3>
                    <img src="./public/assets/icon-chevron.svg" alt="Go to Mercury">
                </li>
                <li class="option-venus">
                    <div></div>
                    <h3>${data[1].name}</h3>
                    <img src="./public/assets/icon-chevron.svg" alt="Go to Venus">
                </li>
                <li class="option-earth">
                    <div></div>
                    <h3>${data[2].name}</h3>
                    <img src="./public/assets/icon-chevron.svg" alt="Go to Earth">
                </li>
                <li class="option-mars">
                    <div></div>
                    <h3>${data[3].name}</h3>
                    <img src="./public/assets/icon-chevron.svg" alt="Go to Mars">
                </li>
                <li class="option-jupiter">
                    <div></div>
                    <h3>${data[4].name}</h3>
                    <img src="./public/assets/icon-chevron.svg" alt="Go to Jupiter">
                </li>
                <li class="option-saturn">
                    <div></div>
                    <h3>${data[5].name}</h3>
                    <img src="./public/assets/icon-chevron.svg" alt="Go to Saturn">
                </li>
                <li class="option-uranus">
                    <div></div>
                    <h3>${data[6].name}</h3>
                    <img src="./public/assets/icon-chevron.svg" alt="Go to Uranus">
                </li class="option-neptune">
                <li class="option-neptune">
                <div></div>
                <h3>${data[7].name}</h3>
                <img src="./public/assets/icon-chevron.svg" alt="Go to Neptune">
                </li>
            </ul>
        </div>
        <figure class="nav__menu-icon">
            <img src="./public/assets/icon-hamburger.svg" alt="menu">
        </figure>
    </nav>
`
header.innerHTML = headerContent;

let mainContent;
let planetX;
let planetXname;
let image1;
let image2;
let image3;
function mainContentRender (planet, imagen1, imagen2, imagen3, layers,) {
    mainContent =
    `
    <section class="main-content">
            <figure main-content__image-planet>
            <img class="img-overview" src="${imagen1}" alt="${data[planet].name}">
            <img class="img-structure" src="${imagen2}" alt="${data[planet].name}">
            <img class="img-surface" src="${imagen3}" alt="${data[planet].name}">
            </figure>
            <div class="main-content__info">
                <article>
                    <h2>${data[planet].name}</h2>
                    <p>${data[planet][layers].content}</p>
                    <div>
                        <p>Source:</p>
                        <a href="${data[planet][layers].source}">Wikipedia</a>
                        <img src="./public/assets/icon-source.svg" alt="${data[planet].name}">
                    </div>
                </article>
            </div>
            <div>
                <div>
                    <h4>Rotation Time</h4> <h2>${data[planet].rotation}</h2>
                </div>
                <div>
                    <h4>Revolution Time</h4> <h2>${data[planet].revolution}</h2>
                </div>
                <div>
                    <h4>Radius</h4> <h2>${data[planet].radius}</h2>
                </div>
                <div>
                    <h4>Average temp.</h4> <h2>${data[planet].temperature}</h2>
                </div>
            </div>
        </section>
    `
    main.innerHTML = mainContent;
    planetX = planet;
    image1 = `./public/assets/planet-${data[planet].name.toLowerCase()}.svg`;
    image2 = `./public/assets/geology-${data[planet].name.toLowerCase()}.png`;
    image3 = `./public/assets/planet-${data[planet].name.toLowerCase()}-internal.svg`;

    // change size of the planet

    function changeSizePlanet () {
        const imgOverview = document.querySelector('.img-overview');
        const imgStructure = document.querySelector('.img-structure');
        const imgSurface = document.querySelector('.img-surface');

        switch (planetX) {
            case 0:
                imgOverview.style.width = '111px';
                imgOverview.style.height = '111px';
                imgStructure.style.width = '66px';
                imgStructure.style.height = '81px';
                imgStructure.style.top = '180px';
                imgSurface.style.width = '111px';
                imgSurface.style.height = '111px';
                break;
            case 1:
                imgOverview.style.width = '154px';
                imgOverview.style.height = '154px';
                imgStructure.style.width = '66px';
                imgStructure.style.height = '81px';
                imgStructure.style.top = '210px';
                imgSurface.style.width = '154px';
                imgSurface.style.height = '154px';
                break;
            case 2:
                imgOverview.style.width = '173px';
                imgOverview.style.height = '173px';
                imgStructure.style.width = '66px';
                imgStructure.style.height = '81px';
                imgStructure.style.top = '220px';
                imgSurface.style.width = '173px';
                imgSurface.style.height = '173px';
                break;
            case 3:
                imgOverview.style.width = '129px';
                imgOverview.style.height = '129px';
                imgStructure.style.width = '66px';
                imgStructure.style.height = '81px';
                imgStructure.style.top = '200px';
                imgSurface.style.width = '129px';
                imgSurface.style.height = '129px';
                break;
            case 4:
                imgOverview.style.width = '224px';
                imgOverview.style.height = '224px';
                imgStructure.style.width = '66px';
                imgStructure.style.height = '81px';
                imgStructure.style.top = '230px';
                imgSurface.style.width = '224px';
                imgSurface.style.height = '224px';
                break;
            case 5:
                imgOverview.style.width = '256px';
                imgOverview.style.height = '256px';
                imgStructure.style.width = '66px';
                imgStructure.style.height = '81px';
                imgStructure.style.top = '210px';
                imgSurface.style.width = '256px';
                imgSurface.style.height = '256px';
                break;
        }
    }
    changeSizePlanet();
}
mainContentRender(0, "./public/assets/planet-mercury.svg", "./public/assets/geology-mercury.png", "./public/assets/planet-mercury-internal.svg", "overview");






const layers = document.querySelector('.layers-controller');
const layersContent =
`
    <div class="overview">
        <p>01</p> <h4>overview</h4>
    </div>
    <div class="structure">
        <p>02</p>  <div><h4>Internal</h4> <h4>Structure</h4></div>
    </div>
    <div class="surface">
        <p>03</p> <div><h4>Surface</h4> <h4>Geology</h4></div>
    </div>
`
layers.innerHTML = layersContent;



// Event click on the menu

const menuIcon = document.querySelector('.nav__menu-icon');
const menu = document.querySelector('.nav__menu');
let menuOpen = false;


menuIcon.addEventListener('click', () => {
    if (!menuOpen) {
        menu.style.right = '0';
        menuOpen = true;
    } else {
        menu.style.right = '-100%';
        menuOpen = false;
    }
})


// Event click on the options change the main content

const optionMercury = document.querySelector('.option-mercury');
const optionVenus = document.querySelector('.option-venus');
const optionEarth = document.querySelector('.option-earth');
const optionMars = document.querySelector('.option-mars');
const optionJupiter = document.querySelector('.option-jupiter');
const optionSaturn = document.querySelector('.option-saturn');
const optionUranus = document.querySelector('.option-uranus');
const optionNeptune = document.querySelector('.option-neptune');

function renderPlanetMain(option, planet, imagen1, imagen2, imagen3, layers) {
    option.addEventListener('click', () => {
        if (menuOpen) {
            mainContentRender(planet, imagen1, imagen2, imagen3, layers);
            menu.style.right = '-100%';
            menuOpen = false;
        }
    })
}

renderPlanetMain(optionMercury, 0, "./public/assets/planet-mercury.svg", "./public/assets/geology-mercury.png", "./public/assets/planet-mercury-internal.svg", "overview");
renderPlanetMain(optionVenus, 1, "./public/assets/planet-venus.svg", "./public/assets/geology-venus.png", "./public/assets/planet-venus-internal.svg", "overview");
renderPlanetMain(optionEarth, 2, "./public/assets/planet-earth.svg", "./public/assets/geology-earth.png", "./public/assets/planet-earth-internal.svg", "overview");
renderPlanetMain(optionMars, 3, "./public/assets/planet-mars.svg", "./public/assets/geology-mars.png", "./public/assets/planet-mars-internal.svg", "overview");
renderPlanetMain(optionJupiter, 4, "./public/assets/planet-jupiter.svg", "./public/assets/geology-jupiter.png", "./public/assets/planet-jupiter-internal.svg", "overview");
renderPlanetMain(optionSaturn, 5, "./public/assets/planet-saturn.svg", "./public/assets/geology-saturn.png", "./public/assets/planet-saturn-internal.svg", "overview");
renderPlanetMain(optionUranus, 6, "./public/assets/planet-uranus.svg", "./public/assets/geology-uranus.png", "./public/assets/planet-uranus-internal.svg", "overview");
renderPlanetMain(optionNeptune, 7, "./public/assets/planet-neptune.svg", "./public/assets/geology-neptune.png", "./public/assets/planet-neptune-internal.svg", "overview");

// Event click on the layers change the main content-layers-info

const overview = document.querySelector('.overview');
const structure = document.querySelector('.structure');
const surface = document.querySelector('.surface');




let layerOpen = false;

function changeLayer(option,layer) {
    option.addEventListener('click', () => {
        if (!layerOpen) {
            mainContentRender(planetX, image1, image2, image3, layer);
        }
    })
}

changeLayer(overview, "overview");
changeLayer(structure, "structure");
changeLayer(surface, "geology");



