// Header Section variables
let burgerBtn = document.getElementById("burgerMenu");
let closeMenuBtn = document.getElementById("close-menu");
let sideNavigation = document.getElementById("sideNav");
let sideNavigationBg = document.getElementById("sideNavBg");
let pages = document.querySelectorAll(".pages")
// Menu Section variables
let menuWrapper = document.getElementById("menuWrapper");
let restaurantMenu = [
    {
        name: "PEAR SALAD",
        price:  "$11",
        ingredients: "Reid’s Orchard Pears / Bitter Greens / Granola / Big Firefly / Farms Black and Blue / Pine Nut Vinaigrette"
    },
    {
        name: "BRODETTO DI PESCE",
        price:  "$9",
        ingredients: "Adriatic Seafood Soup / Clams / Prawns / Livornese / Langoustine Scallop / Celery / Olive"
    },
    {
        name: "FARM GREENS",
        price: "$9",
        ingredients: "Honey Vinaigrette / House Cheese Crouton / Fine Herbs"
    },
    {
        name: "GRILLED KALE",
        price: "$9",
        ingredients: "Bitter Greens / House Cheese Crouton / Kamon Iberico"
    },
    {
        name: "RICOTTA GNUD",
        price: "$18",
        ingredients: "Marinated Sardine / Red Currant / Chanterelles / Pine Nuts / Mantecato Vitello / Fennel / Olive / Pepitas"
    },
    {
        name: "CANESTRELLI",
        price: "$18",
        ingredients:"Reid Orchatd Pears / Bitter Greens / House Cheese Crouton / Marinated Sardine / Chanterelles / Clams"
    }
];
// Events variables
const EVENT_COUNTER = 3;

let eventsWrapper = document.getElementById("eventsWrapper");
let loadMoreBtn = document.getElementById("loadMoreBtn");
let previewsBtn = document.getElementById("previewsBtn");
let eventItems;
let currentEventStart = 0;
let currentItems = 3;
let eventsData = [
    {
        day: "25",
        month: "April",
        description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
    },
    {
        day: "15",
        month: "May",
        description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
    },
    {
        day: "19",
        month: "June",
        description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
    },
    {
        day: "20",
        month: "July",
        description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
    },
    {
        day: "21",
        month: "July",
        description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
    },
    {
        day: "22",
        month: "July",
        description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
    },
    {
        day: "23",
        month: "July",
        description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
    },
    {
        day: "24",
        month: "July",
        description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
    },
    {
        day: "25",
        month: "July",
        description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
    }
];
// Slider variables
let sliderLeftArrow = document.getElementById("leftArrow");
let sliderRightArrow = document.getElementById("rightArrow");
let sliderContent = document.getElementById("sliderContent");
let sliderIndex = 0;
let sliderDot = document.querySelectorAll('.sliderDot');
let slidetCount = 3;
let sliderData = [
    { 
        id: 1,
        imgUrl: "images/kitchen.jpg"
    },
    {
        id: 2,
        imgUrl: "images/breakfast-meals-on-table.jpg"
    },
    {
        id: 3,
        imgUrl: "images/salads.jpeg"
    },
    {
        id: 4,
        imgUrl: "images/white-and-brown-cake.jpg"
    },
    {
        id: 5,
        imgUrl: "images/cake-chocolate.jpg"
    },
    {
        id: 6,
        imgUrl: "images/pancake.jpg"
    }
];

