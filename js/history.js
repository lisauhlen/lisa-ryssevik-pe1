const history = [
    {
        id: 1,
        year: "1957",
        text: "In 1957 we <strong>launched the first satellite</strong> into space! It was called Sputnik 1 and was launched by the Soviets.",
        category: "",
    },
    {
        id: 2,
        year: "1957",
        text: "One month after Sputnik 1, the Russians sent the first living creature into space: <strong>Laika the Space Dog</strong> became world-famous!",
        category: "",
    },
    {
        id: 3,
        year: "1958",
        text: "The U.S. launched their first satellite into orbit in 1958. Their satellite was named Explorer 1.",
        category: "",
    },
    {
        id: 4,
        img: "images/gagarin.jpg",
        alt: "A statue of Yuri Gagarin.",
        imgText: "First human to orbit Earth, Yuri Gagarin. Photo: Prado.",
        category: "human",
    },
    {
        id: 5,
        year: "1961",
        text: "The Russian Yuri Gagarin was the <strong>first human to orbit Earth.</strong> He traveled in Vostok 1, and the flight only lasted 108 minutes.",
        category: "human",
    },
    {
        id: 6,
        year: "1962",
        text: "In 1962 the first American orbited Earth. His name was John Glenn.",
        category: "human",
    },
    {
        id: 7,
        year: "1963",
        text: "The <strong>first woman in space</strong> was Valentina Tereshkova from the Soviet. After her, 20 years passed before the next woman was sent into space. (In America, <strong>women weren’t allowed to be astronauts</strong>).",
        category: "human",
    },
    {
        id: 8,
        img: "images/moon-landing.jpg",
        alt: "Neil Armstrong on the Moon.",
        imgText: "Neil Armstrong on the Moon. Photo: NASA.",
        category: "human, moon",
    },
    {
        id: 9,
        year: "1969",
        text: 'In 1969 Neil Armstrong became the <strong>first human on the moon.</strong> As he exited the lunar lander, he said the famous words: “one small step for man, one giant leap for mankind”.', 
        category: "human, moon",
    },
    {
        id: 10,
        year: "1976",
        text: "NASA <strong>landed vehicles on Mars.</strong> Viking 1 and Viking 2 returned photos and collected data for six and four years, respectively.",
        category: "mars",
    },
    {
        id: 11,
        year: "1977",
        text: 'Voyager 1 and Voyager 2 were sent into space to explore Jupiter and Saturn. They contain a <a href="letter.html" class="black">letter from president Jimmy Carter.</a></p><p>NASA still follows the Voyagers’ journey through space!',
        category: "",
    },
    {
        id: 12,
        img: "images/lunarmodule.jpg",
        alt: "The Apollo Lunar Module.",
        imgText: "The Apollo Lunar Module. Photo: Brian Mcgowan.",
        category: "moon",
    },
    {
        id: 13,
        year: "1986",
        text: "It was a tragedy when the space shuttle Challenger exploded only 73 seconds after liftoff, and the crew of seven were killed.</p><p>Onboard was Christa McAuliffe who would have been the first civilian in space.",
        category: "human",
    },
    {
        id: 14,
        year: "2003",
        text: "Only minutes before landing, the Columbia space shuttle <strong>broke apart</strong> and killed all seven crew members. This was the second disaster in the U.S. Space shuttle program.",
        category: "human",
    },
    {
        id: 15,
        year: "2008",
        text: "In 2008 SpaceX sent their rocket Falcon 1 into orbit and became the <strong>first privately funded</strong> company to successfully launch an orbital rocket. ",
        category: "spacex",
    },
    {
        id: 16,
        img: "images/spacex-launch3.jpg",
        alt: "A beautiful SpaceX night launch.",
        imgText: "A beautiful SpaceX night launch. Photo: SpaceX.",
        category: "spacex",
    },
    {
        id: 17,
        year: "2010",
        text: "In 2010 SpaceX launched a spacecraft into orbit <strong>and recovered it.</strong> They are the first privately funded company to accomplish this.",
        category: "spacex",
    },
    {
        id: 18,
        year: "2011",
        text: "NASA sent their rover Curiosity to Mars. It is still operating today, and it has found <strong>evidence of past habitable environments</strong> on Mars.",
        category: "mars",
    },
    {
        id: 19,
        year: "2015",
        text: "SpaceX was the first company to <strong>land the first stage</strong> of an orbital rocket, the Falcon 9.",
        category: "spacex",
    },
    {
        id: 20,
        img: "images/falcon9.jpg",
        alt: "SpaceX launching their Falcon9.",
        imgText: "SpaceX launching their Falcon9. Photo: SpaceX.",
        category: "spacex",
    },
    {
        id: 21,
        year: "2016",
        text: "In 2016 SpaceX landed their Falcon 9’s first stage <strong>on a drone-ship in the ocean.</strong>",
        category: "spacex",
    },
    {
        id: 22,
        year: "2017",
        text: "2017 was a <strong>big year for SpaceX and space travel history.</strong> SpaceX re-launched and landed a used orbital rocket stage, did a controlled flyback and recovery of a payload fairing and completed a reflight of a commercial cargo spacecraft.</p><p>This means <strong>space travel can become significantly cheaper,</strong> since we don’t have to build a new rocket for each launch.",
        category: "spacex",
    },
    {
        id: 23,
        year: "2019",
        text: "SpaceX autonomously <strong>docked a spacecraft to the ISS</strong> - the International Space Station.",
        category: "spacex",
    },
    {
        id: 24,
        img: "images/booster.jpg",
        alt: "SpaceX landing two of Falcon Heavy's three boosters.",
        imgText: "SpaceX landing a Falcon Heavy booster. Photo: SpaceX.",
        category: "spacex",
    },
    {
        id: 25,
        year: "2020",
        text: "<strong>SpaceX became the first</strong> private company to send humans into orbit and to the International Space Station.",
        category: "human, spacex",
    },
    {
        id: 26,
        year: "2022",
        text: "Every 26 months the planets are placed ideally for traveling to Mars. SpaceX is aiming to send two unmanned cargo <strong>spaceships to Mars in 2022.</strong>",
        category: "mars, spacex",
    },
    {
        id: 27,
        year: "2023",
        text: "SpaceX is bringing the Japanese billionaire, Yukazu Maezawa, and a few selected artists on a <strong>trip around the Moon</strong> in their new Starship.",
        category: "human, moon, spacex",
    },
    {
        id: 28,
        img: "images/moon.jpg",
        alt: "The Moon in a blue sky.",
        imgText: "The Moon. Photo: Alexander Andrews.",
        category: "moon",
    },
    {
        id: 29,
        year: "2024",
        text: "NASA wants to send the <strong>first woman to the Moon,</strong> and establish a human presence there.",
        category: "human, moon",
    },
    {
        id: 30,
        year: "2024",
        text: "If SpaceX succeeds in sending spaceships to Mars in 2022, the ship launching in 2024 will be taking <strong>people to Mars for the first time in history.</strong>",
        category: "human, mars, spacex",
    },
    {
        id: 31,
        year: "2050",
        text: "<strong>A city on Mars.</strong> Sharing his plans and ideas, Elon Musk said he will need 10.000 trips to Mars to build a city there by 2050.",
        category: "human, mars, spacex",
    },
    {
        id: 32,
        img: "images/mars-surface.jpg",
        alt: "The surface of Mars.",
        imgText: "The surface of Mars. Photo: NASA.",
        category: "mars",
    },

];

