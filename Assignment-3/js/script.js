/*
    NASA SPACE EXPLORER
    JavaScript
    NASA Astronomy Picture of the Day API
*/


/* 
   API SETTINGS
 */

// Replace this with your NASA API key.
const API_KEY = "MbgEtRt2bLJvcMWln7WiJbjl1EzI1HHkV1qMKjax";

// NASA APOD API URL.
const API_URL = "https://api.nasa.gov/planetary/apod";


/* 
   STUDENT INFORMATION
 */

// Find the paragraph from the HTML.
const studentInfo =
    document.getElementById("studentInfo");

// Add student information dynamically using JavaScript.
studentInfo.textContent =
    "Student: Mateo Grueso | Student ID: 200655020";


/* 
   GET HTML ELEMENTS
 */

const datePicker =
    document.getElementById("datePicker");

const searchButton =
    document.getElementById("searchButton");

const randomButton =
    document.getElementById("randomButton");

const loading =
    document.getElementById("loading");

const errorMessage =
    document.getElementById("errorMessage");

const featuredContainer =
    document.getElementById("featuredContainer");

const gallery =
    document.getElementById("gallery");


/* 
   SET TODAY'S DATE
 */

// Get today's date.
const today =
    new Date().toISOString().split("T")[0];

// Prevent the user from selecting a future date.
datePicker.max = today;

// Set today's date as the default.
datePicker.value = today;


/*
   EVENT LISTENERS
*/

// Run getPictureByDate() when Explore is clicked.
searchButton.addEventListener("click", getPictureByDate);


// Run getRandomPictures() when Random Space Images is clicked.
randomButton.addEventListener("click", getRandomPictures);


/* 
   GET APOD BY DATE
*/

async function getPictureByDate() {

    // Get the date selected by the user.
    const selectedDate =
        datePicker.value;


    // Make sure a date was selected.
    if (!selectedDate) {

        showError(
            "Please select a date first."
        );

        return;
    }


    // Show loading message.
    showLoading();


    // Clear the gallery.
    gallery.innerHTML = "";


    try {

        // Create the NASA API request URL.
        const url =
            `${API_URL}?api_key=${API_KEY}&date=${selectedDate}&thumbs=true`;


        // Send request to NASA.
        const response =
            await fetch(url);


        // Check if request was successful.
        if (!response.ok) {

            throw new Error(
                `NASA API returned status ${response.status}`
            );

        }


        // Convert the response to JavaScript data.
        const data =
            await response.json();


        // Display the NASA information.
        displayFeatured(data);

    }

    catch (error) {

        console.error(
            "API Error:",
            error
        );


        showError(
            "Unable to load NASA data. Please check your API key and try again."
        );

    }

    finally {

        // Hide loading message.
        hideLoading();

    }
}


/* 
   GET RANDOM APOD IMAGES
*/

async function getRandomPictures() {

    // Show loading message.
    showLoading();


    // Clear existing gallery.
    gallery.innerHTML = "";


    try {

        // Request six random NASA images.
        const url =
            `${API_URL}?api_key=${API_KEY}&count=6&thumbs=true`;


        // Send request to NASA.
        const response =
            await fetch(url);


        // Check if request was successful.
        if (!response.ok) {

            throw new Error(
                `NASA API returned status ${response.status}`
            );

        }


        // Convert response to JavaScript.
        const data =
            await response.json();


        // Add each NASA image to the gallery.
        data.forEach(
            createGalleryCard
        );


        // Display the first random image
        // as the featured discovery.
        if (data.length > 0) {

            displayFeatured(
                data[0]
            );

        }

    }

    catch (error) {

        console.error(
            "API Error:",
            error
        );


        showError(
            "Unable to load random NASA images. Please check your API key."
        );

    }

    finally {

        // Hide loading message.
        hideLoading();

    }
}


/* 
   DISPLAY FEATURED NASA IMAGE
*/

function displayFeatured(data) {

    let mediaHTML = "";


    // NASA APOD can return either an image or a video.

    if (data.media_type === "image") {

        mediaHTML = `
            <img
                src="${data.url}"
                alt="${escapeHTML(data.title)}"
                class="featured-media"
            >
        `;

    }

    else if (data.media_type === "video") {

        mediaHTML = `
            <iframe
                class="featured-media"
                src="${data.url}"
                title="${escapeHTML(data.title)}"
                allowfullscreen>
            </iframe>
        `;

    }


    // Create the featured card.
    featuredContainer.innerHTML = `

        ${mediaHTML}

        <div class="featured-info">

            <h3>
                ${escapeHTML(data.title)}
            </h3>

            <p class="date">
                ${escapeHTML(data.date)}
            </p>

            <p class="explanation">
                ${escapeHTML(data.explanation)}
            </p>

            ${data.copyright
            ? `
                        <p class="copyright">
                            Copyright:
                            ${escapeHTML(data.copyright)}
                        </p>
                    `
            : ""
        }

        </div>

    `;
}


/* 
   CREATE GALLERY CARD
*/

function createGalleryCard(data) {

    /*
        Images use data.url.

        Videos may provide a thumbnail_url.
    */

    const imageURL =
        data.media_type === "image"
            ? data.url
            : data.thumbnail_url;


    // If there is no image, don't create a card.
    if (!imageURL) {

        return;

    }


    // Create an article element.
    const card =
        document.createElement("article");


    // Add CSS class.
    card.className =
        "gallery-card";


    // Create the gallery card HTML.
    card.innerHTML = `

        <img
            src="${imageURL}"
            alt="${escapeHTML(data.title)}"
            class="gallery-image"
            loading="lazy"
        >

        <div class="gallery-info">

            <h3>
                ${escapeHTML(data.title)}
            </h3>

            <p>
                ${escapeHTML(data.date)}
            </p>

        </div>

    `;


    /*
        When the user clicks a gallery image,
        display that image as the featured image.
    */

    card.addEventListener(
        "click",
        function () {

            displayFeatured(data);


            // Scroll back to the featured section.
            featuredContainer.scrollIntoView({
                behavior: "smooth"
            });

        }
    );


    // Add the card to the gallery.
    gallery.appendChild(card);
}


/* 
   LOADING FUNCTIONS
 */

function showLoading() {

    // Show loading message.
    loading.classList.remove(
        "hidden"
    );


    // Hide previous error.
    errorMessage.classList.add(
        "hidden"
    );
}


function hideLoading() {

    // Hide loading message.
    loading.classList.add(
        "hidden"
    );
}


/* 
   ERROR FUNCTION
 */

function showError(message) {

    // Put the error message into the paragraph.
    errorMessage.textContent =
        message;


    // Show the error message.
    errorMessage.classList.remove(
        "hidden"
    );
}


/* 
   HTML ESCAPING
 */

/*
    This function protects the page from
    HTML being inserted through API data.
*/

function escapeHTML(text) {

    if (!text) {

        return "";

    }


    return text
        .replaceAll("&", "&amp;")
        .replaceAll("<", "&lt;")
        .replaceAll(">", "&gt;")
        .replaceAll('"', "&quot;")
        .replaceAll("'", "&#039;");
}