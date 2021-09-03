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
let layer;
let colorBorder;
function mainContentRender (planet, imagen1, imagen2, imagen3, layers,) {
    mainContent =
    `
    <section class="main-content">
            <figure class="main-content__image-planet">
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
            <div class="main-content__info-plus">
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
    layer = layers;

    // change Color Principal

    const color = {
        color1: '#419EBB',
        color2: '#EDA249',
        color3: '#6f2ed6',
        color4: '#D14C32',
        color5: '#D83A34',
        color6: '#CD5120',
        color7: '#1ec2a4',
        color8: '#2d68f0'
    }

    switch (planetX) {
        case 0:
            colorBorder = color.color1;
            break;
        case 1:
            colorBorder = color.color2;
            break;
        case 2:
            colorBorder = color.color3;
            break;
        case 3:
            colorBorder = color.color4;
            break;
        case 4:
            colorBorder = color.color5;
            break;
        case 5:
            colorBorder = color.color6;
            break;
        case 6:
            colorBorder = color.color7;
            break;
        case 7:
            colorBorder = color.color8;
            break;
    }

    // change size of the planet

    const imgOverview = document.querySelector('.img-overview');
    const imgStructure = document.querySelector('.img-structure');
    const imgSurface = document.querySelector('.img-surface');

if (innerWidth < 768) {
    function changeSizePlanet () {

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
            case 6:
                imgOverview.style.width = '176px';
                imgOverview.style.height = '176px';
                imgStructure.style.width = '66px';
                imgStructure.style.height = '81px';
                imgStructure.style.top = '220px';
                imgSurface.style.width = '176px';
                imgSurface.style.height = '176px';
                break;
            case 7:
                imgOverview.style.width = '173px';
                imgOverview.style.height = '173px';
                imgStructure.style.width = '66px';
                imgStructure.style.height = '81px';
                imgStructure.style.top = '220px';
                imgSurface.style.width = '173px';
                imgSurface.style.height = '173px';
                break;
        }
    }
    changeSizePlanet();
}

if (innerWidth >= 768 && innerWidth < 1024) {
    function changeSizePlanet () {

        switch (planetX) {
            case 0:
                imgOverview.style.width = '184px';
                imgOverview.style.height = '184px';
                imgStructure.style.width = '91px';
                imgStructure.style.height = '111px';
                imgStructure.style.top = '280px';
                imgSurface.style.width = '184px';
                imgSurface.style.height = '184px';
                break;
            case 1:
                imgOverview.style.width = '253px';
                imgOverview.style.height = '253px';
                imgStructure.style.width = '91px';
                imgStructure.style.height = '111px';
                imgStructure.style.top = '310px';
                imgSurface.style.width = '253px';
                imgSurface.style.height = '253px';
                break;
            case 2:
                imgOverview.style.width = '285px';
                imgOverview.style.height = '285px';
                imgStructure.style.width = '91px';
                imgStructure.style.height = '111px';
                imgStructure.style.top = '320px';
                imgSurface.style.width = '285px';
                imgSurface.style.height = '285px';
                break;
            case 3:
                imgOverview.style.width = '213px';
                imgOverview.style.height = '213px';
                imgStructure.style.width = '91px';
                imgStructure.style.height = '111px';
                imgStructure.style.top = '300px';
                imgSurface.style.width = '213px';
                imgSurface.style.height = '213px';
                break;
            case 4:
                imgOverview.style.width = '369px';
                imgOverview.style.height = '369px';
                imgStructure.style.width = '91px';
                imgStructure.style.height = '111px';
                imgStructure.style.top = '330px';
                imgSurface.style.width = '369px';
                imgSurface.style.height = '369px';
                break;
            case 5:
                imgOverview.style.width = '422x';
                imgOverview.style.height = '422px';
                imgStructure.style.width = '91px';
                imgStructure.style.height = '111px';
                imgStructure.style.top = '310px';
                imgSurface.style.width = '422px';
                imgSurface.style.height = '422px';
                break;
            case 6:
                imgOverview.style.width = '290px';
                imgOverview.style.height = '290px';
                imgStructure.style.width = '91px';
                imgStructure.style.height = '111px';
                imgStructure.style.top = '320px';
                imgSurface.style.width = '290px';
                imgSurface.style.height = '290px';
                break;
            case 7:
                imgOverview.style.width = '285px';
                imgOverview.style.height = '285px';
                imgStructure.style.width = '91px';
                imgStructure.style.height = '111px';
                imgStructure.style.top = '320px';
                imgSurface.style.width = '285px';
                imgSurface.style.height = '285px';
                break;
        }
    }
    changeSizePlanet();
}

if (innerWidth >= 1024) {
    function changeSizePlanet () {

        switch (planetX) {
            case 0:
                imgOverview.style.width = '290px';
                imgOverview.style.height = '290px';
                imgStructure.style.width = '163px';
                imgStructure.style.height = '199px';
                imgStructure.style.top = '380px';
                imgSurface.style.width = '290px';
                imgSurface.style.height = '290px';
                break;
            case 1:
                imgOverview.style.width = '400px';
                imgOverview.style.height = '400px';
                imgStructure.style.width = '163px';
                imgStructure.style.height = '199px';
                imgStructure.style.top = '410px';
                imgSurface.style.width = '400px';
                imgSurface.style.height = '400px';
                break;
            case 2:
                imgOverview.style.width = '450px';
                imgOverview.style.height = '450px';
                imgStructure.style.width = '163px';
                imgStructure.style.height = '199px';
                imgStructure.style.top = '420px';
                imgSurface.style.width = '450px';
                imgSurface.style.height = '450px';
                break;
            case 3:
                imgOverview.style.width = '336px';
                imgOverview.style.height = '336px';
                imgStructure.style.width = '163px';
                imgStructure.style.height = '199px';
                imgStructure.style.top = '400px';
                imgSurface.style.width = '336px';
                imgSurface.style.height = '336px';
                break;
            case 4:
                imgOverview.style.width = '582px';
                imgOverview.style.height = '582px';
                imgStructure.style.width = '163px';
                imgStructure.style.height = '199px';
                imgStructure.style.top = '430px';
                imgSurface.style.width = '582px';
                imgSurface.style.height = '582px';
                break;
            case 5:
                imgOverview.style.width = '582x';
                imgOverview.style.height = '582px';
                imgStructure.style.width = '163px';
                imgStructure.style.height = '199px';
                imgStructure.style.top = '410px';
                imgSurface.style.width = '582px';
                imgSurface.style.height = '582px';
                break;
            case 6:
                imgOverview.style.width = '458px';
                imgOverview.style.height = '458px';
                imgStructure.style.width = '163px';
                imgStructure.style.height = '199px';
                imgStructure.style.top = '420px';
                imgSurface.style.width = '458px';
                imgSurface.style.height = '458px';
                break;
            case 7:
                imgOverview.style.width = '450px';
                imgOverview.style.height = '450px';
                imgStructure.style.width = '163px';
                imgStructure.style.height = '199px';
                imgStructure.style.top = '420px';
                imgSurface.style.width = '450px';
                imgSurface.style.height = '450px';
                break;
        }
    }
    changeSizePlanet();
}

    function changeDisplayPlanet() {
        switch (layer) {
            case 'overview':
                imgOverview.style.display = 'block';
                break;
            case 'structure':
                imgStructure.style.display = 'block';
                imgSurface.style.display = 'none';

                break;
            case 'geology':
                imgSurface.style.display = 'block';
                break;
        }
    }
    changeDisplayPlanet();
}
mainContentRender(0, "./public/assets/planet-mercury.svg", "./public/assets/geology-mercury.png", "./public/assets/planet-mercury-internal.svg", "overview");






const layers = document.querySelector('.layers-controller');
const layersContent =
`
    <div class="overview">
        <div> <p>01</p> <h4>overview</h4> </div>
    </div>
    <div class="structure">
        <div> <p>02</p>  <div><h4>Internal</h4> <h4>Structure</h4></div> </div>
    </div>
    <div class="surface">
        <div> <p>03</p> <div><h4>Surface</h4> <h4>Geology</h4></div> </div>
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

// Event click on the layers change the main content-layers-info and img-layers


const overview = document.querySelector('.overview');
const structure = document.querySelector('.structure');
const surface = document.querySelector('.surface');

let layerOpen = false;

if (window.innerWidth < 768) {

    overview.style.borderBottom = `4px solid ${colorBorder}`;

    overview.addEventListener('click', () => {
        if (!layerOpen) {
            mainContentRender(planetX, image1, image2, image3, "overview");
            overview.style.borderBottom = `4px solid ${colorBorder}`;
            structure.style.borderBottom = 'none';
            surface.style.borderBottom = 'none';
        }
    })

    structure.addEventListener('click', () => {
        if (!layerOpen) {
            mainContentRender(planetX, image1, image2, image3, "structure");
            overview.style.borderBottom = 'none';
            structure.style.borderBottom = `4px solid ${colorBorder}`;
            surface.style.borderBottom = 'none';
        }
    })

    surface.addEventListener('click', () => {
        if (!layerOpen) {
            mainContentRender(planetX, image1, image2, image3, "geology");
            overview.style.borderBottom = 'none';
            structure.style.borderBottom = 'none';
            surface.style.borderBottom = `4px solid ${colorBorder}`;
        }
    })

}


if (window.innerWidth >= 768) {

    overview.style.background = `${colorBorder}`

    overview.addEventListener('click', () => {
        if (!layerOpen) {
            mainContentRender(planetX, image1, image2, image3, "overview");
            overview.style.background = `${colorBorder}`
            structure.style.background = 'none';
            surface.style.background = 'none';
        }
    })

    structure.addEventListener('click', () => {
        if (!layerOpen) {
            mainContentRender(planetX, image1, image2, image3, "structure");
            overview.style.background = 'none';
            structure.style.background = `${colorBorder}`
            surface.style.background = 'none';
        }
    })

    surface.addEventListener('click', () => {
        if (!layerOpen) {
            mainContentRender(planetX, image1, image2, image3, "geology");
            overview.style.background = 'none';
            structure.style.background = 'none';
            surface.style.background = `${colorBorder}`
        }
    })

}

// Event click on the options change the main content

const optionMercury = document.querySelector('.option-mercury');
const optionVenus = document.querySelector('.option-venus');
const optionEarth = document.querySelector('.option-earth');
const optionMars = document.querySelector('.option-mars');
const optionJupiter = document.querySelector('.option-jupiter');
const optionSaturn = document.querySelector('.option-saturn');
const optionUranus = document.querySelector('.option-uranus');
const optionNeptune = document.querySelector('.option-neptune');

if (innerWidth < 768) {
    function renderPlanetMainMobile(option, planet, imagen1, imagen2, imagen3, layers) {
        option.addEventListener('click', () => {
            if (menuOpen) {
                mainContentRender(planet, imagen1, imagen2, imagen3, layers);
                if(innerWidth < 768){ menu.style.right = '-100%';}
                menuOpen = false;
                overview.style.borderBottom = `4px solid ${colorBorder}`;
                structure.style.borderBottom = `none`;
                surface.style.borderBottom = `none`;
            }
        })
    }

    renderPlanetMainMobile(optionMercury, 0, "./public/assets/planet-mercury.svg", "./public/assets/geology-mercury.png", "./public/assets/planet-mercury-internal.svg", "overview");
    renderPlanetMainMobile(optionVenus, 1, "./public/assets/planet-venus.svg", "./public/assets/geology-venus.png", "./public/assets/planet-venus-internal.svg", "overview");
    renderPlanetMainMobile(optionEarth, 2, "./public/assets/planet-earth.svg", "./public/assets/geology-earth.png", "./public/assets/planet-earth-internal.svg", "overview");
    renderPlanetMainMobile(optionMars, 3, "./public/assets/planet-mars.svg", "./public/assets/geology-mars.png", "./public/assets/planet-mars-internal.svg", "overview");
    renderPlanetMainMobile(optionJupiter, 4, "./public/assets/planet-jupiter.svg", "./public/assets/geology-jupiter.png", "./public/assets/planet-jupiter-internal.svg", "overview");
    renderPlanetMainMobile(optionSaturn, 5, "./public/assets/planet-saturn.svg", "./public/assets/geology-saturn.png", "./public/assets/planet-saturn-internal.svg", "overview");
    renderPlanetMainMobile(optionUranus, 6, "./public/assets/planet-uranus.svg", "./public/assets/geology-uranus.png", "./public/assets/planet-uranus-internal.svg", "overview");
    renderPlanetMainMobile(optionNeptune, 7, "./public/assets/planet-neptune.svg", "./public/assets/geology-neptune.png", "./public/assets/planet-neptune-internal.svg", "overview");
}

if (innerWidth >= 768) {
    function renderPlanetMainTablet(option, planet, imagen1, imagen2, imagen3, layers) {
        optionMercury.style.borderTop = `4px solid ${colorBorder}`;
        option.addEventListener('click', () => {
            if (true) {
                mainContentRender(planet, imagen1, imagen2, imagen3, layers);
                overview.style.background = `${colorBorder}`
                structure.style.background = 'none';
                surface.style.background = 'none';
                optionMercury.style.borderTop = `none`;
                optionVenus.style.borderTop = `none`;
                optionEarth.style.borderTop = `none`;
                optionMars.style.borderTop = `none`;
                optionJupiter.style.borderTop = `none`;
                optionSaturn.style.borderTop = `none`;
                optionUranus.style.borderTop = `none`;
                optionNeptune.style.borderTop = `none`;
                option.style.borderTop = `4px solid ${colorBorder}`;
            }
        })
    }

    renderPlanetMainTablet(optionMercury, 0, "./public/assets/planet-mercury.svg", "./public/assets/geology-mercury.png", "./public/assets/planet-mercury-internal.svg", "overview");
    renderPlanetMainTablet(optionVenus, 1, "./public/assets/planet-venus.svg", "./public/assets/geology-venus.png", "./public/assets/planet-venus-internal.svg", "overview");
    renderPlanetMainTablet(optionEarth, 2, "./public/assets/planet-earth.svg", "./public/assets/geology-earth.png", "./public/assets/planet-earth-internal.svg", "overview");
    renderPlanetMainTablet(optionMars, 3, "./public/assets/planet-mars.svg", "./public/assets/geology-mars.png", "./public/assets/planet-mars-internal.svg", "overview");
    renderPlanetMainTablet(optionJupiter, 4, "./public/assets/planet-jupiter.svg", "./public/assets/geology-jupiter.png", "./public/assets/planet-jupiter-internal.svg", "overview");
    renderPlanetMainTablet(optionSaturn, 5, "./public/assets/planet-saturn.svg", "./public/assets/geology-saturn.png", "./public/assets/planet-saturn-internal.svg", "overview");
    renderPlanetMainTablet(optionUranus, 6, "./public/assets/planet-uranus.svg", "./public/assets/geology-uranus.png", "./public/assets/planet-uranus-internal.svg", "overview");
    renderPlanetMainTablet(optionNeptune, 7, "./public/assets/planet-neptune.svg", "./public/assets/geology-neptune.png", "./public/assets/planet-neptune-internal.svg", "overview");
}


window.addEventListener('resize', () => {
    window.location.reload();
})