const historyContainer = document.querySelector(".history-container"); 
const sortButton = document.querySelector(".sort-button");
const categoryDiv = document.querySelector(".display");
const sortOldNew = document.querySelector("#old-new");
const sortNewOld = document.querySelector("#new-old");
const spaceX = document.querySelector("#spacex-btn");
const human = document.querySelector("#human");
const moon = document.querySelector("#moon");
const mars = document.querySelector("#mars");



function historyHtml(history) {

    historyContainer.innerHTML = "";

    for(let i = 0; i < history.length; i++) {

        if(history[i].img) {
            historyContainer.innerHTML += `<img src="${history[i].img}" alt="${history[i].alt}">
                                            <p class="image-text">${history[i].imgText}</p>`;
        } else {
            historyContainer.innerHTML += `<h2>${history[i].year}</h2>
                                            <p>${history[i].text}</p>`;
        }       
    }
};
historyHtml(history);

sortButton.addEventListener("click", showCategories);
sortNewOld.addEventListener("click", sortHtmlNewOld);
sortOldNew.addEventListener("click", sortHtmlOldNew);
spaceX.addEventListener("click", sortSpaceX);
human.addEventListener("click", sortHuman);
moon.addEventListener("click", sortMoon);
mars.addEventListener("click", sortMars);


