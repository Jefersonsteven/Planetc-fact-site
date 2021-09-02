"use strict";

var _data = require("./data.js");

var header = document.querySelector('.header');
var main = document.querySelector('.main');
var headerContent = "\n    <nav class=\"nav\">\n        <h1 class=\"nav__title\">The Planets</h1>\n        <div class=\"nav__menu\">\n            <ul>\n                <li class=\"option-mercury\">\n                    <div></div>\n                    <h3>".concat(_data.data[0].name, "</h3>\n                    <img src=\"./public/assets/icon-chevron.svg\" alt=\"Go to Mercury\">\n                </li>\n                <li class=\"option-venus\">\n                    <div></div>\n                    <h3>").concat(_data.data[1].name, "</h3>\n                    <img src=\"./public/assets/icon-chevron.svg\" alt=\"Go to Venus\">\n                </li>\n                <li class=\"option-earth\">\n                    <div></div>\n                    <h3>").concat(_data.data[2].name, "</h3>\n                    <img src=\"./public/assets/icon-chevron.svg\" alt=\"Go to Earth\">\n                </li>\n                <li class=\"option-mars\">\n                    <div></div>\n                    <h3>").concat(_data.data[3].name, "</h3>\n                    <img src=\"./public/assets/icon-chevron.svg\" alt=\"Go to Mars\">\n                </li>\n                <li class=\"option-jupiter\">\n                    <div></div>\n                    <h3>").concat(_data.data[4].name, "</h3>\n                    <img src=\"./public/assets/icon-chevron.svg\" alt=\"Go to Jupiter\">\n                </li>\n                <li class=\"option-saturn\">\n                    <div></div>\n                    <h3>").concat(_data.data[5].name, "</h3>\n                    <img src=\"./public/assets/icon-chevron.svg\" alt=\"Go to Saturn\">\n                </li>\n                <li class=\"option-uranus\">\n                    <div></div>\n                    <h3>").concat(_data.data[6].name, "</h3>\n                    <img src=\"./public/assets/icon-chevron.svg\" alt=\"Go to Uranus\">\n                </li class=\"option-neptune\">\n                <li class=\"option-neptune\">\n                <div></div>\n                <h3>").concat(_data.data[7].name, "</h3>\n                <img src=\"./public/assets/icon-chevron.svg\" alt=\"Go to Neptune\">\n                </li>\n            </ul>\n        </div>\n        <figure class=\"nav__menu-icon\">\n            <img src=\"./public/assets/icon-hamburger.svg\" alt=\"menu\">\n        </figure>\n    </nav>\n");
header.innerHTML = headerContent;
var mainContent;
var planetX;
var planetXname;
var image1;
var image2;
var image3;
var layer;
var colorBorder;

