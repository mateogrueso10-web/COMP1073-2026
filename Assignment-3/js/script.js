/* 
   NASA SPACE EXPLORER
   JavaScript
   NASA Astronomy Picture of the Day API
 */

/*  API Settings  */

// Replace this with your NASA API key.
const API_KEY = "MbgEtRt2bLJvcMWln7WiJbjl1EzI1HHkV1qMKjax";

// NASA APOD API URL.
const API_URL = "https://api.nasa.gov/planetary/apod";

/*  Student Information  */

// Find the paragraph from the HTML.
const studentInfo = document.getElementById("studentInfo");

// Add student information dynamically using JavaScript.
studentInfo.textContent =
    "Student: Mateo Grueso | Student ID: 200655020";

/*  Get HTML Elements  */

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

/*  Set Today's Date  */

// Get today's date.
const today = new Date().toISOString().split("T")[0];

// Prevent the user from selecting a future date.
datePicker.max = today;

// Set today's date as the default.
datePicker.value = today;

/*  Event Listeners  */

// Run getPictureByDate() when Explore is clicked.
searchButton.addEventListener("click", getPictureByDate);

// Run getRandomPictures() when Random Space Images is clicked.
randomButton.addEventListener("click", getRandomPictures);

/* Fetch Picture by Date  */

async function getRandomPictures() {

    // Show loading message.
    showLoading();


    // Clear existing gallery.
    gallery.innerHTML = "";


    try {

        // Request 6 random NASA images.
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