function showCategories() {
    categoryDiv.classList.toggle("category-button");
}

function sortHtmlNewOld() {
    history.sort (
        function(a,b) {
          if(a.id < b.id) {
            return 1;
          } else if(a.id > b.id) {
            return -1;
          } else {
            return 0;
          }
        }
    );
    categoryDiv.classList.toggle("category-button");
    historyHtml(history);
}

function sortHtmlOldNew() {
    history.sort (
        function(a,b) {
          if(a.id > b.id) {
            return 1;
          } else if(a.id < b.id) {
            return -1;
          } else {
            return 0;
          }
        }
    );
    categoryDiv.classList.toggle("category-button");
    historyHtml(history);
}

function sortSpaceX() {
    sortHtmlOldNew();
    historyContainer.innerHTML = "";
    for(let i = 0; i < history.length; i++) {
        if(history[i].category.includes("spacex")) {
            if(history[i].img) {
                historyContainer.innerHTML += `<img src="${history[i].img}" alt="${history[i].alt}">
                                                <p class="image-text">${history[i].imgText}</p>`;
            } else {
                historyContainer.innerHTML += `<h2>${history[i].year}</h2>
                                                <p>${history[i].text}</p>`;
            }  
        }     
    }
}

function sortHuman() {
    sortHtmlOldNew();
    historyContainer.innerHTML = "";
    for(let i = 0; i < history.length; i++) {
        if(history[i].category.includes("human")) {
            if(history[i].img) {
                historyContainer.innerHTML += `<img src="${history[i].img}" alt="${history[i].alt}">
                                                <p class="image-text">${history[i].imgText}</p>`;
            } else {
                historyContainer.innerHTML += `<h2>${history[i].year}</h2>
                                                <p>${history[i].text}</p>`;
            }  
        }     
    }
}

function sortMoon() {
    sortHtmlOldNew();
    historyContainer.innerHTML = "";
    for(let i = 0; i < history.length; i++) {
        if(history[i].category.includes("moon")) {
            if(history[i].img) {
                historyContainer.innerHTML += `<img src="${history[i].img}" alt="${history[i].alt}">
                                                <p class="image-text">${history[i].imgText}</p>`;
            } else {
                historyContainer.innerHTML += `<h2>${history[i].year}</h2>
                                                <p>${history[i].text}</p>`;
            }  
        }     
    }
}

function sortMars() {
    sortHtmlOldNew();
    historyContainer.innerHTML = "";
    for(let i = 0; i < history.length; i++) {
        if(history[i].category.includes("mars")) {
            if(history[i].img) {
                historyContainer.innerHTML += `<img src="${history[i].img}" alt="${history[i].alt}">
                                                <p class="image-text">${history[i].imgText}</p>`;
            } else {
                historyContainer.innerHTML += `<h2>${history[i].year}</h2>
                                                <p>${history[i].text}</p>`;
            }  
        }     
    }
}