function mainContentRender(planet, imagen1, imagen2, imagen3, layers) {
  mainContent = "\n    <section class=\"main-content\">\n            <figure class=\"main-content__image-planet\">\n            <img class=\"img-overview\" src=\"".concat(imagen1, "\" alt=\"").concat(_data.data[planet].name, "\">\n            <img class=\"img-structure\" src=\"").concat(imagen2, "\" alt=\"").concat(_data.data[planet].name, "\">\n            <img class=\"img-surface\" src=\"").concat(imagen3, "\" alt=\"").concat(_data.data[planet].name, "\">\n            </figure>\n            <div class=\"main-content__info\">\n                <article>\n                    <h2>").concat(_data.data[planet].name, "</h2>\n                    <p>").concat(_data.data[planet][layers].content, "</p>\n                    <div>\n                        <p>Source:</p>\n                        <a href=\"").concat(_data.data[planet][layers].source, "\">Wikipedia</a>\n                        <img src=\"./public/assets/icon-source.svg\" alt=\"").concat(_data.data[planet].name, "\">\n                    </div>\n                </article>\n            </div>\n            <div class=\"main-content__info-plus\">\n                <div>\n                    <h4>Rotation Time</h4> <h2>").concat(_data.data[planet].rotation, "</h2>\n                </div>\n                <div>\n                    <h4>Revolution Time</h4> <h2>").concat(_data.data[planet].revolution, "</h2>\n                </div>\n                <div>\n                    <h4>Radius</h4> <h2>").concat(_data.data[planet].radius, "</h2>\n                </div>\n                <div>\n                    <h4>Average temp.</h4> <h2>").concat(_data.data[planet].temperature, "</h2>\n                </div>\n            </div>\n        </section>\n    ");
  main.innerHTML = mainContent;
  planetX = planet;
  image1 = "./public/assets/planet-".concat(_data.data[planet].name.toLowerCase(), ".svg");
  image2 = "./public/assets/geology-".concat(_data.data[planet].name.toLowerCase(), ".png");
  image3 = "./public/assets/planet-".concat(_data.data[planet].name.toLowerCase(), "-internal.svg");
  layer = layers; // change Color Principal

  var color = {
    color1: '#419EBB',
    color2: '#EDA249',
    color3: '#6f2ed6',
    color4: '#D14C32',
    color5: '#D83A34',
    color6: '#CD5120',
    color7: '#1ec2a4',
    color8: '#2d68f0'
  };

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
  } // change size of the planet


  var imgOverview = document.querySelector('.img-overview');
  var imgStructure = document.querySelector('.img-structure');
  var imgSurface = document.querySelector('.img-surface');

  function changeSizePlanet() {
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
var layers = document.querySelector('.layers-controller');
var layersContent = "\n    <div class=\"overview\">\n        <div> <p>01</p> <h4>overview</h4> </div>\n    </div>\n    <div class=\"structure\">\n        <div> <p>02</p>  <div><h4>Internal</h4> <h4>Structure</h4></div> </div>\n    </div>\n    <div class=\"surface\">\n        <div> <p>03</p> <div><h4>Surface</h4> <h4>Geology</h4></div> </div>\n    </div>\n";
layers.innerHTML = layersContent; // Event click on the menu

var menuIcon = document.querySelector('.nav__menu-icon');
var menu = document.querySelector('.nav__menu');
var menuOpen = false;
menuIcon.addEventListener('click', function () {
  if (!menuOpen) {
    menu.style.right = '0';
    menuOpen = true;
  } else {
    menu.style.right = '-100%';
    menuOpen = false;
  }
}); // Event click on the layers change the main content-layers-info and img-layers

var overview = document.querySelector('.overview');
var structure = document.querySelector('.structure');
var surface = document.querySelector('.surface');
var layerOpen = false;

if (window.innerWidth < 768) {
  overview.style.borderBottom = "4px solid ".concat(colorBorder);
  overview.addEventListener('click', function () {
    if (!layerOpen) {
      mainContentRender(planetX, image1, image2, image3, "overview");
      overview.style.borderBottom = "4px solid ".concat(colorBorder);
      structure.style.borderBottom = 'none';
      surface.style.borderBottom = 'none';
    }
  });
  structure.addEventListener('click', function () {
    if (!layerOpen) {
      mainContentRender(planetX, image1, image2, image3, "structure");
      overview.style.borderBottom = 'none';
      structure.style.borderBottom = "4px solid ".concat(colorBorder);
      surface.style.borderBottom = 'none';
    }
  });
  surface.addEventListener('click', function () {
    if (!layerOpen) {
      mainContentRender(planetX, image1, image2, image3, "geology");
      overview.style.borderBottom = 'none';
      structure.style.borderBottom = 'none';
      surface.style.borderBottom = "4px solid ".concat(colorBorder);
    }
  });
} // Event click on the options change the main content


var optionMercury = document.querySelector('.option-mercury');
var optionVenus = document.querySelector('.option-venus');
var optionEarth = document.querySelector('.option-earth');
var optionMars = document.querySelector('.option-mars');
var optionJupiter = document.querySelector('.option-jupiter');
var optionSaturn = document.querySelector('.option-saturn');
var optionUranus = document.querySelector('.option-uranus');
var optionNeptune = document.querySelector('.option-neptune');

if (innerWidth < 768) {
  var renderPlanetMain = function renderPlanetMain(option, planet, imagen1, imagen2, imagen3, layers) {
    option.addEventListener('click', function () {
      if (menuOpen) {
        mainContentRender(planet, imagen1, imagen2, imagen3, layers);

        if (innerWidth < 768) {
          menu.style.right = '-100%';
        }

        menuOpen = false;
        overview.style.borderBottom = "4px solid ".concat(colorBorder);
        structure.style.borderBottom = "none";
        surface.style.borderBottom = "none";
      }
    });
  };

  renderPlanetMain(optionMercury, 0, "./public/assets/planet-mercury.svg", "./public/assets/geology-mercury.png", "./public/assets/planet-mercury-internal.svg", "overview");
  renderPlanetMain(optionVenus, 1, "./public/assets/planet-venus.svg", "./public/assets/geology-venus.png", "./public/assets/planet-venus-internal.svg", "overview");
  renderPlanetMain(optionEarth, 2, "./public/assets/planet-earth.svg", "./public/assets/geology-earth.png", "./public/assets/planet-earth-internal.svg", "overview");
  renderPlanetMain(optionMars, 3, "./public/assets/planet-mars.svg", "./public/assets/geology-mars.png", "./public/assets/planet-mars-internal.svg", "overview");
  renderPlanetMain(optionJupiter, 4, "./public/assets/planet-jupiter.svg", "./public/assets/geology-jupiter.png", "./public/assets/planet-jupiter-internal.svg", "overview");
  renderPlanetMain(optionSaturn, 5, "./public/assets/planet-saturn.svg", "./public/assets/geology-saturn.png", "./public/assets/planet-saturn-internal.svg", "overview");
  renderPlanetMain(optionUranus, 6, "./public/assets/planet-uranus.svg", "./public/assets/geology-uranus.png", "./public/assets/planet-uranus-internal.svg", "overview");
  renderPlanetMain(optionNeptune, 7, "./public/assets/planet-neptune.svg", "./public/assets/geology-neptune.png", "./public/assets/planet-neptune-internal.svg", "overview");
}