// Header Section methods
burgerBtn.addEventListener('click', function(){
    openNavigation();
});
closeMenuBtn.addEventListener('click', function(){
    closeNavigation();
});
for(let i = 0; i < pages.length; i++) {
    pages[i].addEventListener('click', function(){
        closeNavigation();
    });
}
sideNavigationBg.addEventListener('click', function(){
    closeNavigation();
})
function openNavigation() {
    sideNavigation.style.width = "300px";
    sideNavigationBg.style.opacity = "0.6";
    sideNavigationBg.style.display = "block";
}
function closeNavigation() {
    sideNavigation.style.width = "0px";
    sideNavigationBg.style.opacity = "0";
    sideNavigationBg.style.display = "none";
}
// Menu Section methods
function createRestaurantMenu() {
    let fragment = document.createDocumentFragment();
    restaurantMenu.forEach((element) => {
        let menu = document.createElement('div');
        menu.classList.add("menu-div");
        let menuHeading = document.createElement('h6');
        menuHeading.classList.add("menu-section-h6")
        menuHeading.textContent = element.name + " / " + element.price;
        let dishIngredients = document.createElement('p');
        dishIngredients.classList.add("dish-ingredients");
        dishIngredients.textContent = element.ingredients
        menu.appendChild(menuHeading);
        menu.appendChild(dishIngredients);
        fragment.appendChild(menu);
    });
    menuWrapper.appendChild(fragment);
}
createRestaurantMenu();
// Events Section methods
function createEvents() {
    let fragment = document.createDocumentFragment();
    for (let i = currentEventStart*currentItems; i < currentItems*(currentEventStart+1); i++) {
        if (typeof eventsData[i] != 'undefined') {
            let events = document.createElement('div');
            events.classList.add("events");
            let eventDay = document.createElement('h3');
            eventDay.classList.add("event-day");
            eventDay.textContent = eventsData[i].day;
            let eventMonth = document.createElement('h6');
            eventMonth.classList.add("event-month");
            eventMonth.textContent = eventsData[i].month;
            let eventDescription = document.createElement('p');
            eventDescription.classList.add("event-description");
            eventDescription.textContent = eventsData[i].description;
    
            events.appendChild(eventDay);
            events.appendChild(eventMonth);
            events.appendChild(eventDescription);
            fragment.appendChild(events);
        }
    }
    eventsData.forEach((element) => {
        // let events = document.createElement('div');
        // events.classList.add("events");
        // let eventDay = document.createElement('h3');
        // eventDay.classList.add("event-day");
        // eventDay.textContent = element.day;
        // let eventMonth = document.createElement('h6');
        // eventMonth.classList.add("event-month");
        // eventMonth.textContent = element.month;
        // let eventDescription = document.createElement('p');
        // eventDescription.classList.add("event-description");
        // eventDescription.textContent = element.description;

        // events.appendChild(eventDay);
        // events.appendChild(eventMonth);
        // events.appendChild(eventDescription);
        // fragment.appendChild(events);
    });
    eventsWrapper.appendChild(fragment);
    eventItems = document.querySelectorAll('.events');
}
createEvents();

loadMoreBtn.addEventListener('click', (item) => {
    
    // let eventsList = document.querySelectorAll(".events-wrapper .events");
    // console.log(eventsList);
    // for(let i = 0; i < 3; i++) {
    //     if(eventsList[i]) {
    //         eventsList[i].style.display = "block";
    //     }
    //     console.log(eventsList[i]);
    // }
    currentEventStart++;
    if (currentEventStart*currentItems+currentItems >= eventsData.length) {
        loadMoreBtn.style.display = "none";
    }
    if (window.getComputedStyle(previewsBtn).display == "none") {
        previewsBtn.style.display = "block";
    }
    createEvents();
});

previewsBtn.addEventListener('click', function() {
    currentEventStart--;
    if (eventItems.length > EVENT_COUNTER) {
        Array.from(eventItems).slice(-1*EVENT_COUNTER).forEach(e => { 
            e.remove();
            eventItems = document.querySelectorAll('.events');
        })
    }

    if (eventItems.length == EVENT_COUNTER) {
        previewsBtn.style.display = "none";
    }

    if (window.getComputedStyle(loadMoreBtn).display == "none") {
        loadMoreBtn .style.display = "block";
    }
});

// Slider Section methods
function createSliderImage(item) {
    let sliderImage = document.createElement('div');
    sliderImage.classList.add("slider-image");
    sliderImage.style.backgroundImage = `url(${item.imgUrl})`;

    return sliderImage
}
function sliderArrowRightClick() {
    // if(sliderIndex == (sliderData.length/3)-1) {
    if(sliderIndex == sliderData.length-slidetCount) {
        sliderIndex = 0;
        setSlide();
        return;
    }
    sliderIndex++;
    setSlide();
}
sliderRightArrow.addEventListener('click', sliderArrowRightClick);

function sliderArrowLeftClick() {
    if(sliderIndex == 0) {
        // sliderIndex = (sliderData.length/3)-1;
        sliderIndex = sliderData.length-slidetCount;
        setSlide();
        return;
    }
    sliderIndex--;
    setSlide();
}
sliderLeftArrow.addEventListener('click', sliderArrowLeftClick);

function createDots(item) {
    let dotsWrapper = document.createElement('div');
    dotsWrapper.classList.add('dots-wrapper');

    for(let i = 0; i < sliderData.length/slidetCount; i++) {
        let dot = document.createElement('div');
        dot.classList.add('sliderDot');

        dot.addEventListener('click', event => {
            sliderIndex = slidetCount*i;
            dot.style.backgroundColor = "red";
            // dot.classList.add('active');
            setSlide();
            console.log(dot.style.backgroundColor);
        });
        dotsWrapper.appendChild(dot);
    }
    return dotsWrapper;
}

function setSlide() {
    sliderContent.innerHTML = "";
    // for (let i = sliderIndex*3; i < 3*(sliderIndex+1); i++) {
    for (let i = sliderIndex; i < sliderIndex+slidetCount; i++) {
        let sliderImg = createSliderImage(sliderData[i]);
        sliderContent.appendChild(sliderImg);
    }
    let dots = createDots();
    sliderContent.appendChild(dots);
}
setSlide();