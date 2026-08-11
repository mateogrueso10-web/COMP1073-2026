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
